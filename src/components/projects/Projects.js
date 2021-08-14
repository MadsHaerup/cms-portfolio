import React from 'react';
import './Projects.css';
import BrowserMockup from '../browserMockup/BrowserMockup';

export default function Projects() {
  return (
    <section className="projectContainer">
      <article className="projectContainer__item" >
        <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        <div className="odd">
        <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        </div>
      </article>
    </section>
  )
}
