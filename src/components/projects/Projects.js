import React from 'react';
import './Projects.css';
import BrowserMockup from '../browserMockup/BrowserMockup';
import SingleProject from '../singleProject/SingleProject';
export default function Projects() {
  return (
    <section className="projectContainer">

      <article className="projectContainer__item" >
        <BrowserMockup/>
        <SingleProject title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/" />
      </article>

  
    </section>
  )
}
