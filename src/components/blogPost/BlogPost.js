import React from "react";
import ReactMarkdown from "react-markdown";
import { BlogAuthor } from "../blogauthor/BlogAuthor";

export default function BlogPost({ date, headline, content, author, profileimage }) {
	return (
		<article className="blogPost">
			<button onClick={() => window.history.back()}>Go back</button>

			<BlogAuthor profileimage={profileimage} date={date} author={author} />
			<h1>{headline}</h1>
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
}
