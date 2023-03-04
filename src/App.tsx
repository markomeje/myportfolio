import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap';
import markomeje from '../src/assets/markomeje.jpg';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { projects } from '../src/data/projects';
import './index.css';

import reactjs from '../src/assets/technologies/reactjs.png';
import laravel from '../src/assets/technologies/laravel.png';
import aws from '../src/assets/technologies/aws.png';
import vuejs from '../src/assets/technologies/vuejs.png';
import typescript from '../src/assets/technologies/typescript.png';
import heroku from '../src/assets/technologies/heroku.png';
import git from '../src/assets/technologies/git.png';
import mysql from '../src/assets/technologies/mysql.png';

import bootstrap from '../src/assets/technologies/bootstrap.png';
import digitalocean from '../src/assets/technologies/digitalocean.png';
import codeigniter from '../src/assets/technologies/codeigniter.png';
import nodejs from '../src/assets/technologies/nodejs.png';

export default function App() {
   const maxWidth = '969px';
   return (
      <div className="bg-white pt-5 mt-5">
         <section className='mb-5'>
            <Container>
               <div className='m-auto' style={{ maxWidth: `${maxWidth}` }}>
                  <Row className='d-flex justify-content-center align-items-center'>
                     <Col xs='12' md='7' className='mb-4'>
                        <div className='mb-4 pb-3 border-bottom'>
                           <h1 className='fw-bold text-dark mb-4'>👋 Hello, <br /><span className='fantasy-font'>I'm</span> Mark Omeje</h1>
                           <p className='lead text-dark'>A fullstack developer experienced in building and maintaining web applications and RestFul APIs.</p>
                        </div>
                        <div className='text-dark lead mb-4'>I 💓 love using cutting edge technologies to build innovative solutions. Experienced in design patterns and paradigms like OOP, MVC and SOLID principles. Good at collaboration and team work.</div>
                        <div className='d-flex align-items-center'>
                           <a href='tel:080877532375' className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <IoLogoWhatsapp size='1.8em' style={{ color: '#25D366' }} />
                           </a>
                           <a href='mailto:markomejeonline@gmail.com' className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <SiGmail size='1.8em' className='text-dark' />
                           </a>
                           <a href='https://linkedin.com/in/markomeje' className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <IoLogoLinkedin size='1.8em' style={{ color: '#0072b1' }} />
                           </a>
                        </div>
                     </Col>
                     <Col xs='12' md='5' className='mb-4'> 
                        <div className='rounded w-100' style={{ height: '320px' }}>
                           <Image src={markomeje} className='h-100 w-100 rounded' style={{ objectFit: 'contain' }} alt='Mark Omeje' />
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </section>
         <section>
            <Container style={{ maxWidth: `${maxWidth}` }}>
               <h2 className='h2 mb-4'>My Projects</h2>
               <Row>
                  {projects && projects.map(({image, text, links, skills}, index) => {
                     return (<Col xs='12' md='4' lg='4' className='mb-4' key={index}>
                        <div className=''>
                           <div className='p-3 d-block border mb-3 bg-light' style={{ height: '180px' }}>
                              <Image src={image} className='img-fluid border object-cover h-100 w-100' style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                           </div>
                           <div className='d-flex align-items-center flex-wrap'>
                              <div></div>
                           </div>
                           <p className='text-muted lead mb-4'>{text}</p>
                           <div className='d-flex align-items-center flex-wrap'>
                              {skills && skills.map((skill, index) => {
                                 return(<div className='rounded-pill bg-light border px-3 py-1 mb-3 me-3' key={index}>
                                    <small className='text-dark'>{skill}</small>
                                 </div>)
                              })}
                           </div>
                        </div>
                     </Col>)
                  })}
               </Row>
            </Container>
         </section>
         <section>
            <Container style={{ maxWidth: `${maxWidth}` }}>
               <h1 className='h1 mb-4'>My Skills</h1>
               <Row>
                  {[reactjs, laravel, aws, vuejs, typescript, heroku, git, mysql, bootstrap, digitalocean, codeigniter, nodejs].map((logo, index) => {
                     return (<Col xs='6' md='4' lg='3' className='mb-4' key={index}>
                        <div className='bg-white p-2 border' style={{ height: '80px', borderRadius: '10px' }}>
                           <Image src={logo} className='h-100 w-100' style={{ borderRadius: '10px', objectFit: 'contain' }} />
                        </div>
                     </Col>)
                  })}
               </Row>
            </Container>
         </section>
         <section className='py-5'>
            <Container style={{ maxWidth: `${maxWidth}` }}>
               <div className='bg-dark py-5 px-4 text-center' style={{ borderRadius: '26px' }}>
                  <div className='m-auto' style={{ maxWidth: '360px' }}>
                     <p className='lead text-white mb-4'>Made with 💓 for Reactjs and Typescript. Hosted on Netlify.</p>
                     <Row className='d-flex justify-content-center align-items-center'>
                        <Col xs='6'>
                           <a href='tel:08087752375' className='rounded-pill px-3 py-2 text-decoration-none d-block w-100 bg-primary'>
                              <small className='text-white'>Call Me</small>
                           </a>
                        </Col>
                        <Col xs='6'>
                           <a href='mailto:markomejeonline@gmail.com' className='rounded-pill d-block px-3 py-2 text-decoration-none w-100 bg-primary'>
                              <small className='text-white'>Send Email</small>
                           </a>
                        </Col>
                     </Row>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   )
}
