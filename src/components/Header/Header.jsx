import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { removeScroll } from "../../shared/functions/removeScroll";

import { Logo } from "../Logo/Logo";
import { NavBar } from "./NavBar/NavBar";
import { MobileNav } from "./MobileNav/MobileNav";
import { ReactComponent as BurgerLines } from "../../assets/svg/burgerLines.svg";

import style from "../Header/Header.module.scss";

export const Header = ({ active, headerRef, current, isShow }) => {
	const [isOpen, setIsOpen] = useState(false);

	const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
	const isOdd = current % 2 !== 0;

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
				color: `${isOdd ? "black" : "white"}`,
				top: `${isShow ? "0px" : "-100%"}`,
			}}
		>
			<div className={`container ${style.wrapper}`}>
				<Logo isOdd={isOdd} />
				{isBigScreen ? (
					<>
						<NavBar current={current} active={active} />
						<div className={style.contact}>
							<span
								className={style.elipse}
								style={{
									backgroundColor: `${
										isOdd ? "black" : "white"
									}`,
								}}
							/>
							<a
								href="#contact"
								data-menuanchor="contact"
								className={
									active === "contact"
										? `${style.navLink} active`
										: style.navLink
								}
								style={{
									borderBottom: `${
										isOdd
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
						className={style.burgerWrapper}
						aria-expanded={isOpen}
						aria-label="Open burger menu button"
					>
						{!isOpen && (
							<span
								onClick={toggleBurger}
								className={style.burgerIcon}
							>
								<BurgerLines
									width={33}
									height={33}
									fill={isOdd ? "black" : "white"}
								/>
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
