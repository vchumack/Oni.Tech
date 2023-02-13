import style from "../PortfolioItem/PortfolioItem.module.scss";

import { motion, AnimatePresence } from "framer-motion";

export const PortfolioItem = ({
	id,
	title,
	type,
	img,
	children,
	isOpen,
	setOpen,
}) => (
	<motion.div
		className="portfolio-card"
		onClick={() => setOpen(isOpen === id ? 0 : id)}
		initial={{ x: "100%", opacity: 1 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: "100%", opacity: 0 }}
		// transition={{ delay: 1 }}
	>
		<AnimatePresence>
			{isOpen === id ? (
				<motion.div
					className="portfolio-card-content"
					initial={{ x: "100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					// transition={{ delay: 1 }}
				>
					{children}
				</motion.div>
			) : (
				<motion.div
					className="portfolio-card-shortcut"
					initial={{ x: 0 }}
					animate={{ x: isOpen === id ? "100%" : 0 }}
					transition={{ delay: 1 }}
				>
					<div className={style.close}>
						<img
							className={style.close__img}
							src={img}
							alt={title}
						/>
						<p className={style.close__type}>{type}</p>
						<p className={style.close__title}>{title}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	</motion.div>
);
