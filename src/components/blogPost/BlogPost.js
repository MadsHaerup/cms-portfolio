import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from "react-router-dom";

export default function BlogPost({date, headline, content, img, author}) {
  const history = useHistory();
  return (
    <article className="blogPost">
       {/* <button onClick={() => history.goBack()} >
          Go back
        </button> */}
      <img src={img ? img : null} alt="" />
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
