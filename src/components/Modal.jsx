import React, { useState } from "react";
import "../styling/Modal.css";

export default function Modal({ project, handleCloseModal }) {
  return (
    <div className="modal-container">
      <div className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <h1 className="title">{project.subtitle}</h1>
          <p>{project.description}</p>
          <h2 className="stack">Tech Stack</h2>
          <ul>
            {project.stack.map((item, index) => {
              const stackItem = <li key={index}>{item}</li>;
              return stackItem;
            })}
          </ul>
          <div className="modal-images">
            {project.proImages.map((image) => {
              const imageElement = (
                <img key={image} src={image.src} alt={image.alt} />
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
