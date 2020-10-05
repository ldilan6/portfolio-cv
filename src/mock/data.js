import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Dilan Loyola',
  subtitle: 'A Software Engineer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  // paragraphOne: 'Graduated from the Univeristy of Florida with a Bachelors degree in Computer Science.Interned at GE DIgital,
  //  developed a tool that automated the dependency management for the Predix Data Services team. Worked as a Software Engineer
  //  at Strategic Healthcare Management Systems. Consolidated the healthcare data in SQL Server Studio in order to improve the runtime
  //  of the stored procedures.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1OB6OBVOrE98UkCwVrw4lEAfTf8Vgayql/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Penalty Kicks',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/ldilan6/PenaltyKick', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
