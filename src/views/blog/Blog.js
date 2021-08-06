import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogPost from '../../components/blogPost/BlogPost';
require('dotenv').config();
export default function Blog() {

  var urlPath = window.location.pathname;
  var splitUrlPath = urlPath.split("/");

  const cosmicBucketSlug = process.env.REACT_APP_cosmicBucketSlug;
  const cosmicReadKey = process.env.REACT_APP_cosmicReadKey;

  const [items, setItems] = useState([]);
 
  useEffect(() => {
    async function FetchContent () {
      try{
        const response = await axios.get(`https://api.cosmicjs.com/v2/buckets/${cosmicBucketSlug}/objects/${splitUrlPath[2]}?pretty=true&read_key=${cosmicReadKey}&props=slug,metadata,`)
        const data = await response.data.object.metadata;
        console.log(response)
        setItems(data)
        return data;
      }catch(error){
        console.log("error", error)
      }
    }
    FetchContent();
    }, [])
    
  return (
    <BlogLayout>
      <BlogPost 
      headline={items.blog_headline} 
      date={items.date} 
      author={items.author} 
      content={items.content} />
    </BlogLayout>
  )
}
