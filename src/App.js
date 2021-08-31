import { Router } from "@reach/router";
import { useEffect, useState } from "react";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import SoMe from "./components/soMe/SoMe";
import AllBlogs from "./views/blog/AllBlogs";
import Blog from "./views/blog/Blog";
import MyProjects from "./components/myprojects/MyProjects";
import "./App.css";
import EmailForm from "./components/contact/EmailForm";
import ToTopBtn from "./components/totopButton/ToTopBtn";
import HomePage from "./views/homePage/HomePage";
require("dotenv").config();

function App() {
	return (
		<div className="app">
			<Cursor />
			<Navbar />
			<SoMe />

			<Router>
				<HomePage path="/" />
				<MyProjects path="project" />
				<AllBlogs path="blog" />
				<Blog path="blog/:id" />
				<EmailForm path="contact" />
			</Router>
			<ToTopBtn />
		</div>
	);
}
export default App;
