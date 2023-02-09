import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../Logo/Logo";
import { NavBar } from "./NavBar/NavBar";
import { MobileNav } from "./MobileNav/MobileNav";

import style from "../Header/Header.module.scss";

export const Header = ({active}) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={style.header}>
			<div className={`container ${style.wrapper}`}>
				<Logo />
				{isBigScreen ? (
					<>
						<NavBar active={active} />
						<div className={style.contact}>
							<span className={style.elipse} />
							<a
								href="#contact"
								className={
									active === "contact"
										? `${style.navLink} active`
										: style.navLink
								}
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
							active={active}
						/>
					</div>
				)}
			</div>
		</header>
	);
};
