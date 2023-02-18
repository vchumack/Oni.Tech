import { links } from "../../data/header";

import { ReactComponent as ActiveNav } from "../../../assets/svg/navUnderline.svg";

import style from "./NavBar.module.scss";

export const NavBar = ({ active, current }) => {
	const isOdd = current % 2 !== 0;

	return (
		<nav className={style.nav} id="navbar">
			<ul
				className={style.navList}
				style={{
					color: `${isOdd ? "black" : "white"}`,
				}}
			>
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
									? `${style.navLink} ${isOdd && "activeOdd"}`
									: style.navLink
							}
						>
							{active === link.current && (
								<ActiveNav
									width={"100%"}
									height={5}
									fill="currentColor"
									className="activeNav"
								/>
							)}
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
