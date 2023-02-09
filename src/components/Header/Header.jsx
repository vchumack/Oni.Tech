import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../Logo/Logo";
import { NavBar } from "./NavBar/NavBar";
import { MobileNav } from "./MobileNav/MobileNav";

import style from "../Header/Header.module.scss";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("home");
	// console.log("active", active);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let activeSection = "home";
			sections.forEach((section) => {
				const { top, bottom } = section.getBoundingClientRect();
				if (top <= 0 && bottom > 0) {
					activeSection = section.id;
				}
			});
			setActiveLink(activeSection);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	const setActiveLink = (name) => {
		setActive(name);
	};
	return (
		<header className={style.header}>
			<div className={`container ${style.wrapper}`}>
				<Logo />
				{isBigScreen ? (
					<>
						<NavBar setActiveLink={setActiveLink} active={active} />
						<div className={style.contact}>
							<span className={style.elipse} />
							<a
								href="#contact"
								className={
									active === "contact"
										? `${style.navLink} active`
										: style.navLink
								}
								onClick={() => setActiveLink("contact")}
							>
								Get in touch
							</a>
						</div>
					</>
				) : (
					<div
						aria-expanded={isOpen}
						aria-label="Open burger menu button"
					>
						{!isOpen && (
							<span
								onClick={toggleBurger}
								className={style.burgerIcon}
							>
								=
							</span>
						)}
						<MobileNav
							isOpen={isOpen}
							toggleBurger={toggleBurger}
						/>
					</div>
				)}
			</div>
		</header>
	);
};
