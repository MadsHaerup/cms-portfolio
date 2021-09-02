import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogSummary from "../../components/blogPost/BlogSummary";
import "./AllBlogs.css";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import Button from "../../components/Button/Button";
export default function AllBlogs() {
	const [blogs, setBlogs] = useState([]);
	const [limit, setLimit] = useState(1);
	const cosmicBucketSlug = process.env.REACT_APP_cosmicBucketSlug;
	const cosmicReadKey = process.env.REACT_APP_cosmicReadKey;

	useEffect(() => {
		async function FetchAllBlogs() {
			try {
				const response = await axios.get(
					`https://api.cosmicjs.com/v2/buckets/${cosmicBucketSlug}/objects?pretty=true&query=%7B%22type%22%3A%22blogs%22%7D&read_key=${cosmicReadKey}&limit=${limit}&props=slug,metadata`
				);
				const data = await response.data.objects;
				setBlogs(data);
				return data;
			} catch (error) {
				console.log("error", error);
			}
		}
		FetchAllBlogs();
	}, [setBlogs, limit]);

	return (
		<div className="container">
			<BlogLayout>
				{blogs.map((blog) => (
					<BlogSummary
						id={blog.metadata.objectid}
						date={blog.metadata.date}
						author={blog.metadata.author}
						headline={blog.metadata.blog_headline}
						summary={blog.metadata.blog_summary}
						profileimage={blog.metadata.profileimage?.imgix_url}
					/>
				))}

				{blogs.length < limit ? (
					<div>You have reached the end!</div>
				) : (
					<Button content="Load More Articles" onClick={() => setLimit(limit + 1)} />
				)}
			</BlogLayout>
		</div>
	);
}
