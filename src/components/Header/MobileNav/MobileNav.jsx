import style from "./MobileNav.module.scss";

export const MobileNav = ({ isOpen, toggleBurger, active }) => {
	return (
		<>
			<div className={isOpen ? style.overlayOpen : style.overlayClosed} />
			<nav
				className={`${style.nav} ${isOpen ? style.open : style.close}`}
			>
				{isOpen && (
					<span className={style.closeBurger} onClick={toggleBurger}>
						X
					</span>
				)}
				<ul className={style.navList}>
					<li className={style.navItem}>
						<a
							href="#home"
							className={
								active === "home"
									? `${style.navLink} active`
									: style.navLink
							}
							onClick={toggleBurger}
						>
							Home
						</a>
					</li>
					<li className={style.navItem}>
						<a
							href="#expertise"
							className={
								active === "expertise"
									? `active ${style.navLink}`
									: style.navLink
							}
							onClick={toggleBurger}
						>
							Expertise
						</a>
					</li>
					<li className={style.navItem}>
						<a
							href="#process"
							className={
								active === "process"
									? `active ${style.navLink}`
									: style.navLink
							}
							onClick={toggleBurger}
						>
							Work Process
						</a>
					</li>
					<li className={style.navItem}>
						<a
							href="#portfolio"
							className={
								active === "portfolio"
									? `active ${style.navLink}`
									: style.navLink
							}
							onClick={toggleBurger}
						>
							Portfolio
						</a>
					</li>
					<li className={style.navItem}>
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
