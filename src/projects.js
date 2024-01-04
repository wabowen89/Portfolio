export const projects = [
  {
    title: "Remote Controlled 1942 Jeep Willy",
    subtitle: "RC Jeep Willy Project",
    description:
      "In this project, I'm building a special gift for my nephew – a 3D-printed replica of my dad's old 1942 Jeep Willy! I started by diving into photos and recreating the Jeep in Fusion 360. Now, my Flashforge Finder3 is bringing it to life, one layer at a time. But this isn't just a model – it's getting \"brains\" with Arduinos, wireless communication, motors, and a servo, all controlled by code written in the Arduino IDE. It's been a challenging learning curve, full of unexpected bumps, but that's part of the joy! Every stage is a cycle of creative problem-solving. I brainstorm ideas, test them (sometimes to spectacular failure), learn from the wreckage, and try again. Right now, the steering mechanism is taking center stage, completing the intricate puzzle of the interior. Next, the Jeep's body will roll off the printer, followed by an assembly line of exterior additions. Then comes the grand finale: final assembly and a fresh coat of paint. I can't wait to see this project roll into the finish line and use everything I've learned to fuel future adventures in creation.",
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
    links: [
      {
        title: "Github",
        address: "https://github.com/orgs/Jeep-Willy/repositories",
      },
    ],
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
    description:
      'This mobile application, specially designed for Android devices, unveils the capabilities of the bLinkup SDK, offering developers a captivating experience. It seamlessly blends various features to enhance social connections and event engagement. Users can effortlessly befriend each other within the app, receive timely notifications when their bLinkup friends arrive at events, and navigate interactive venue maps dotted with clickable "bLinkpoints"—strategically placed by event owners—to effortlessly coordinate meet-ups by sharing the location information directly through apps on their phones. Geofencing technology eliminates the need for manual check-ins, automatically notifying users when they enter designated venues. The app also integrates with phone contacts, allowing users to discover bLinkup users among their friends and send friend requests seamlessly. For developers, the app offers a manual check-in/out functionality, fostering convenient testing and debugging of events. This app is a powerful showcase of the bLinkup SDK\'s potential, revolutionizing user experiences with its suite of comprehensive and engaging features, crafted collaboratively by me and two other developers.',
    src: "./assets/blinkup/cover-pic.jpg",
    alt: "bLinkup Sample App Login Screen",
    stack: ["Kotlin", "bLinkup SDK", "Android Studio"],
    features: ["Webhook notifications", "Google Play Store Link"],
    links: [
      {
        title: "Github",
        address: "https://github.com/blinkupsdk/bLinkupKotlinSample",
      },
    ],
    proImages: [
      {
        src: "./assets/blinkup/login.jpg",
        alt: "login-screen",
        descr: "Login Screen",
      },
      {
        src: "./assets/blinkup/sms.jpg",
        alt: "temp-passcode-screen",
        descr: "Temporary Passcode Screen",
      },
      {
        src: "./assets/blinkup/friends-tab.jpg",
        alt: "friends-tab",
        descr: "Friends Tab",
      },
      {
        src: "./assets/blinkup/phone-contacts.jpg",
        alt: "phone-contacts-screen",
        descr: "Match Phone Contacts Window",
      },
      {
        src: "./assets/blinkup/pending-request.jpg",
        alt: "pending-request-screen",
        descr: "Pending Friend Request Window",
      },
      {
        src: "./assets/blinkup/blocked-users.jpg",
        alt: "blocked-users-screen",
        descr: "Blocked Users Window",
      },
      {
        src: "./assets/blinkup/presence-tab.jpg",
        alt: "presence-tab",
        descr: "Presence Tab",
      },
      {
        src: "./assets/blinkup/dev-details.jpg",
        alt: "dev-details-screen",
        descr: "Developer Details Window",
      },
      {
        src: "./assets/blinkup/map-tab.jpg",
        alt: "map-tab",
        descr: "Map Tab with List of Events",
      },
      {
        src: "./assets/blinkup/map-display.jpg",
        alt: "map-display",
        descr: "Interactive Map Display with bLinkPoints",
      },
      {
        src: "./assets/blinkup/blinkpoint-window.jpg",
        alt: "blinkpoint-window",
        descr: "Customizable Window for bLinkPoint",
      },
      {
        src: "./assets/blinkup/settings-tab.jpg",
        alt: "settings-tab",
        descr: "Setting Tab",
      },
    ],
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
    features: [],
    links: [
      {
        title: "Github",
        address: "https://github.com/orgs/Team-WHAK/repositories",
      },
      {
        title: "Website",
        address: "https://honey-home.onrender.com/",
      },
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
  },
];
