import style from "../Footer/Footer.module.scss";

export const Footer = ({ current, footerRef, isShow }) => {
	return (
		<footer
			className={style.footer}
			ref={footerRef}
			style={{
				color: `${current % 2 !== 0 ? "black" : "white"}`,
				bottom: `${isShow ? "0px" : "-100%"}`,
			}}
		>
			<div className={`container ${style.wrapper}`}>
				<div className={style.counter}>
					<span>0{current + 1}</span>
					<span>/</span>
					<span>05</span>
				</div>
				<div className={style.rights}>
					<div>
						<span
							style={{
								backgroundColor: `${
									current % 2 !== 0 ? "black" : "white"
								}`,
							}}
						/>
						<p>Scroll down</p>
					</div>
					<p>Oni.Tech &copy; All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};
