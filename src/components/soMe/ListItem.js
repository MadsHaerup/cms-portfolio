import React from 'react'
import { motion } from "framer-motion";

export default function ListItem({icon}) {
  return (
    <motion.li
    whileHover={{scale:1.2, backgroundColor: 'var(--hover-color)'}}
    transition={{type: 'spring', stiffness: 250}}
    >
    <a href="" target="_blank" rel="noopener">{icon}</a> 
    </motion.li>
  )
}
