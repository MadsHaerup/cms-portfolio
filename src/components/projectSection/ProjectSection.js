import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectSection() {

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <div>
      <motion.div style={{width:"500px", height:"500px", backgroundColor:"white"}}
      initial="hidden"
      animate="visible"
      variants={list}
  >
    <motion.div style={{width:"100px", height:"100px", backgroundColor:"grey"}} variants={item}>Item1</motion.div>
    <motion.div style={{width:"100px", height:"100px", backgroundColor:"grey"}} variants={item}>item2</motion.div>
    <motion.div style={{width:"100px", height:"100px", backgroundColor:"grey"}} variants={item}>item3</motion.div>
  </motion.div>
      
    </div>
  )
}
