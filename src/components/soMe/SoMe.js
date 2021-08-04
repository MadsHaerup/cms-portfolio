import React from 'react';
import './SoMe.css';
import { FaGithub, FaLinkedinIn, FaDev, FaCodepen } from 'react-icons/fa';
import ListItem from './ListItem';

export default function SoMe() {
  return (
    <ul className="soMe">
    <ListItem icon={<FaGithub/>} />
    <ListItem icon={<FaLinkedinIn/>} />
    <ListItem icon={<FaDev/>} />
    <ListItem icon={<FaCodepen/>} />
    </ul>
  )
}
