import React, { useState } from "react";
import "../styling/Modal.css";

export default function Modal({ project, handleCloseModal }) {
  return (
    <div className="modal-container">
      <div className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <h1>{project.subtitle}</h1>
          <p>
            {project.description}
          </p>
          <div className="modal-images">
            {project.proImages.map(image => {
              const imageElement = (
                <img
                key={image}
                src={image.src}
                alt={image.alt}/>
              );
              return imageElement;
            })}
          </div>
          <button className="close-modal-button" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
