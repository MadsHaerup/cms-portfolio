import React from 'react';
import './SingleProjects.css';

export default function SingleProject({website, title}) {
  return (
    
      <iframe className="projectFrame" id={title}
        title={title}
        width="100%"
        height="100%"
        src={website}>
      </iframe>
    
  )
}
