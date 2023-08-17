import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap';
import markomeje from '../src/assets/markomeje.png';
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { projects } from '../src/data/projects';
import { BsGlobe, BsApple, BsAndroid2 } from 'react-icons/bs';
import './index.css';

import reactjs from '../src/assets/technologies/reactjs.png';
import laravel from '../src/assets/technologies/laravel.png';
import aws from '../src/assets/technologies/aws.png';
import vuejs from '../src/assets/technologies/vuejs.png';

import typescript from '../src/assets/technologies/typescript.png';
import heroku from '../src/assets/technologies/heroku.png';
import git from '../src/assets/technologies/git.png';
import mysql from '../src/assets/technologies/mysql.png';
import nextjs from '../src/assets/technologies/nextjs.png';

import bootstrap from '../src/assets/technologies/bootstrap.png';
import digitalocean from '../src/assets/technologies/digitalocean.png';
import docker from '../src/assets/technologies/docker.webp';
import codeigniter from '../src/assets/technologies/codeigniter.png';
import nodejs from '../src/assets/technologies/nodejs.png';

import lumen from '../src/assets/technologies/lumen.png';
import slimphp from '../src/assets/technologies/slimphp.png';
import jira from '../src/assets/technologies/jira.png';
import redux from '../src/assets/technologies/redux.png';

export default function App() {
   const maxWidth = '969px';
   const profile = {whatsappLink: 'https://wa.link/kgrco6', email: 'markomejeonline@gmail.com', linkedinUrl: 'https://linkedin.com/in/markomeje', whatsappPhone: '08087752375', githubUrl: 'https://github.com/markomeje'};

   return (
      <div className="bg-white pt-5 mt-5">
         <section className='mb-5'>
            <Container>
               <div className='m-auto' style={{ maxWidth: `${maxWidth}` }}>
                  <Row className='d-flex justify-content-center align-items-center'>
                     <Col xs='12' md='7' className='mb-4'>
                        <div className='mb-4 pb-3 border-bottom'>
                           <h1 className='fw-bold text-dark mb-4'>👋 Hello, <span className='fantasy-font'>I'm</span> Mark Omeje</h1>
                           <p className='text-dark'>A fullstack developer experienced in building and maintaining web applications and RestFul APIs.</p>
                        </div>
                        <div className='text-dark mb-4'>I use cutting edge technologies to build innovative solutions. Experienced in design patterns and programming principles like OOP, MVC and SOLID principles etc. Good at collaboration and team work.</div>
                        <div className='d-flex align-items-center'>
                           <a href={`${profile['whatsappLink']}`} className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <IoLogoWhatsapp size='1.8em' style={{ color: '#25D366' }} />
                           </a>
                           <a href={`mailto:${profile['email']}`} className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <SiGmail size='1.8em' className='text-dark' />
                           </a>
                           <a href={`${profile['linkedinUrl']}`} className='rounded-circle me-3 text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <IoLogoLinkedin size='1.8em' style={{ color: '#0072b1' }} />
                           </a>
                           <a href={`${profile['githubUrl']}`} className='rounded-circle text-center bg-light border' style={{ width: '54px', height: '54px', lineHeight: '50px' }}>
                              <IoLogoGithub size='1.8em' className='text-dark' />
                           </a>
                        </div>
                     </Col>
                     <Col xs='12' md='5' className='mb-4'> 
                        <div className='bg-light border d-block' style={{ borderRadius: '34px' }}>
                           <Image src={markomeje} className='h-100 w-100' style={{ objectFit: 'cover', borderRadius: '34px' }} alt='Mark Omeje' />
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
                           <div className='d-block border mb-4 bg-light' style={{ borderRadius: '10px', height: '180px' }}>
                              <Image src={image} className='img-fluid border h-100 w-100' style={{ borderRadius: '10px', objectFit: 'contain' }} />
                           </div>
                           <div className='d-flex align-items-center mb-3'>
                              {links['web'] ? (<a href={`${links['web']}`} target="_blank" className='rounded-pill text-center bg-primary px-3 py-1 me-3'>
                                 <small className='text-white'>Web</small>
                              </a>) : null}
                              {links['ios'] ? (<a href={`${links['ios']}`} target="_blank" className='rounded-pill text-center bg-primary px-3 py-1 me-3'>
                                 <small className='text-white'>IOS</small>
                              </a>) : null}
                              {links['android'] ? (<a href={`${links['android']}`} target="_blank" className='rounded-pill text-center bg-primary px-3 py-1 me-3'>
                                 <small className='text-white'>Android</small>
                              </a>) : null}
                           </div>
                           <div className='text-muted mb-4'>{text}</div>
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
                  {[reactjs, laravel, aws, vuejs, typescript, slimphp, heroku, git, mysql, bootstrap, digitalocean, codeigniter, nodejs, docker, lumen, jira, nextjs, redux].map((logo, index) => {
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
                           <a href={`tel:${profile['whatsappPhone']}`} className='rounded-pill px-3 py-2 text-decoration-none d-block w-100 bg-primary'>
                              <small className='text-white'>Call Me</small>
                           </a>
                        </Col>
                        <Col xs='6'>
                           <a href={`mailto:${profile['email']}`} className='rounded-pill d-block px-3 py-2 text-decoration-none w-100 bg-primary'>
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
