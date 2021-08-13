import React from 'react';
import pb from '../../assets/img/pb.png';
import './HeroImage.css';

export default function HeroImage() {
  return (
    <div className="hero">
      <img className="hero__image" src={pb} alt="" />
    </div>
  )
}
