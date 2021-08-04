import React from 'react';
import {motion} from 'framer-motion';

export default function Box() {
  return (
      <motion.div style={{backgroundColor: "green", width:"300px", height: "300px"}}
        initial ={{x: 0, scale: 1, borderRadius: '50%'}}
        animate={{ x: 300, scale: 2, borderRadius: 0 }}
        transition={{ ease: "easeOut", duration: 2, loop: true }}
        >
      </motion.div>
      
  )
}
