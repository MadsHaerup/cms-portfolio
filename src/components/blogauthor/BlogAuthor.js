import React from "react";
import "./BlogAuhtor.css";

export const BlogAuthor = ({ profileimage, date, author }) => {
	return (
		<div className="blogAuthor">
			<div>
				<img className="blogAuthor__image" src={profileimage} alt="" />
			</div>
			<div className="blogAuthor__author">
				<span>{author}</span>
				<span>{date}</span>
			</div>
		</div>
	);
};
