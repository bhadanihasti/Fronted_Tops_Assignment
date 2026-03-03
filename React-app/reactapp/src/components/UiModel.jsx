import React, { useState } from "react";
import "./UiModel.css";

function UiModel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <button className="nav-btn" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      </nav>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Welcome 👋</h3>
            <p>This is a simple modal popup in React.</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UiModel;
