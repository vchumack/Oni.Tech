import ReactFullpage from "@fullpage/react-fullpage";

import { useState } from "react";
import { useMedia } from "../../shared/hooks/useMedia";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { Home } from "../Home/Home";
import { Expertise } from "../Expertise/Expertise";
import { WorkProcess } from "../WorkProcess/WorkProcess";
import { Portfolio } from "../Portfolio/Portfolio";
import { ContactUs } from "../ContactUs/ContactUs";

function App() {
	const { isSmallDesktop, isHighScreen, isPortrait } = useMedia();

	const scrollSpeed = isSmallDesktop ? 1000 : 1700;

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
			<Header active={active} current={current} isShow={isShow} />

			<ReactFullpage
				scrollingSpeed={scrollSpeed}
				scrollOverflow={false}
				licenseKey={"YOUR_KEY_HERE"}
				onLeave={onLeave}
				afterLoad={afterLoad}
				anchors={anchors}
				menu={"#navbar"}
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							<Home />
							<Expertise />
							<WorkProcess />
							<Portfolio />
							<ContactUs />
						</ReactFullpage.Wrapper>
					);
				}}
			/>
			{(isPortrait || isHighScreen) && (
				<Footer current={current} isShow={isShow} />
			)}
		</>
	);
}

export default App;
