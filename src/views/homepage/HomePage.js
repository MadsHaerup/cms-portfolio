import axios from 'axios';
import React, { useEffect, useState } from 'react';
require('dotenv').config();

export default function HomePage() {
  const [items, setItems] = useState([]);

  const cosmicBucketSlug = process.env.REACT_APP_cosmicBucketSlug;
  const cosmicReadKey = process.env.REACT_APP_cosmicReadKey;
  const cosmicID = process.env.REACT_APP_cosmicID;

useEffect(() => {
async function FetchContent () {
    const response = await axios.get(`https://api.cosmicjs.com/v2/buckets/${cosmicBucketSlug}/objects/${cosmicID}?pretty=true&read_key=${cosmicReadKey}&props=metadata`)
    setItems(response.data.object.metadata)
    console.log(items)
}
FetchContent();
}, [setItems])

  return (
    <div>
      <div>
        <p>{items.intro}</p>
      </div>
      <div>
        {/* <img src={items.heroimage.url} alt="" /> */}
      </div>
    </div>
  )
}
