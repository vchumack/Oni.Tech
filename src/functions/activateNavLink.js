export const activateNavLink = (sectionsArr, initialValue, setValue) => {
	let activeSection = initialValue;

	sectionsArr.forEach((section) => {
		const { top, bottom } = section.parentNode.getBoundingClientRect();
		if (top <= 0 && bottom > 0) {
			activeSection = section.id;
		}
	});
	setValue(activeSection);
};
