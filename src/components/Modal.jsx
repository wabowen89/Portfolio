import React, { useState } from "react";
import "../styling/Modal.css";

export default function Modal({ showModal, handleCloseModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button
        className="close-modal-button"
        onClick={handleCloseModal}>
          Will This Change The Tag Of the Close Button at all??????
        </button>
      </div>
    </div>

  );
}
