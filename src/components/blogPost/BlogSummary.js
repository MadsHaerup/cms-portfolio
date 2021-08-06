import { Link } from '@reach/router';
import React from 'react';
import './BlogSummary.css';
import { motion } from 'framer-motion';

export default function BlogSummary({headline, summary, id, date, author}) {

  return (
    <Link to={`${window.location.pathname}/${id}`} key={id}>
    <motion.article className="blogSummary" 
    whileHover={{ scale: 0.95}}
    transition={{type: 'spring', stiffness: 150}}
    >
      <div><span>{date} || {author}</span> </div>
      <h1>{headline} </h1>
      <p>{summary} </p>
    </motion.article>
    </Link>
    
  )
}
