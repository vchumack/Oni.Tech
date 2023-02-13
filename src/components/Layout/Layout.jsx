// import { useEffect, useState, useRef } from "react";

// import { hideElements } from "../../shared/functions/hideElementsOnScroll";
// import { activateNavLink } from "../../shared/functions/activateNavLink";
// import { getCurrentSection } from "../../shared/functions/getCurrentSection";

// export const Layout = ({ headerRef, footerRef, children }) => {
// 	// const [active, setActive] = useState("home");
// 	// const [currentSection, setCurrentSection] = useState("1");
// 	// console.log(footerRef, headerRef);
// 	const handleScroll = () => {
// 		// const sections = document.querySelectorAll("section");
// 		// hideElements(headerRef, footerRef);
// 		// getCurrentSection(sections, setCurrentSection);
// 		// activateNavLink(sections, active, setActive);
// 	};

// 	useEffect(() => {
// 		window.addEventListener("scroll", handleScroll);

// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<main>{children}</main>
// 		</>
// 	);
// };
