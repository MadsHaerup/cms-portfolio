import React from 'react';
import './TextBox.css';

export default function TextBox({text}) {
  return (
    <div className="textBox">
      <h1> {text} </h1>
    </div>
  )
}
