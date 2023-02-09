import { useEffect, useState } from "react";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
	const [active, setActive] = useState("home");
	const [currentSection, setCurrentSection] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let activeSection = active;
			let current = currentSection;

			sections.forEach((section) => {
				const { top, bottom } = section.getBoundingClientRect();
				if (top <= 0 && bottom > 0) {
					activeSection = section.id;
					current = section.getAttribute("current");
				}
			});
			setActive(activeSection);
			setCurrentSection(current);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Header active={active} />
			<main>{children}</main>
			<Footer current={currentSection} />
		</>
	);
};
