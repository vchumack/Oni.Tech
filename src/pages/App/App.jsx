import ReactFullpage from "@fullpage/react-fullpage";

import { useState } from "react";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { Home } from "../Home/Home";
import { Expertise } from "../Expertise/Expertise";
import { WorkProcess } from "../WorkProcess/WorkProcess";
import { Portfolio } from "../Portfolio/Portfolio";
import { ContactUs } from "../ContactUs/ContactUs";

import "./App.scss";

function App() {
	const [current, setCurrent] = useState(0);
	const [active, setActive] = useState("home");
	const [isShow, setIsShow] = useState(true);
	const anchors = ["home", "expertise", "process", "portfolio", "contact"];
	console.log("active", active);
	const onLeave = (_, destination) => {
		setCurrent(destination.index);
		setActive(destination.anchor);
		console.log("destination", destination);
		setIsShow(false);
	};
	const afterLoad = () => setIsShow(true);

	return (
		<>
			<Header active={active} current={current} isShow={isShow} />

			<ReactFullpage
				scrollingSpeed={1000}
				scrollOverflow={false}
				licenseKey={"YOUR_KEY_HERE"}
				onLeave={onLeave}
				afterLoad={afterLoad}
				anchors={anchors}
				menu={"#navbar"}
				render={() => {
					return (
						<>
							<ReactFullpage.Wrapper>
								<section className="section hero">
									<Home />
								</section>
								<section className="section expertise">
									<Expertise />
								</section>
								<section className="section">
									<WorkProcess />
								</section>
								<section className="section portfolio">
									<Portfolio />
								</section>
								<section className="section contactUs">
									<ContactUs />
								</section>
							</ReactFullpage.Wrapper>
						</>
					);
				}}
			/>
			<Footer current={current} isShow={isShow} />
		</>
	);
}

export default App;
