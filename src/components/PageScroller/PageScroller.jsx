import { useEffect } from "react";

import PageScroller from "../../shared/classes/pageScroller";

export const PageScrollerComponent = ({ children }) => {
	useEffect(() => {
		const pageScroller = new PageScroller();
		return () => {
			// Cleanup the event listeners when the component unmounts
			window.removeEventListener("wheel", pageScroller.navigateDown);
			window.removeEventListener("keydown", pageScroller.navigateDown);
			const navLinks = Array.from(
				document.querySelectorAll('nav a[href^="#"]')
			);
			navLinks.forEach((link) => {
				link.removeEventListener("click", () => {});
			});
		};
	}, []);

	return <>{children}</>;
};
