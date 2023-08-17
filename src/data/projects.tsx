import bpm from '../assets/projects/bpm.png';
import buildadom from '../assets/projects/buildadom.png';
import subrefill from '../assets/projects/subrefill.webp';
import xpressglobe from '../assets/projects/xpressglobe.png';
import qmarthub from '../assets/projects/qmarthub.png';

const choice = 'https://ralphjsmit.com/';

export const projects = [
  {
    text: 'I worked as a remote frontend developer on a large scale ecommerce web application where multiple vendors can sell their products. Buyers can also make payment. I implemented frontend tasks in Vuejs.',
    image: qmarthub,
    skills: ['Vuejs', 'Typescript', 'Git', 'Tailwind', 'Bootstrap', 'Testing', 'JWT', 'HTML', 'CSS'],
    links: {web: 'https://qmarthub.com'},
    done: false
  },
  {
    text: 'I worked as a remote fullstack developer on a multi-vendor ecommerce web application for building materials marchandising. I implemeted figma design with Reactjs and Typescript. I built API endpoints. File uploads to AWS s3 etc. I also setup deployment to both netlify and AWS amplify.',
    image: buildadom,
    skills: ['Redux', 'Typescript', 'AWS', 'Git', 'Laravel', 'MySql', 'Reactjs', 'Bootstrap', 'Restful API', 'Netlify', 'Nextjs', 'JWT'],
    links: {web: 'https://buildadom.com'},
    done: false
  },
  {
    text: 'I worked as a full-time fullstack developer on a real estate platform for property listing by implementing figma design for the UI, payment integration, building the Restful API for the mobile app(Android and IOS) and deployments.',
    image: bpm,
    skills: ['Reactjs', 'CSS', 'CI/CD', 'Cloudflare', 'Restful API', 'jQuery', 'Bootstrap', 'Cloudinary', 'React Native', 'Git', 'JavaScript'],
    links: {ios: 'https://apps.apple.com/ng/app/bpmarket/id6443850733', android: 'https://play.google.com/store/apps/details?id=com.bestpropertymarket.bestpropertymarket'},
    done: false
  },
  {
    text: 'I worked as a contract backend Laravel developer on a mobile wallet RestFul API for data, airtime, TV and Electricity subscription. I built features for Account funding via online payments, payment integration, debit and credit transactions etc.',
    image: subrefill,
    skills: ['Laravel', 'MySql', 'Git', 'HTML', 'Restful API', 'CSS', 'Flutterwave'],
    links: {web: 'subrefill.com', android: 'https://play.google.com/store/apps/details?id=com.kingsbyte.subrefill'},
    done: true
  },
  {
    text: 'I worked as a remote fullstack developer on a cross-country money transfer web application where multiple vendors in multiple countries make money exchange, currency conversion and rates, debit and credit transactions etc. I built multiple API enpoints and implemented frontend tasks in Vuejs. The project is even still ongoing.',
    image: xpressglobe,
    skills: ['Vuejs', 'Digital Ocean', 'Git', 'Laravel', 'MySql', 'Bootstrap', 'Restful API', 'Unit Testing', 'JWT', 'Jira'],
    links: {web: 'https://app.xpressglobe.dev'},
    done: false
  },
];