import { links } from "../../data/header";
import { ReactComponent as BurgerCross } from "../../../assets//svg/burgerCross.svg";
import { ReactComponent as ActiveNav } from "../../../assets/svg/navUnderline.svg";

import style from "./MobileNav.module.scss";

export const MobileNav = ({ isOpen, toggleBurger, active }) => {
	return (
		<>
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
							style={
								active === link.current
									? { borderBottom: "0.5px solid white" }
									: {}
							}
						>
							<a
								href={link.href}
								className={`${style.navLink}`}
								onClick={toggleBurger}
							>
								{/* {active === link.current && (
									<ActiveNav
										width={"100%"}
										hegiht={1}
										fill="currentColor"
										className="activeNav"
									/>
								)} */}
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
