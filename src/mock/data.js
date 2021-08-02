import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pete Low || Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Pete Low portfolio v3', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pete Low',
  subtitle: 'Front-End Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Web developer with a background in operations and restaurants.',
  paragraphTwo: 'Expert in overcoming challenges with passion for teaching others and proud member of the disabled community.',
  paragraphThree: 'I believe in straightforward communication working as a team, and striving to learn more each day and pass it along to others...and Science',
  resume: 'https://docs.google.com/document/d/1qOzf2lk4ZBRZBNG3a7ZJutPAOJ8auUgWc079Etefj9A/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'menu.png',
    title: 'MD Charcuterie',
    info: 'A site for a small business to sell charcuterie and inform customers',
    info2: 'JavaScript, ReactJS, MongoDB, CSS, HTML, Express, Node.JS, bycryptjs, jsonwebtokens, Axios, Multer, Mongoose, Morgan, Bootstrap.min',
    url: 'https://ldcharcuterie.herokuapp.com',
    repo: 'https://github.com/PeteLow-13/Charcuterie', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sk8tool.png',
    title: 'Sk8Tool',
    info: 'A project that allows Skateboarders to Find Skateparks, Skateshops and also view and add Skate Spots to our database',
    info2: 'JavaScript, CSS3, HTML5, HandlebarsJS, Google Maps API, Open Weather API',
    url: 'https://sk8fndr.herokuapp.com/',
    repo: 'https://github.com/PeteLow-13/Project-02-Sk8Tool', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherdashboard.png',
    title: 'Weather Dashboard',
    info: 'A tool to check the weather and the the weather forcast for any city',
    info2: 'JavaScript, HTML5, CSS3, Open Weather API',
    url: 'https://petelow-13.github.io/WeatherApp/',
    repo: 'https://github.com/PeteLow-13/WeatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'funapp.png',
    title: 'Parent Break- Fun App',
    info: 'An app for parents to use to provide safe prescreened content for their children.',
    info2: 'JavaScript, HTML5, SCSS, CSS3',
    url: 'https://project03familyapp.herokuapp.com/',
    repo: 'https://github.com/PeteLow-13/FunApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ps1.png',
    title: 'Pro Shop',
    info: 'Pro shop is a full stack MERN site for eCommerce. A seller or Admin user can create and display products. Orders can be taken and payments processed by PayPal. Orders can be updated and maked as paid and shipped.',
    info2: 'JavaScript, ReactJS, MongoDB, CSS, HTML, Express, Node.JS, bycryptjs, jsonwebtokens, Axios, Multer, Mongoose, Morgan',
    url: '',
    repo: 'https://github.com/PeteLow-13/Proshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burgerapp.png',
    title: 'Burger Party',
    info: 'A fun little app to create burgers you would like to eat and save them until you devour them!',
    info2: 'JavaScript, HTML5, CSS3, Open Weather API',
    url: '',
    repo: 'https://github.com/PeteLow-13/BurgerParty', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: `Let's build things together`,
  btn: 'Get in touch',
  email: 'pedritolow@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pete-low/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PeteLow-13',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to true to enable the GitHub stars/fork buttons
};
