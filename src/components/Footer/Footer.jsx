import style from "../Footer/Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={`container ${style.wrapper}`}>
				<div className={style.counter}>
					<span>01</span>
					<span>/</span>
					<span>05</span>
				</div>
				<div className={style.rights}>
					<div>
						<span />
						<p>Scroll down</p>
					</div>
					<p>Oni.Tech &copy; All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};
