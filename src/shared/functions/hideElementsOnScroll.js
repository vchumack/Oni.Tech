export const hideElements = (headerRef, footerRef) => {
	let timer = null;

	headerRef.current.style.opacity = "0";
	footerRef.current.style.opacity = "1";

	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(function () {
		headerRef.current.style.top = "1";
		footerRef.current.style.bottom = "0";
	}, 600);
};
