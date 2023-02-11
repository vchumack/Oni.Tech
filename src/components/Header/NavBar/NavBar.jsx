import { links } from "../../data/header";

import style from "./NavBar.module.scss";

export const NavBar = ({ active, current }) => {
	const isOdd = current % 2 === 0;

	return (
		<nav className={style.nav}>
			<ul
				className={style.navList}
				style={{
					color: `${isOdd ? "black" : "white"}`,
				}}
			>
				{links.map((link) => (
					<li className={style.navItem} key={link.key}>
						<a
							href={link.href}
							className={
								active === link.current
									? `${style.navLink} ${
											isOdd ? "activeOdd" : "active"
									  }`
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
