import style from "../PortfolioItem/PortfolioItem.module.scss";

import * as React from "react";

import { motion } from "framer-motion";

export const PortfolioItem = ({
	index,
	setOpen,
	isOpen,
	expertise,
	isBigScreen,
}) => {
	const { title, description, type, img } = expertise;

	const handleExpertiseClick = () => {
		if (isOpen) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			// route && router.push(route)
			console.log("Go to page");
		} else {
			// const text = document.querySelectorAll(".close__type");
			// console.log("text", text);
			setOpen(index);
			// setTimeout(() => {
			// 	alert("I love async JS!");
			// }, 1000);
		}
	};

	const renderImage = React.useMemo(() => {
		return (
			<img
				alt={title}
				src={img}
				style={{
					position: "absolute",
					top: "0",
					height: "100%",
					width: "100%",
					objectFit: "cover",
					zIndex: "-1",
				}}
				sizes="(max-width: 1100px) 100vw, 50vw"
			/>
		);
	}, [img.src, isOpen, title]);

	return (
		<button
			onClick={handleExpertiseClick}
			className={style.btn}
			style={{
				height: "100%",
				width: "100%",
				position: "relative",
				overflow: "hidden",
				backgroundColor: "transparent",
			}}
		>
			<div className={style.item}>
				{renderImage}
				{isOpen ? (
					<motion.div
						animate={{
							opacity: 1,
						}}
						initial={{
							opacity: 0,
						}}
						transition={{
							delay: 0.8,
						}}
						css={{
							backgroundImage:
								"linear-gradient(116.29deg, #87CDD2 -29.94%, rgba(255, 255, 255, 0.26) -29.93%, rgba(135, 205, 210, 0) 101.76%)",
							background: "#ffffff20",
							zIndex: "10",
						}}
						className={style.item__motion}
					>
						<div className={style.item__text_wrap}>
							<h3 className={style.item__title}>{title}</h3>
							<p className={style.item__type}>{type}</p>
							<p
								className={style.item__desc}
								// style={renderText()}
							>
								{description}
							</p>
						</div>
					</motion.div>
				) : (
					<div className={style.close}>
						<motion.p
							animate={{
								opacity: 1,
							}}
							initial={{
								opacity: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 100,
							}}
							className={style.close__type}
						>
							{type}
						</motion.p>
						<motion.h3
							animate={{
								opacity: 1,
							}}
							initial={{
								opacity: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 100,
							}}
							className={style.close__title}
						>
							{title}
						</motion.h3>
					</div>
				)}
			</div>
		</button>
	);
};
