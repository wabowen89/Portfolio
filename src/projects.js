export const projects = [
  {
    title: "Remote Controlled 1942 Jeep Willy",
    subtitle: "RC Jeep Willy Project",
    description:
      "This project is a future gift for my nephew. I designed a 3D model of my father's 1942 Jeep Willy in Fusion 360 utilizing pictures of the jeep as well as pictures found online. All parts are printed using a Flashforge Finder3 in standard PLA. I then purchased some Arduino Uno R3's as well as a few NRF24L01 wireless transceivers, L298N motor drivers, motors, servos, and joysticks. I then utilized the native Arduino IDE to program the Arduino's to interface with each of the components followed by communication between two Arduino boards. This has been a process of trail and error as I am constantly running into new problems that are outside my knowledge scope. I am still in the process of printing the body, redesigning the steering assembly, and printing the parts to be added to the body.",
    src: "./assets/jeep/jeep-full.png",
    alt: "1942 Jeep Willy Model",
    stack: [
      "Arduino Uno R3",
      "Arduino IDE",
      "RHReliableDatagram Library",
      "RH_NRF24 Library",
      "PWMServo Library",
      "SPI Library",
      "NRF24L01 Wireless Transceiver",
      "L298N Motor Driver",
      "Fusion360",
      "Flashforge Finder3",
    ],
    features: [
      "Add speaker and code to play jeep noises",
      "Add headlights and code to turn them on",
    ],
    github: "https://github.com/orgs/Jeep-Willy/repositories",
    website: "",
    appStore: "",
    proImages: [
      {
        src: "./assets/jeep/jeep-full.png",
        alt: "jeep-full",
        descr: "Intended Complete Form",
      },
      {
        src: "./assets/jeep/jeep-real.jpg",
        alt: "jeep-real",
        descr: "Basis for Model",
      },
      {
        src: "./assets/jeep/jeep-full-back.png",
        alt: "jeep-full-back-left",
        descr: "View From Behind",
      },
      {
        src: "./assets/jeep/jeep-interior.png",
        alt: "jeep-full-back",
        descr: "View From Behind",
      },
      {
        src: "./assets/jeep/jeep-front.png",
        alt: "jeep-front",
        descr: "View of Front",
      },
      {
        src: "./assets/jeep/jeep-rear.png",
        alt: "jeep-rear",
        descr: "View of Rear",
      },
      {
        src: "./assets/jeep/jeep-left-side.png",
        alt: "jeep-left-side",
        descr: "View From Left Side",
      },
      {
        src: "./assets/jeep/jeep-rear-gears.png",
        alt: "jeep-rear-gears",
        descr: "Rear Gearbox",
      },
      {
        src: "./assets/jeep/jeep-steering-V3.png",
        alt: "jeep-steering-V3",
        descr: "Version 3 of Steering Assembly",
      },
      {
        src: "./assets/jeep/jeep-steering-V4.png",
        alt: "jeep-steering-V4",
        descr: "Version 4 of Steering Assembly",
      },
      {
        src: "./assets/jeep/jeep-printed-rear-body.jpg",
        alt: "jeep-printed-rear-body",
        descr: "First Attempted Body Print. Two Different Print Methods",
      },
      {
        src: "./assets/jeep/jeep-printed-rear-gearbox.jpg",
        alt: "jeep-printed-rear-gearbox",
        descr: "Printed Rear Gearbox",
      },
      {
        src: "./assets/jeep/jeep-printed-electronics.jpg",
        alt: "jeep-printed-electronics",
        descr: "Printed Chassis with Electronics Installed",
      },
      {
        src: "./assets/jeep/jeep-printed-electronics2.jpg",
        alt: "jeep-printed-electronics2",
        descr: "Printed Chassis with Electronics Installed",
      },
    ],
  },
  {
    title: "bLinkup Sample Application",
    subtitle: "Demonstration Application for bLinkup SDK",
    description: "temp text",
    src: "./gifs/HoneyHome.gif",
    alt: "bLinkup Sample App Login Screen",
    stack: ["Kotlin", "bLinkup SDK", "Android Studio"],
    proImages: [
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
    ],
    github: "https://github.com/blinkupsdk/bLinkupKotlinSample",
    site: "",
  },
  {
    title: "HoneyHome",
    subtitle: "LEARN Capstone Project",
    description:
      "This is my full stack project completed with LEARN academy. I worked with four teammates to create this application. We utilized JS, React, Ruby, Ruby on Rails, and PostgreSQL along with Devise and JWT Authentication.",
    src: "./gifs/HoneyHome.gif",
    alt: "HoneyHome Login Screen",
    stack: [
      "Javascript",
      "Ruby",
      "HTML",
      "CSS",
      "React.js",
      "Ruby on Rails",
      "PostgreSQL",
      "Render",
    ],
    proImages: [
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
      {
        src: "./gifs/HoneyHome.gif",
        alt: "temp",
      },
    ],
    github: "https://github.com/orgs/Team-WHAK/repositories",
    site: "",
  },
];
