import { Link } from "@reach/router";
import React from "react";
import "./BlogSummary.css";
import { motion } from "framer-motion";
import { BlogAuthor } from "../blogauthor/BlogAuthor";

export default function BlogSummary({ headline, summary, id, date, author, profileimage }) {
	return (
		<Link to={`${window.location.pathname}/${id}`} key={id} className="blogLink">
			<motion.article
				className="blogSummary"
				whileHover={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 150 }}>
				<BlogAuthor profileimage={profileimage} date={date} author={author} />
				<h1>{headline} </h1>
				<p>{summary} </p>
			</motion.article>
		</Link>
	);
}
