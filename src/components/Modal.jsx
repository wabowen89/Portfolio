import React, { useState } from "react";
import "../styling/Modal.css";

export default function Modal({ project, handleCloseModal }) {
  return (
    <div className="modal-container">
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <h1 className="title">{project.subtitle}</h1>
        <div className="content-wrapper">
          <div className="description">
            <h2 className="description-title">Description:</h2>
            <p className="description-contents">{project.description}</p>
          </div>
          <div className="tech-stack">
            <h2 className="stack">Tech Stack:</h2>
            <ul>
              {project.stack.map((item, index) => {
                const stackItem = <li key={index}>{item}</li>;
                return stackItem;
              })}
            </ul>
          </div>
        </div>
        {project.features.length > 0 && (
          <div className="features-container">
            <h2 className="features-title">Upcoming Features</h2>
            <div className="features-list">
              {project.features.map((item, index) => {
                const featureItem = <li key={index}>{item}</li>;
                return featureItem;
              })}
            </div>
          </div>
        )}
        <div className="links-container">
          <div className="links-title">
            <h2>Links</h2>
          </div>
          <div className="link-items-container">
            {project.links.map((item, index) => {
              return (
                <div className="links" key={index}>
                  <h3 className="">{item.title}:</h3>
                  <a href={item.address} target="_blank">
                    {item.address}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="image-title">Pictures</h1>
        <div className="modal-images">
          {project.proImages.map((image) => {
            const imageElement = (
              <div>
                <img key={image} src={image.src} alt={image.alt} />
                <h3>{image.descr}</h3>
              </div>
            );
            return imageElement;
          })}
        </div>
      </div>
      <div className="close-modal-icon" onClick={handleCloseModal}>
        X
      </div>
    </div>
  );
}
