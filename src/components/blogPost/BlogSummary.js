import { Link } from '@reach/router';
import React from 'react';

export default function BlogSummary({headline, summary, id, date, author}) {
  return (
    <Link to="blogpost/">
    <article key={id}>
      <div><span>{date} || {author}</span> </div>
      <h1>{headline} </h1>
      <p>{summary} </p>
    </article>
    </Link>
    
  )
}
