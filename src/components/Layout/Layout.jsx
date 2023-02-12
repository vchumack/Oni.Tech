import { useEffect, useState, useRef } from "react";

import { hideElements } from "../../shared/functions/hideElementsOnScroll";
import { activateNavLink } from "../../shared/functions/activateNavLink";
import { getCurrentSection } from "../../shared/functions/getCurrentSection";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	
	const [active, setActive] = useState("home");
	const [currentSection, setCurrentSection] = useState("1");

	const handleScroll = () => {
		const sections = document.querySelectorAll("section");
		hideElements(headerRef, footerRef);
		getCurrentSection(sections, setCurrentSection);
		activateNavLink(sections, active, setActive);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Header
				active={active}
				headerRef={headerRef}
				current={currentSection}
			/>
			<main>{children}</main>
			<Footer current={currentSection} footerRef={footerRef} />
		</>
	);
};
