class PageScroller {
	constructor() {
		this.sections = Array.from(document.querySelectorAll("section"));
		this.numOfPages = this.sections.length - 1;
		this.curPage = 0;
		this.scrollLock = false;
		this.scrollPage = this.scrollPage.bind(this);
		this.pagination = this.pagination.bind(this);
		this.navigateUp = this.navigateUp.bind(this);
		this.navigateDown = this.navigateDown.bind(this);
		this.addEventListeners();
	}

	addEventListeners() {
		window.addEventListener(
			"wheel",
			(e) => {
				e.preventDefault();
				if (this.scrollLock) return;
				if (e.deltaY < 0) this.navigateUp();
				else this.navigateDown();
			},
			{ passive: false }
		);

		const navLinks = Array.from(
			document.querySelectorAll('nav a[href^="#"]')
		);
		navLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				const targetId = e.currentTarget.getAttribute("href").slice(1);
				const targetIndex = this.sections.findIndex(
					(section) => section.id === targetId
				);
				if (targetIndex !== -1 && targetIndex !== this.curPage) {
					this.curPage = targetIndex;
					this.pagination();
				}
			});
		});
	}

	scrollPage() {
		this.scrollLock = true;
		const sectionTop =
			this.sections[this.curPage].getBoundingClientRect().top;
		const bodyTop = document.body.getBoundingClientRect().top;
		const scrollTop = sectionTop - bodyTop;
		window.scrollTo({
			top: scrollTop,
			behavior: "smooth",
		});
		setTimeout(() => {
			this.scrollLock = false;
		}, 1000);
	}

	pagination() {
		this.scrollLock = true;
		window.scrollTo({
			top: this.sections[this.curPage].offsetTop,
			behavior: "smooth",
		});
		setTimeout(() => {
			this.scrollLock = false;
		}, 1000);
	}

	navigateUp() {
		if (this.curPage === 0) return;
		this.curPage--;
		this.pagination();
	}

	navigateDown() {
		if (this.curPage === this.numOfPages) return;
		this.curPage++;
		this.pagination();
	}
}

export default PageScroller;
