import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ReactComponent as Email } from "../../assets/images/contacts/bxs-envelope.svg";
import { ReactComponent as Tg } from "../../assets/images/contacts/bxl-telegram.svg";
import style from "../ContactUs/ContactUs.module.scss";

export const ContactUs = () => {
	return (
		<section className="section contactUs">
			<div className="container">
				<h2 className={`${style.title} title`}>
					LEAVE THE APPLICATION
				</h2>
				<div className={style.box}>
					<div className={style.contactBox}>
						<p className={style.text}>
							We will discuss the idea, calculate the benchmark
							for the cost and development dates of MVP, draw up a
							work plan
						</p>
						<ul className={style.list}>
							<li className={style.item}>
								<a href="mailto:info@onitech.com">
									<Email className={style.svg} />
									<p>info@onitech.com</p>
								</a>
							</li>
							<li className={style.item}>
								<a
									href="https://telegram.me/Oni_tech"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Tg className={style.svg} />
									<p>Write to telegram</p>
								</a>
							</li>
						</ul>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};
