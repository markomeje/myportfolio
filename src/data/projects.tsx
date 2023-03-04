import bpm from '../assets/projects/bpm.png';
import geoprecise from '../assets/projects/geoprecise.png';
import buildadom from '../assets/projects/buildadom.png';
import subrefill from '../assets/projects/subrefill.webp';

export const projects = [
   {
      text: 'Real estate platform for real estate agents and developers for listing properties. A way to connect both buyers and sellers of real estate properties.',
      image: bpm,
      skills: ['Laravel', 'MySql', 'Javascript', 'Bootstrap', 'Restful API', 'Cloudinary', 'Heroku', 'CI/CD'],
      links: {web: 'https://bestpropertymarket.com', ios: '', android: ''},
      done: false
   },
   {
      text: 'A web backend application for applications, payments and documents verification for all services related to land purchases, tranfer of ownership, survey and lifting.',
      image: geoprecise,
      skills: ['CSS', 'Laravel', 'MySql', 'Javascript', 'Bootstrap', 'CI/CD'],
      links: {web: 'https://admin.geoprecisegroup.com'},
      done: false
   },
   {
      text: 'A mobile app RestFul API for data, airtime, TV and Electricity subscription. Consuming multiple APIs and handling errors.',
      image: subrefill,
      skills: ['Laravel', 'MySql', 'Restful API'],
      links: {android: 'https://play.google.com/store/apps/details?id=com.kingsbyte.subrefill'},
      done: true
   },
   {
      text: 'A fullstack ecommerce web application for building materials marchandising, tracking inter-state delivery and escrow.',
      image: buildadom,
      skills: ['Typescript', 'AWS', 'Laravel', 'MySql', 'Reactjs', 'Bootstrap', 'Restful API'],
      links: {web: 'https://main.dij0qcdp9s45x.amplifyapp.com'},
      done: false
   },
];