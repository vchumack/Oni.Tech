import style from "../Portfolio/Portfolio.module.scss";

import { PortfolioList } from "./PortfolioList/PortfolioList";

export const Portfolio = () => {
	return (
		// <section className={style.portfolio} id="portfolio">

		<div className="container">
			<h2 className={style.portfolio__title}>OUR PORTFOLIO</h2>
			<PortfolioList />
		</div>
		// </section>
	);
};
