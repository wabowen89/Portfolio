import React, { useState } from 'react';
import './Modal.css';

export default function Modal() {
  const [showModal, setShowModal] = useState(false); 

  const handleOpenModal = () => {
    setShowModal(true); 
  };
  
  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}