import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { ContactUs } from "../ContactUs/ContactUs";
import { Expertise } from "../Expertise/Expertise";
import { Home } from "../Home/Home";
import { Portfolio } from "../Portfolio/Portfolio";
import { Workflow } from "../Workflow/Workflow";
import "./App.scss";

function App() {
	return (
		<Layout>
			<Home />
			<Expertise />
			<Workflow />
			<Portfolio />
			<ContactUs />
		</Layout>
	);
}

export default App;
