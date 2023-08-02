// src/components/About.js

import React from "react";
import Me from "../assets/Me.jpg"
import LI from "../assets/LI.png"
import Github from "../assets/Github.png"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Will.
            <br className="hidden lg:inline-block" />I am a Full Stack Web Developer!
            {/* <Typed
              strings={["I build web applications."]}
              typeSpeed={70}
              backSpeed={50}
              loop
            /> */}
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a passionate coder working with multiple different languages. I am based in San Diego and love to solve real-world problems with the use of technology. I currently work with JavaScript, HTML, CSS, Ruby, Kotlin, React, Ruby on Rails, and PostgreSQL. Always a team player, working with others is one of my favorite aspects of the job. Feel free to take a look at some of my past projects. If you like what you see, please feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's Team Up!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check Out My Other Projects
            </a>
          </div>
          <br />
          <div className="flex">
            <a href="https://linkedin.com/in/wabowen89" target="_blank" rel="noopener noreferrer">
              <img
                className="rounded"
                alt="LinkedIn"
                src={LI}
                style={{ width: "40px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a href="https://github.com/wabowen89" target="_blank" rel="noopener noreferrer">
            <img
              className="rounded"
              alt="Github"
              src={Github}
              style={{ width: "40px", height: "auto" }}
            />
            </a>
          </div>
        </div>

      </div>
      <img
        className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        alt="headshot"
        src={Me}
      />
    </section>

  );
}