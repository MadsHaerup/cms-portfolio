import React from 'react';
import Pb from '../../assets/img/pb.png';
import {motion, transform} from 'framer-motion';
import Headline from '../headline/Headline';
import './Person.css';
export default function Person() {
  return (
    <>
    <Headline/>
    <div className="contentContainer"
    style={{display: "grid", width: "600px", margin:"0 auto", position: "relative", height: "100vh"}}
    >
      <motion.img src={Pb} alt="" width="600"
      style={{position: "absolute", top:0, left:0, zIndex: 100 }} 
      />
      <motion.img src={Pb} alt="" width="600"
      style={{position: "absolute", top:0, left:0, zIndex: 5}}
      initial={{ opacity: 0, x: -10, }}  
      animate={{ opacity: 1, y:-2, x:70}}
      transition={{delay:0.5, duration:1, repeat: Infinity}}
      />
      <motion.img src={Pb} alt="" width="600"
      style={{position: "absolute", top:0, left:0, zIndex: 2}}
      initial={{ opacity:0, x:-5}}  
      animate={{ opacity: 1, y:-4, x:140}}
      transition={{delay:0.5, duration:1, repeat:Infinity }}
      />
    </div>
    </>
  )
}
