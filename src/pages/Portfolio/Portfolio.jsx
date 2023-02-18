import style from "../Portfolio/Portfolio.module.scss";

import { PortfolioList } from "./PortfolioList/PortfolioList";

export const Portfolio = () => {
	return (
		<section className="section portfolio">
			<div className={style.portfolio__container}>
				<h2 className={`${style.portfolio__title} title`}>
					OUR PORTFOLIO
				</h2>
				<PortfolioList />
			</div>
		</section>
	);
};
