import style from "./NavBar.module.scss";

export const NavBar = ({ active }) => {
	return (
		<nav className={style.nav}>
			<ul className={style.navList}>
				<li className={style.navItem}>
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
				<li className={style.navItem}>
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
				<li className={style.navItem}>
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
				<li className={style.navItem}>
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
