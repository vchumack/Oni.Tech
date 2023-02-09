import { links } from "../../data/header";

import style from "./NavBar.module.scss";

export const NavBar = ({ active }) => {
	return (
		<nav className={style.nav}>
			<ul className={style.navList}>
				{links.map((link) => (
					<li className={style.navItem} key={link.key}>
						<a
							href={link.href}
							className={
								active === link.current
									? `${style.navLink} active`
									: style.navLink
							}
						>
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
