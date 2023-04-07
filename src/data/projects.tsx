import bpm from '../assets/projects/bpm.png';
import geoprecise from '../assets/projects/geoprecise.png';
import buildadom from '../assets/projects/buildadom.png';
import subrefill from '../assets/projects/subrefill.webp';
import xpressglobe from '../assets/projects/xpressglobe.png';

const choice = 'https://ralphjsmit.com/';

export const projects = [
   {
      text: 'I worked as a full-time fullstack Laravel developer on a real estate platform for property listing by implementing figma design for the UI, payment integration, building the Restful API for the mobile app(Android and IOS) and deployments.',
      image: bpm,
      skills: ['Laravel', 'MySql', 'CI/CD', 'Cloudflare', 'Restful API', 'jQuery', 'Bootstrap', 'Cloudinary', 'Heroku', 'Git', 'Paystack', 'Sanctum'],
      links: {web: 'https://bestpropertymarket.com', ios: 'https://apps.apple.com/ng/app/bpmarket/id6443850733', android: 'https://play.google.com/store/apps/details?id=com.bestpropertymarket.bestpropertymarket'},
      done: false
   },
   {
      text: 'I worked as a full-time fullstack Laravel developer on a web backend for all services related to land purchases, tranfer of ownership, surveys and lifting by building the admin and client dashboard, processing online applications, payment integration etc.',
      image: geoprecise,
      skills: ['CSS', 'Laravel', 'MySql', 'jQuery', 'Bootstrap', 'Git', 'Paystack'],
      links: {web: 'https://admin.geoprecisegroup.com'},
      done: false
   },
   {
      text: 'I worked as a contract backend Laravel developer on a mobile wallet RestFul API for data, airtime, TV and Electricity subscription. I built features for Account funding via online payments, payment integration, debit and credit transactions etc.',
      image: subrefill,
      skills: ['Laravel', 'MySql', 'Git', 'Restful API', 'Sanctum', 'Flutterwave'],
      links: {android: 'https://play.google.com/store/apps/details?id=com.kingsbyte.subrefill'},
      done: true
   },
   {
      text: 'I worked as a remote fullstack Laravel developer on a multi-vendor ecommerce web application for building materials marchandising. I built API endpoints related to authentication, verifications, file upload to AWS s3 etc. I also setup deployment to both netlify and AWS amplify. The project is even still ongoing.',
      image: buildadom,
      skills: ['Typescript', 'AWS', 'Git', 'Laravel', 'MySql', 'Reactjs', 'Bootstrap', 'Restful API', 'Netlify', 'Nextjs', 'JWT'],
      links: {web: 'https://frtabjousj.netlify.app/seller'},
      done: false
   },
   {
      text: 'I worked as a remote fullstack developer on a cross-country money transfer web application where multiple vendors in multiple countries make money exchange, currency conversion and rates, debit and credit transactions etc. I built multiple API enpoints and implemented frontend tasks in Vuejs. The project is even still ongoing.',
      image: xpressglobe,
      skills: ['Vuejs', 'Digital Ocean', 'Git', 'Laravel', 'MySql', 'Bootstrap', 'Restful API', 'Unit Testing', 'JWT', 'Jira'],
      links: {web: 'https://app.xpressglobe.dev'},
      done: false
   },
];