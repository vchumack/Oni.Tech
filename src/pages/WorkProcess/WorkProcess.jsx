import { workProcess } from "../../components/data/workProcess";

import style from "../WorkProcess/WorkProcess.module.scss";

export const WorkProcess = () => {
	return (
		<section className="section work-process">
			<div className={`${style.wrapper} container`}>
				<h2 className={`${style.title} title`}>DEVELOPMENT STEPS</h2>
				<ul className={style.cardsList}>
					{workProcess.map((item, i) => (
						<li key={i} className={style.cardsItem}>
							<div className={style.box}>
								<h3>{item.h3}</h3>
								<p>{item.p}</p>
								{item?.list && (
									<ul>
										{item.list.map((li) => (
											<li>{li.li}</li>
										))}
									</ul>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
