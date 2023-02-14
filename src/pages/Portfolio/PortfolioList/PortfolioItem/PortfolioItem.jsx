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
			setOpen(index);
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
						// animate={{
						// 	opacity: 1,
						// }}
						// initial={{
						// 	opacity: 0,
						// }}
						// transition={{
						// 	delay: 0.3,
						// }}
						css={{
							backgroundImage:
								"linear-gradient(116.29deg, #87CDD2 -29.94%, rgba(255, 255, 255, 0.26) -29.93%, rgba(135, 205, 210, 0) 101.76%)",
							background: "#ffffff20",
							zIndex: "10",
						}}
						className="z-10 flex w-full flex-col items-start rounded-3xl p-6 max-sm:p-4 sm:backdrop-blur-[50px]"
					>
						<div className={style.item__text_wrap}>
							<h3 className={style.item__title}>{title}</h3>
							<p className={style.item__type}>{type}</p>

							<p className={style.item__desc}>{description}</p>
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
								delay: 0.8,
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
								delay: 0.5,
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
