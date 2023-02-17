import { useMediaQuery } from "react-responsive";
import { whyUs } from "../../components/data/whyUs";

import style from "../Expertise/Expertise.module.scss";

export const Expertise = () => {
	const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		// <section className={style.section} current="2" id="expertise">
		<>
			<section className="section expertise">
				<div className="container">
					<h2 className={`${style.heading} title`}>
						BENEFITS OF WORKING WITH US
					</h2>
					{isBigScreen && (
						<div className={`${style.back} `}>
							<p>why</p>
							<p>us</p>
						</div>
					)}
					<ul className={style.whyList}>
						{whyUs.map((item) => (
							<li key={item.key} className={`${style.whyItem}`}>
								<div className={style.whyMeta}>
									<div>
										{
											<item.icon
												width="100%"
												height="100%"
											/>
										}
									</div>
									<span>{item.cardNum}</span>
								</div>
								<p className={style.whyName}>{item.text}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
		// </section>
	);
};
