export const hideElements = (headerRef, footerRef) => {
	let timer = null;

	headerRef.current.style.top = "-100%";
	footerRef.current.style.bottom = "-100%";

	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(function () {
		headerRef.current.style.top = "0";
		footerRef.current.style.bottom = "0";
	}, 600);
};
