import React from 'react';
import './Projects.css';
import BrowserMockup from '../browserMockup/BrowserMockup';

export default function Projects() {
  return (
      <article className="projectContainer__item" >
        <div className="projectContainer__item__odd" >
          <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        </div>

        <div  className="projectContainer__item__even">
          <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        </div>

        <div  className="projectContainer__item__odd">
          <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        </div>

        <div  className="projectContainer__item__even">
          <BrowserMockup title="A Sports app landingpage" website="https://elegant-nightingale-b0dfbe.netlify.app/"/>
        </div>
      </article>
  )
}
