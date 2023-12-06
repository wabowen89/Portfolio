// src/components/Projects.js

import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";



export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are a few gifs displaying the UI for web applications I have
            built. Please click the gif to view the source code on my GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.image} className="bg-gray-900 bg-opacity-75 p-4">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center mb-4"
                src={project.image}
              />
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

