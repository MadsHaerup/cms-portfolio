import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HomePage.css';
require('dotenv').config();

export default function HomePage() {
  const [content, setContent] = useState([]);
  const [img, setImg] = useState([]);

  const cosmicBucketSlug = process.env.REACT_APP_cosmicBucketSlug;
  const cosmicReadKey = process.env.REACT_APP_cosmicReadKey;
  const cosmicID = process.env.REACT_APP_cosmicID;

useEffect(() => {
async function FetchContent () {
    const req = await axios.get(`https://api.cosmicjs.com/v2/buckets/${cosmicBucketSlug}/objects/${cosmicID}?pretty=true&read_key=${cosmicReadKey}&props=metadata`)
    const response = await req.data;
    setContent(response.object.metadata.homepagecontent)
    setImg(response.object.metadata.image.url)
    return response;
}
FetchContent();
}, [setContent, setImg])
console.log('img',img)
console.log('content',content)

  return (
    <div className="homePage">
      <div className="homePage__content">
        <h1 className="content__headline">{content}</h1>
      </div>
      <div className="homePage__image">
        <img className="image__hero" src={img} alt="" />
      </div>
    </div>
  )
}
