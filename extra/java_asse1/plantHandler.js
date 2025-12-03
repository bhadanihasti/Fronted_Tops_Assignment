// plantHandler.js
export class PlantReportHandler {
  constructor(opts = {}) {
    this.formSelector = opts.formSelector || null;
    this.msgSelector = opts.msgSelector || null;
    this.containerSelector = opts.containerSelector || '#reportsContainer';
    this.searchSelector = opts.searchSelector || '#searchInput';
    this.storageKey = opts.storageKey || 'plantReports';
    this.viewMode = !!opts.viewMode;
  }

  init() {
    // form mode
    this.form = document.querySelector(this.formSelector);
    this.msgBox = document.querySelector(this.msgSelector);
    if (!this.form) throw new Error('Form selector not found.');

    // event delegation: submit & input
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onSubmit(e);
    });

    // reset/clear
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.addEventListener('click', () => this.clearForm());

    // real-time validation (input/blur)
    this.form.addEventListener('input', (e) => this._handleRealtime(e));
    this.form.addEventListener('blur', (e) => this._handleRealtime(e), true);
  }

  initView() {
    // view mode
    this.container = document.querySelector(this.containerSelector);
    this.searchInput = document.querySelector(this.searchSelector);
    this.msgBox = document.querySelector('#messageBox') || null;

    // load initial
    this.loadAndRender();

    // search
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.loadAndRender(this.searchInput.value.trim()));
    }

    // event delegation for delete / export / import / clear all
    document.getElementById('reportsContainer').addEventListener('click', (e) => {
      const del = e.target.closest('[data-delete-id]');
      if (del) {
        const id = del.getAttribute('data-delete-id');
        this.deleteReport(id);
      }
    });

    document.getElementById('exportBtn').addEventListener('click', () => this.exportData());
    document.getElementById('importFile').addEventListener('change', (ev) => this.importData(ev.target.files[0]));
    document.getElementById('clearAll').addEventListener('click', () => {
      if (confirm('Clear all saved reports?')) {
        localStorage.removeItem(this.storageKey);
        this.loadAndRender();
      }
    });
  }

  // ---------- form submit ----------
  onSubmit(e) {
    const data = this._collectFormData();
    const validation = this.validateForm(data);
    if (!validation.valid) {
      this.showMessage('error', validation.errors.join('<br/>'));
      this._showFieldErrors(validation.fieldErrors || {});
      return;
    }

    // attach id & timestamp
    data.id = 'r_' + Date.now();
    data.createdAt = new Date().toISOString();

    this.saveToLocalStorage(data);
    this.showMessage('success', 'Report saved successfully.');
    this.clearForm();
  }

  // collect form data into object
  _collectFormData() {
    const fm = this.form;
    const fd = new FormData(fm);
    return {
      plantName: (fd.get('plantName') || '').trim(),
      location: (fd.get('location') || '').trim(),
      frequency: Number(fd.get('frequency')) || 0,
      lastWatered: fd.get('lastWatered') || '',
      notes: (fd.get('notes') || '').trim(),
      phone: (fd.get('phone') || '').trim(),
      email: (fd.get('email') || '').trim()
    };
  }

  // ---------- validation ----------
  validateForm(data) {
    const errors = [];
    const fieldErrors = {};

    // All required
    const requiredFields = ['plantName','location','frequency','lastWatered','notes','phone','email'];
    requiredFields.forEach(f => {
      if (!data[f] && data[f] !== 0) {
        fieldErrors[f] = 'Required';
        errors.push(`${this._pretty(f)} is required.`);
      }
    });

    // Plant name ≥3 chars
    if (data.plantName && data.plantName.length < 3) {
      fieldErrors.plantName = 'Minimum 3 characters';
      errors.push('Plant Name must be at least 3 characters.');
    }

    // Frequency > 0
    if (!Number.isFinite(data.frequency) || data.frequency <= 0) {
      fieldErrors.frequency = 'Must be a number > 0';
      errors.push('Watering Frequency must be a number greater than 0.');
    }

    // lastWatered must be a valid past or today date
    if (data.lastWatered) {
      const d = new Date(data.lastWatered);
      if (isNaN(d.getTime())) {
        fieldErrors.lastWatered = 'Invalid date';
        errors.push('Last Watered date is invalid.');
      } else {
        const today = new Date();
        today.setHours(0,0,0,0);
        if (d > today) {
          fieldErrors.lastWatered = 'Cannot be in the future';
          errors.push('Last Watered cannot be in the future.');
        }
      }
    }

    // Notes minimum 15 chars
    if (data.notes && data.notes.length < 15) {
      fieldErrors.notes = 'Minimum 15 characters';
      errors.push('Notes must be at least 15 characters.');
    }

    // Phone exactly 10 digits
    if (data.phone && !/^\d{10}$/.test(data.phone)) {
      fieldErrors.phone = 'Phone must be exactly 10 digits';
      errors.push('Phone must be exactly 10 digits.');
    }

    // Valid email
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      fieldErrors.email = 'Invalid email';
      errors.push('Email format is invalid.');
    }

    return { valid: errors.length === 0, errors, fieldErrors };
  }

  _pretty(field) {
    const map = { plantName:'Plant Name', lastWatered:'Last Watered', frequency:'Frequency' };
    return map[field] || field;
  }

  _showFieldErrors(fe) {
    // iterate form fields and show messages in <small class="error">
    if (!this.form) return;
    for (const input of this.form.querySelectorAll('input,textarea,select')) {
      const name = input.name;
      const small = input.parentElement.querySelector('.error');
      if (small) {
        small.textContent = fe[name] || '';
      }
    }
  }

  // ---------- real-time validation ----------
  _handleRealtime(e) {
    // only for form fields
    const el = e.target;
    if (!el || !el.name) return;

    // quick validate single field
    const data = this._collectFormData();
    const single = this._validateSingleField(el.name, data);
    const small = el.parentElement.querySelector('.error');
    if (small) small.textContent = single || '';
  }

  _validateSingleField(field, data) {
    // returns error string or empty
    switch (field) {
      case 'plantName':
        if (!data.plantName) return 'Required';
        if (data.plantName.length < 3) return 'Min 3 chars';
        return '';
      case 'frequency':
        if (!data.frequency) return 'Required';
        if (data.frequency <= 0) return 'Must be > 0';
        return '';
      case 'lastWatered':
        if (!data.lastWatered) return 'Required';
        const d = new Date(data.lastWatered);
        if (isNaN(d.getTime())) return 'Invalid date';
        if (d > new Date()) return 'Cannot be future';
        return '';
      case 'notes':
        if (!data.notes) return 'Required';
        if (data.notes.length < 15) return 'Min 15 chars';
        return '';
      case 'phone':
        if (!data.phone) return 'Required';
        if (!/^\d{10}$/.test(data.phone)) return 'Exactly 10 digits';
        return '';
      case 'email':
        if (!data.email) return 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Invalid email';
        return '';
      case 'location':
        if (!data.location) return 'Required';
        return '';
      default:
        return '';
    }
  }

  // ---------- localStorage CRUD ----------
  saveToLocalStorage(obj) {
    const arr = this._getAll();
    arr.push(obj);
    localStorage.setItem(this.storageKey, JSON.stringify(arr));
  }

  _getAll() {
    const raw = localStorage.getItem(this.storageKey);
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  // ---------- clear form ----------
  clearForm() {
    if (!this.form) return;
    this.form.reset();
    // clear errors
    this._showFieldErrors({});
  }

  // ---------- UI message ----------
  showMessage(type = 'info', text = '') {
    if (!this.msgBox) {
      // fallback alert
      if (type === 'error') alert(text);
      else console.log(text);
      return;
    }
    this.msgBox.innerHTML = `<div class="msg ${type}">${text}</div>`;
    setTimeout(() => {
      if (this.msgBox) this.msgBox.innerHTML = '';
    }, 3500);
  }

  // ---------- view rendering ----------
  loadAndRender(filter = '') {
    const data = this._getAll();
    let filtered = data;
    if (filter) {
      const q = filter.toLowerCase();
      filtered = data.filter(r => (r.plantName + ' ' + r.location).toLowerCase().includes(q));
    }

    const container = document.querySelector(this.containerSelector);
    const noDataEl = document.getElementById('noData');
    if (!container) return;

    if (!filtered || filtered.length === 0) {
      container.innerHTML = '';
      if (noDataEl) noDataEl.style.display = 'block';
      return;
    }
    if (noDataEl) noDataEl.style.display = 'none';

    // render cards + table
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'reports-grid';

    filtered.slice().reverse().forEach(report => {
      const card = document.createElement('article');
      card.className = 'report-card';
      card.innerHTML = `
        <div class="card-head">
          <h3>${this._escape(report.plantName)}</h3>
          <div class="meta">${this._escape(report.location)} • Last: ${this._escape(report.lastWatered)}</div>
        </div>
        <p class="notes">${this._escape(report.notes)}</p>
        <div class="report-footer">
          <div>Frequency: <strong>${this._escape(String(report.frequency))} days</strong></div>
          <div>Owner: ${this._escape(report.phone)} / ${this._escape(report.email)}</div>
          <div class="actions">
            <button class="btn btn-danger" data-delete-id="${this._escape(report.id)}">Delete</button>
          </div>
        </div>
      `;
      wrapper.appendChild(card);
    });

    container.appendChild(wrapper);
  }

  _escape(s='') {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ---------- delete ----------
  deleteReport(id) {
    const arr = this._getAll();
    const idx = arr.findIndex(r => r.id === id);
    if (idx === -1) {
      this.showMessage && this.showMessage('error','Report not found');
      return;
    }
    arr.splice(idx,1);
    localStorage.setItem(this.storageKey, JSON.stringify(arr));
    this.loadAndRender(this.searchInput ? this.searchInput.value.trim() : '');
    this.showMessage && this.showMessage('success','Report deleted');
  }

  // ---------- import / export ----------
  exportData() {
    const data = this._getAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `plantReports_${new Date().toISOString().slice(0,19).replace(/[:T]/g,'_')}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) throw new Error('Invalid format');
        // merge by id (keep existing)
        const existing = this._getAll();
        const map = new Map(existing.map(r => [r.id, r]));
        imported.forEach(r => {
          if (r.id && !map.has(r.id)) map.set(r.id, r);
        });
        const merged = Array.from(map.values());
        localStorage.setItem(this.storageKey, JSON.stringify(merged));
        this.loadAndRender(this.searchInput ? this.searchInput.value.trim() : '');
        this.showMessage && this.showMessage('success','Imported successfully');
      } catch (err) {
        alert('Import failed: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
}
