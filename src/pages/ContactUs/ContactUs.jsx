import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ReactComponent as Email } from "../../assets/images/contacts/bxs-envelope.svg";
import { ReactComponent as Tg } from "../../assets/images/contacts/bxl-telegram.svg";
import style from "../ContactUs/ContactUs.module.scss";

export const ContactUs = () => {
	return (
		<section className={style.contactUs} id="contact" current="5">
			<div className="container">
				<h2 className={style.title}>LEAVE THE APPLICATION</h2>
				<div className={style.box}>
					<div className={style.contactBox}>
						<div className={style.descriptionBox}>
							<p className={style.text}>
								We will discuss the idea, calculate the
								benchmark for the cost and development dates of
								MVP, draw up a work plan
							</p>
						</div>
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
