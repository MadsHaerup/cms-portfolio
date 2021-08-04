import React from 'react';
import Pb from '../../assets/img/pb.png';
import {motion} from 'framer-motion';
import { infinity } from 'check-types';

export default function Person() {
  return (
    <div
    style={{display: "grid", width: "400px", margin:"0 auto", position: "relative"}}
    >
      <motion.img src={Pb} alt="" width="400"
      style={{position: "absolute", top:0, left:0, zIndex: 100, perspective: "50px",
      perspectiveOrigin: "left"  }} 
      animate={{}}
      />
      <motion.img src={Pb} alt="" width="400"
      style={{position: "absolute", top:0, left:0, zIndex: 5}}
      initial={{ opacity: 0, x: -10, }}  
      animate={{ opacity: 1, y:-2, x:60}}
      transition={{delay:0.5, duration:0.6,yoyo: Infinity }}
      />
      <motion.img src={Pb} alt="" width="400"
      style={{position: "absolute", top:0, left:0, zIndex: 2}}
      initial={{ opacity:0, x:-5}}  
      animate={{ opacity: 1, y:-4, x:110}}
      transition={{delay:0.5, duration:0.6, yoyo: Infinity}}
      />
    </div>
  )
}
