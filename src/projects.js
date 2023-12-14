export const projects = [
  {
    title: "Remote Controlled 1942 Jeep Willy",
    subtitle: "RC Jeep Willy Project",
    description:
      "This project is a future gift for my nephew. I designed a 3D model of my father's 1942 Jeep Willy in Fusion 360. Utilizing pictures of the jeep as well as pictures found online, I developed a 3D model in Fusion360. All parts are printed using a Flashforge Finder3. I then purchased some Arduino Uno R3's as well as a few NRF24L01 wireless transceivers, L298N motor drivers, motors, servos, and joysticks. I then utilized the native Arduino IDE to program the Arduino's to interface with each of the components followed by communication between two Arduino boards. This has been a process of trail and error as I am constantly running into new problems that are outside my knowledge scope. I am still in the process of printing the body and parts to be added to the body. Features to come: LED headlights and a speaker to play Jeep noises",
    src: "./gifs/HoneyHome.gif",
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
      "flashforge Finder3",
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
    github: "https://github.com/orgs/Jeep-Willy/repositories",
    website: "",
    appStore: "a",
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
