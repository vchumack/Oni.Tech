import { links } from "../../data/header";

import style from "./NavBar.module.scss";

export const NavBar = ({ active, current }) => {
	current === 0 ? (current = 1) : current;
	return (
		<nav className={style.nav}>
			<ul
				className={style.navList}
				style={{
					color: `${current % 2 === 0 ? "black" : "white"}`,
				}}
			>
				{links.map((link) => (
					<li className={style.navItem} key={link.key}>
						<a
							href={link.href}
							className={
								active === link.current
									? `${style.navLink} ${style.active}`
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
