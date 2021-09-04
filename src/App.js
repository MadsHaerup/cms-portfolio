import { Router } from "@reach/router";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import SoMe from "./components/soMe/SoMe";
import AllBlogs from "./views/blog/AllBlogs";
import Blog from "./views/blog/Blog";
import MyProjects from "./components/myprojects/MyProjects";
import "./App.css";
import ToTopBtn from "./components/totopButton/ToTopBtn";
// import HomePage from "./views/homePage/HomePage";
import { Contact } from "./views/contact/Contact";
import React, { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";

const HomePage = lazy(() => import("./views/homePage/HomePage"));

require("dotenv").config();

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<div className="app">
				<Cursor />
				<Navbar />
				<SoMe />

				<Router>
					<HomePage path="/" />
					<AllBlogs path="blog" />
					<Blog path="blog/:id" />
				</Router>
				<ToTopBtn />
			</div>
		</Suspense>
	);
}
export default App;
