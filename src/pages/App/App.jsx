import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { ContactUs } from "../ContactUs/ContactUs";
import { Expertise } from "../Expertise/Expertise";
import { Home } from "../Home/Home";
import { Portfolio } from "../Portfolio/Portfolio";
import { WorkProcess } from "../WorkProcess/WorkProcess";
import { PageScrollerComponent } from "../../components/PageScroller/PageScroller";

import "./App.scss";

function App() {
	return (
		<Layout>
			<PageScrollerComponent>
				<Home />
				<Expertise />
				<WorkProcess />
				<Portfolio />
				<ContactUs />
			</PageScrollerComponent>
		</Layout>
	);
}

export default App;
