import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogSummary from '../../components/blogPost/BlogSummary';
require('dotenv').config();
export default function Blog() {

  const cosmicBucketSlug = process.env.REACT_APP_cosmicBucketSlug;
  const cosmicReadKey = process.env.REACT_APP_cosmicReadKey;
  const BlogID = process.env.REACT_APP_BlogID;

  const [headline, setHeadline] = useState([]);
  const [summary, setSummary] = useState([]);
  const [id, setId] = useState([]);
  const [author, setAuthor] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    async function FetchContent () {
        const req = await axios.get(`https://api.cosmicjs.com/v2/buckets/${cosmicBucketSlug}/objects/${BlogID}?pretty=true&read_key=${cosmicReadKey}&props=slug,metadata,`)
        const response = await req.data;
        setHeadline(response.object.metadata.blog_headline)
        setSummary(response.object.metadata.blog_summary)
        setDate(response.object.metadata.date)
        setAuthor(response.object.metadata.author)
        setId(response.object.slug)
        // setImg(response.object.metadata.image.url)
        console.log(response)
        return response;

    }
    FetchContent();
    }, [setSummary, setHeadline, setAuthor, setDate, setId])
    
  return (
    <section>
      <BlogSummary headline={headline} summary={summary} id={id} date={date} author={author} />
      
    </section>
  )
}
