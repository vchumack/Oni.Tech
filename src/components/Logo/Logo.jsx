import style from "./Logo.module.scss";

export const Logo = ({ isOdd }) => {
	return (
		<div>
			<a
				href="/"
				className={style.logo}
				style={{ color: `${isOdd ? "black" : "white"}` }}
			>
				ONI.TECH
			</a>
		</div>
	);
};
