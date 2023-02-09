import style from "./NavBar.module.scss";

export const NavBar = ({ setActiveLink, active }) => {
	return (
		<nav className={style.nav}>
			<ul className={style.navList}>
				<li
					className={style.navItem}
					onClick={() => setActiveLink("home")}
				>
					<a
						href="#home"
						className={
							active === "home"
								? `${style.navLink} active`
								: style.navLink
						}
					>
						Home
					</a>
				</li>
				<li
					className={style.navItem}
					onClick={() => setActiveLink("expertise")}
				>
					<a
						href="#expertise"
						className={
							active === "expertise"
								? `active ${style.navLink}`
								: style.navLink
						}
					>
						Expertise
					</a>
				</li>
				<li
					className={style.navItem}
					onClick={() => setActiveLink("process")}
				>
					<a
						href="#process"
						className={
							active === "process"
								? `active ${style.navLink}`
								: style.navLink
						}
					>
						Work Process
					</a>
				</li>
				<li
					className={style.navItem}
					onClick={() => setActiveLink("portfolio")}
				>
					<a
						href="#portfolio"
						className={
							active === "portfolio"
								? `active ${style.navLink}`
								: style.navLink
						}
					>
						Portfolio
					</a>
				</li>
			</ul>
		</nav>
	);
};
