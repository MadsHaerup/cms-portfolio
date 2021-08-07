import React from 'react';
import './BrowserMockup.css';

export default function BrowserMockup() {
  return (
<div class="browser-mockup browser-mockup--quick-start">
<code>
<span>&#123;</span> <br/>
    &nbsp;&nbsp;title: "A Wonderful Blog Post About Earth",<br/>
    &nbsp;&nbsp;slug: "a-wonderful-blog-post-about-earth",<br/>
    &nbsp;&nbsp;content: "This is a great day for our team...",<br/>
    &nbsp;&nbsp;metadata: <span>&#123;</span> <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hero: "https://cdn.website.com/my-image.jpg",<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;publish_date: "Apr 18",<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;author: <span>&#123;</span> <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;full_name: "John Doe",<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link: "https://our-website.com/authors/john",<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatar: "https://cdn.website.com/johnny.jpg"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp; <span>&#125;</span> <br/>
    &nbsp;&nbsp; <span>&#125;</span> <br/>
    <span>&#125;</span> <br/>
  </code>
</div>
  )
}

