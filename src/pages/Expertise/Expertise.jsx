import { useMedia } from "../../shared/hooks/useMedia";
import { whyUs } from "../../components/data/whyUs";

import style from "../Expertise/Expertise.module.scss";

export const Expertise = () => {
	const { isTablet } = useMedia();
	return (
		<section className="section expertise">
			<div className="container">
				<h2 className={`${style.heading} title`}>
					BENEFITS OF WORKING WITH US
				</h2>
				{isTablet && (
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
									{<item.icon width="100%" height="100%" />}
								</div>
								<span>{item.cardNum}</span>
							</div>
							<p className={style.whyName}>{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
