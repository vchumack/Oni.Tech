import style from "../WorkProcess/WorkProcess.module.scss";

export const WorkProcess = () => {
	return (
		<section>
			<div className="anchor" id="process" />
			<div className="container">
				<h2 className={style.title}>DEVELOPMENT STEPS</h2>
				<ul className={style.cardsList}>
					<li className={style.cardsItem}>
						<div>
							<h3>Design and Analytics</h3>
							<p>
								Develop the design based on UI/UX product
								experience and conducted business analysis. On
								the way out, you get a cool design and a clear
								product launch plan.
							</p>
						</div>
					</li>
					<li className={style.cardsItem}>
						<div>
							<h3>MVP development</h3>
							<p>
								We determine the functionality, the time frame,
								the cost of implementation and the amount of
								resources allocated. We prepare technical
								documentation for the start of development. We
								launch development and implement releases every
								2 weeks. You will always have a clear idea of
								the progress.
							</p>
						</div>
					</li>
					<li className={style.cardsItem}>
						<div>
							<h3>Release and maintenance</h3>
							<p>
								We assign a special team to work with requests
								for a new product and quickly solve all emerging
								problems such as:{" "}
							</p>

							<ul>
								<li>Raising funds</li>
								<li>Formation and testing of hypotension</li>
								<li>Client needs investigatioon</li>
								<li>Adapting the product to market demands</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
