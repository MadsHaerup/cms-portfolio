import { Router } from "@reach/router";
import { useEffect } from "react";
import { useState } from "react";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import SoMe from "./components/soMe/SoMe";
import AllBlogs from "./views/blog/AllBlogs";
import Blog from "./views/blog/Blog";
import Loading from "./components/loading/Loading";
import HomePage from "./views/homepage/HomePage";
require("dotenv").config();

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	}, []);
	return (
		<div className="App">
			<Cursor />

			{loading ? (
				<Loading />
			) : (
				<>
					<Navbar />
					<SoMe />

					<Router>
						<HomePage path="/" />

						<AllBlogs path="blog" />
						<Blog path="blog/:id" />
					</Router>
				</>
			)}
		</div>
	);
}
export default App;
