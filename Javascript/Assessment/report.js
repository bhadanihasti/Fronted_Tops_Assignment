document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

   if (!validateForm(this)) {
    return; // ⛔ STOP if invalid
  }
  let report = {
     plantName: this.plantName.value,
    location: this.location.value,
    frequency: this.frequency.value,
    lastWatered: this.lastWatered.value,
    notes: this.notes.value,
    phone: this.phone.value,
    email: this.email.value,
    date: new Date().toLocaleString()
  };

  // get old data
  let reports = JSON.parse(localStorage.getItem("plantReports")) || [];

  // add new report
  reports.push(report);

  // save again
  localStorage.setItem("plantReports", JSON.stringify(reports));

  alert("Report Submitted Successfully ✅");

  this.reset();

  // optional: auto redirect
  window.location.href = "view.html";
});
