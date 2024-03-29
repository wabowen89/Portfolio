// src/components/Projects.js

import React, { useState } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../projects.js";
import Modal from "./Modal"



export default function Projects() {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are a few images displaying projects I have worked on. Please
            click the image to view a description, the tech stack, more images,
            Github links, and any other links associated with the project.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div className="bg-gray-900 bg-opacity-75 p-2">
                <img
                  className="object-cover object-center mb-4 cursor-pointer"
                  style={{height: "200px", width: "100%"}}
                  src={project.src}
                  alt={project.alt}
                  onClick={() => handleOpenModal(project)}
                />
                <h1
                  className="title-font text-lg font-medium text-white mb-3 cursor-pointer"
                  onClick={() => handleOpenModal(project)}
                >
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <Modal
            project={selectedProject}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};

