import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ReactComponent as Email } from "../../assets/images/contacts/bxs-envelope.svg";
import { ReactComponent as Tg } from "../../assets/images/contacts/bxl-telegram.svg";
import style from "../ContactUs/ContactUs.module.scss";

export const ContactUs = () => {
	return (
		<section id="contact" className={style.contactUs}>
			<div className="container">
				<div className={style.box}>
					<div className={style.contactBox}>
						<div className={style.descriptionBox}>
							<h2 className={style.title}>
								LEAVE THE APPLICATION
							</h2>
							<p className={style.text}>
								We will discuss the idea, calculate the
								benchmark for the cost and development dates of
								MVP, draw up a work plan
							</p>
						</div>
						<ul className={style.list}>
							<li className={style.item}>
								<Email className={style.svg} />

								<a href="/">info@onitech.com</a>
							</li>
							<li className={style.item}>
								<Tg className={style.svg} />
								<a href="/">Write to telegram</a>
							</li>
						</ul>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};
