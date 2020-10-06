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
  paragraphOne:
    'I graduated from UF with a degree in CS. Interned with GE Digital and worked on a dependency management project that automated dependencies.',
  paragraphTwo:
    'Worked with Strategic Healthcare Management Systems and consolidated Healthcare data using sql server studio; doing so improved the runtime of the stored procedures..',
  paragraphThree:
    'I am a determined and energetic individual who is ready to provide quality software design knowlegde to an organization seeking a software engineer.',
  resume: 'https://drive.google.com/file/d/1OB6OBVOrE98UkCwVrw4lEAfTf8Vgayql/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Penalty Kicks',
    info:
      'I worked on developing a mobile Soccer game of Penalty Kicks as my final project in undergrad. The game contains AI components for the goalkeeper and the CPU (second player).',
    info2:
      'The trajectory of the ball when kicked by the CPU is determined by a random function which randomizes the components of the xyz axis.',
    url: '',
    repo: 'https://github.com/ldilan6/PenaltyKick', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me',
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
