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

	const onLeave = (_, destination) => {
		setCurrent(destination.index);
		setActive(destination.anchor);
		setIsShow(false);
	};
	const afterLoad = () => setIsShow(true);

	return (
		<>
			{isShow && <Header active={active} current={current} />}
			<ReactFullpage
				scrollingSpeed={1000}
				licenseKey={"YOUR_KEY_HERE"}
				onLeave={onLeave}
				afterLoad={afterLoad}
				anchors={anchors}
				menu={true}
				render={() => {
					return (
						<>
							<ReactFullpage.Wrapper>
								<section className="section hero" data-anchor>
									<Home />
								</section>
								<section
									className="section expertise"
									data-anchor
								>
									<Expertise />
								</section>
								<section className="section" data-anchor>
									<WorkProcess />
								</section>
								<section
									className="section portfolio"
									data-anchor
								>
									<Portfolio />
								</section>
								<section
									className="section contactUs"
									data-anchor
								>
									<ContactUs />
								</section>
							</ReactFullpage.Wrapper>
						</>
					);
				}}
			/>
			{isShow && <Footer current={current} />}
		</>
	);
}

export default App;
