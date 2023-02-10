import { useEffect, useState, useRef } from "react";

import useScrollSnap from "react-use-scroll-snap";

import { hideElements } from "../../functions/hideElementsOnScroll";
import { activateNavLink } from "../../functions/activateNavLink";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
	const scrollRef = useRef(null);
	const headerRef = useRef(null);
	const footerRef = useRef(null);

	const [active, setActive] = useState("home");
	const currentSlide = useScrollSnap({
		ref: scrollRef,
		duration: 1,
		delay: 0,
	});

	const handleScroll = () => {
		const sections = document.querySelectorAll(".anchor");

		hideElements(headerRef, footerRef);
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
				current={currentSlide === 0 ? 1 : currentSlide}
			/>
			<main ref={scrollRef}>{children}</main>
			<Footer
				current={currentSlide === 0 ? 1 : currentSlide}
				footerRef={footerRef}
			/>
		</>
	);
};
