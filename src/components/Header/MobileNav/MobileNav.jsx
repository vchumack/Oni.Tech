import { links } from "../../data/header";
import { ReactComponent as BurgerCross } from "../../../assets//svg/burgerCross.svg";

import style from "./MobileNav.module.scss";

export const MobileNav = ({ isOpen, toggleBurger, active }) => {
	return (
		<>
			<div className={isOpen ? style.overlayOpen : style.overlayClosed} />
			<nav
				className={`${style.nav} ${isOpen ? style.open : style.close}`}
			>
				{isOpen && (
					<div className={style.closeBurger} onClick={toggleBurger}>
						<BurgerCross width={24} hegiht={24} fill={"white"} />
					</div>
				)}
				<ul className={style.navList} id="navbar">
					{links.map((link) => (
						<li
							className={style.navItem}
							key={link.key}
							data-menuanchor={link.current}
						>
							<a
								href={link.href}
								className={
									active === link.current
										? `${style.navLink} active`
										: style.navLink
								}
								onClick={toggleBurger}
							>
								{link.text}
							</a>
						</li>
					))}

					<li className={style.navItem} data-menuanchor="contact">
						<a
							href="#contact"
							className={
								active === "contact"
									? `${style.navLink} active`
									: style.navLink
							}
							onClick={toggleBurger}
						>
							Get in touch
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
