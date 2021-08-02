import React from 'react';
import './Projects.css';
import BrowserMockup from '../../components/browserMockup/BrowserMockup';
import SingleProject from '../../components/singleProject/SingleProject';
export default function Projects() {
  return (
    <section className="projects">
      <article className="projects__singleProject">
        <BrowserMockup/>
        <SingleProject title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/" />
      </article>
    </section>
  )
}