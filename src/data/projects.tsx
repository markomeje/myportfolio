import bpm from '../assets/projects/bpm.png';
import geoprecise from '../assets/projects/geoprecise.png';
import buildadom from '../assets/projects/buildadom.png';
import subrefill from '../assets/projects/subrefill.webp';

export const projects = [
   {
      text: 'Real estate platform for real estate agents and developers for listing properties. A way to connect both buyers and sellers of real estate properties.',
      image: bpm,
      skills: ['Laravel', 'MySql', 'Git', 'Javascript', 'Bootstrap', 'Restful API', 'Cloudinary', 'Heroku', 'CI/CD'],
      links: {web: 'https://bestpropertymarket.com', ios: 'https://apps.apple.com/ng/app/bpmarket/id6443850733', android: 'https://play.google.com/store/apps/details?id=com.bestpropertymarket.bestpropertymarket'},
      done: false
   },
   {
      text: 'A web backend for accepting applications, payments and documents verification for all services related to land purchases, tranfer of ownership, survey and lifting etc.',
      image: geoprecise,
      skills: ['CSS', 'Laravel', 'MySql', 'Javascript', 'Bootstrap', 'Git'],
      links: {web: 'https://admin.geoprecisegroup.com'},
      done: false
   },
   {
      text: 'A mobile wallet RestFul API for data, airtime, TV and Electricity subscription. Account funding via online payments.',
      image: subrefill,
      skills: ['Laravel', 'MySql', 'Git', 'Restful API'],
      links: {android: 'https://play.google.com/store/apps/details?id=com.kingsbyte.subrefill'},
      done: true
   },
   {
      text: 'A fullstack multi-vendor ecommerce web application for building materials marchandising, tracking and delivery.',
      image: buildadom,
      skills: ['Typescript', 'AWS', 'Git', 'Laravel', 'MySql', 'Reactjs', 'Bootstrap', 'Restful API'],
      links: {web: 'https://main.dij0qcdp9s45x.amplifyapp.com'},
      done: false
   },
];