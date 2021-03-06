import React from "react";
import { Router } from "@reach/router";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import SoMe from "./components/soMe/SoMe";
import "./App.css";
import ToTopBtn from "./components/totopButton/ToTopBtn";
import HomePage from "./views/homePage/HomePage";
import Footer from "../src/components/footer/Footer";

require("dotenv").config();

function App() {
	return (
		<div className="app">
			<Cursor />
			<Navbar />
			<SoMe />
			<Router>
				<HomePage path="/" />
			</Router>
			<ToTopBtn />
			<Footer />
		</div>
	);
}
export default App;
