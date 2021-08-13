import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({date, headline, content, author}) {
  return (
    <article className="blogPost">
      <h1>{headline}</h1>
      <div>
        <span>{author}</span> || <span>{date}</span>
      </div>
     <ReactMarkdown >
      {content}
     </ReactMarkdown>
    </article>
  )
}
