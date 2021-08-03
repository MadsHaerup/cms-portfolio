import React from 'react'

export default function BlogPost({date, headline, content, img, author}) {
  return (
    <article>
      <span>{author}</span>
      <span>{date}</span>
      <img src={img ? img : null} alt="" />
      <h1>{headline}</h1>
      <p>{content}</p>
    </article>
  )
}
