import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../Logo/Logo";
import { NavBar } from "./NavBar/NavBar";
import { MobileNav } from "./MobileNav/MobileNav";

import style from "../Header/Header.module.scss";
import { removeScroll } from "../../functions/removeScroll";

export const Header = ({ active, headerRef, current }) => {
	const [isOpen, setIsOpen] = useState(false);

	const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		removeScroll(isOpen);
	}, [isOpen]);

	return (
		<header
			className={style.header}
			ref={headerRef}
			style={{
				color: `${current % 2 === 0 ? "black" : "white"}`,
			}}
		>
			<div className={`container ${style.wrapper}`}>
				<Logo />
				{isBigScreen ? (
					<>
						<NavBar current={current} active={active} />
						<div className={style.contact}>
							<span
								className={style.elipse}
								style={{
									backgroundColor: `${
										current % 2 === 0 ? "black" : "white"
									}`,
								}}
							/>
							<a
								href="#contact"
								className={
									active === "contact"
										? `${style.navLink} active`
										: style.navLink
								}
								style={{
									borderBottom: `${
										current % 2 === 0
											? "1px solid black"
											: "1px solid white"
									}`,
								}}
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
