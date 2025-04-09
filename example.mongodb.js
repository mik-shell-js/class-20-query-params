use('app');

db.space.drop();
db.createCollection('space');

db.space.insertOne({
  name: "Galaxy",
  description: "A vast system of billions of stars, gas, and dust bound together by gravity, often arranged in spiral arms or elliptical shapes and spanning thousands of light-years across the cosmos.",
  source: "Microsoft Copilot"
});

db.space.insertMany([
  {
    name: "Asteroid",
    description: "An asteroid is a small rocky body that orbits the sun, typically found in the asteroid belt between Mars and Jupiter.",
    source: "Microsoft Copilot"
  },
  {
    name: "Black Hole",
    description: "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.",
    source: "Microsoft Copilot",
  },
  {
    name: "Cloud Nebulae",
    description: "Cloud nebulae are vast clouds of gas and dust in space, often the birthplace of stars and planets.",
    source: "Microsoft Copilot",
  },
  {
    name: "Distant Space",
    description: "Distant space refers to the far reaches of the universe, beyond our immediate cosmic neighborhood.",
    source: "Microsoft Copilot"
  },
  {
    name: "Galaxy Collision",
    description: "A galaxy collision occurs when two galaxies pass through each other, often resulting in the formation of new stars.",
    source: "Microsoft Copilot"
  },
  {
    name: "Moon",
    description: "A moon is a natural satellite that orbits a planet, such as Earth's moon which influences tides and has phases.",
    source: "Microsoft Copilot"
  },
  {
    name: "Pulsar",
    description: "A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation.",
    source: "Microsoft Copilot",
  },
  {
    name: "Star Death",
    description: "Star death refers to the end of a star's life cycle, which can result in a supernova, black hole, or white dwarf.",
    source: "Microsoft Copilot"
  },
  {
    name: "Sun",
    description: "The Sun is the star at the center of our solar system, providing light and heat essential for life on Earth.",
    source: "Microsoft Copilot"
  }
]);

db.questions.drop();
db.createCollection('questions');

db.questions.insertMany([
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
    source: "Microsoft Copilot"
  },
  {
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application. They are reusable pieces of UI that can be nested, managed, and handled independently.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates and rendering by only changing parts of the DOM that need to be updated.",
    source: "Microsoft Copilot"
  },
  {
    question: "What are props in React?",
    answer: "Props (short for properties) are read-only attributes used to pass data from a parent component to a child component.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is state in React?",
    answer: "State is an object that holds data that may change over the lifecycle of a component. It is managed within the component and can be updated using the setState method.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is the difference between state and props?",
    answer: "Props are read-only and passed from parent to child components, while state is managed within the component and can change over time.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is a lifecycle method in React?",
    answer: "Lifecycle methods are special methods in React components that are called at different stages of a component's lifecycle, such as mounting, updating, and unmounting.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is a higher-order component (HOC)?",
    answer: "A higher-order component is a function that takes a component and returns a new component with additional props or behavior.",
    source: "Microsoft Copilot"
  },
  {
    question: "What is React Hooks?",
    answer: "React Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext.",
    source: "Microsoft Copilot"
  }
]);
