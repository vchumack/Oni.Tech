export const getCurrentSection = (sections, setCurrent) => {
	let activeSection = "1";

	sections.forEach((section) => {
		const { top, bottom } = section.getBoundingClientRect();
		if (top <= 0 && bottom >= 0) {
			activeSection = section.getAttribute("current");
		}
	});
	setCurrent(activeSection);
};
