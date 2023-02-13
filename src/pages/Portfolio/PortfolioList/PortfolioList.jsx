import style from "../PortfolioList/PortfolioList.module.scss";

import { useState } from "react";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";

import SaveImg from "../../../assets/images/portfolio/save/save-screen.webp";
import GuardarianImg from "../../../assets/images/portfolio/guardian/guardian-home.webp";
import BitinterpayImg from "../../../assets/images/portfolio/bitinterpay/bitinterpay-home-screen.webp";
import SanseraImg from "../../../assets/images/portfolio/sansera/sansera-home.webp";
import HeistImg from "../../../assets/images/portfolio/heist/heist-home.webp";

const EXPERTISE = [
	{
		title: "Guardarian",
		description:
			"Two-way fiat-to-crypto gateway for individuals and businesses with integrated crypto prepaid cards.",
		type: "Exchanges",
		// thumbnail: GuardarianImg,
		img: GuardarianImg,
		// route: "/case/guardarian",
	},
	{
		title: "Save",
		description:
			"Two-way fiat-to-crypto gateway with a non-custodial crypto wallet and integrated crypto-payments processing module (allows to accept payment with crypto and receive fiat)",
		type: "Crypto",
		// thumbnail: saveImage,
		img: SaveImg,
		// route: "/case/save",
	},
	{
		title: "Bitinterpay",
		description:
			"Crypto platform with instant crypto-fiat exchange with multiple fiat payment methods.",
		type: "Exchanges",
		// thumbnail: bitinterpayImage,
		img: BitinterpayImg,
		// route: "/case/bitinterpay",
	},
	{
		title: "Sansera",
		description:
			"Stellar-based blockchain ecosystem for tokenization, financial services, and fundraising projects.",
		type: "Tokens",
		// thumbnail: sanseraImage,
		img: SanseraImg,
		// route: "/case/sansera",
	},
	{
		title: "The Heist Game",
		description:
			"Play 2 Earn NFT. Users participate in the presale, in the game can buy an unlimited number of NFT. It has its own unique economy that allows you to buy, upgrade - burn NFT and get rarer NFT",
		type: "NFT",
		// thumbnail: heistImage,
		img: HeistImg,
		// route: "/case/the-heist-game",
	},
];

export const PortfolioList = () => {
	const [openCardId, setOpenCardId] = useState(1);

	return (
		<div className={style.list}>
			<PortfolioItem
				id={1}
				title={EXPERTISE[0].title}
				type={EXPERTISE[0].type}
				img={EXPERTISE[0].img}
				isOpen={openCardId}
				setOpen={setOpenCardId}
			>
				<div className={style.list__item}>
					<img
						className={style.list__img}
						src={EXPERTISE[0].img}
						alt={EXPERTISE[0].title}
					/>
					<div className={style.list__text_wrap}>
						<p className={style.list__title}>
							{EXPERTISE[0].title}
						</p>
						<p className={style.list__desc}>
							{EXPERTISE[0].description}
						</p>
						<p className={style.list__type}>{EXPERTISE[0].type}</p>
					</div>
				</div>
			</PortfolioItem>
			<PortfolioItem
				id={2}
				title={EXPERTISE[1].title}
				type={EXPERTISE[1].type}
				img={EXPERTISE[1].img}
				isOpen={openCardId}
				setOpen={setOpenCardId}
			>
				<div className={style.list__item}>
					<img
						className={style.list__img}
						src={EXPERTISE[1].img}
						alt={EXPERTISE[1].title}
					/>
					<div className={style.list__text_wrap}>
						<p className={style.list__title}>
							{EXPERTISE[1].title}
						</p>
						<p className={style.list__desc}>
							{EXPERTISE[1].description}
						</p>
						<p className={style.list__type}>{EXPERTISE[1].type}</p>
					</div>
				</div>
			</PortfolioItem>
			<PortfolioItem
				id={3}
				title={EXPERTISE[2].title}
				type={EXPERTISE[2].type}
				img={EXPERTISE[2].img}
				isOpen={openCardId}
				setOpen={setOpenCardId}
			>
				<div className={style.list__item}>
					<img
						className={style.list__img}
						src={EXPERTISE[2].img}
						alt={EXPERTISE[2].title}
					/>
					<div className={style.list__text_wrap}>
						<p className={style.list__title}>
							{EXPERTISE[2].title}
						</p>
						<p className={style.list__desc}>
							{EXPERTISE[2].description}
						</p>
						<p className={style.list__type}>{EXPERTISE[2].type}</p>
					</div>
				</div>
			</PortfolioItem>
			<PortfolioItem
				id={4}
				title={EXPERTISE[3].title}
				type={EXPERTISE[3].type}
				img={EXPERTISE[3].img}
				isOpen={openCardId}
				setOpen={setOpenCardId}
			>
				<div className={style.list__item}>
					<img
						className={style.list__img}
						src={EXPERTISE[3].img}
						alt={EXPERTISE[3].title}
					/>
					<div className={style.list__text_wrap}>
						<p className={style.list__title}>
							{EXPERTISE[3].title}
						</p>
						<p className={style.list__desc}>
							{EXPERTISE[3].description}
						</p>
						<p className={style.list__type}>{EXPERTISE[3].type}</p>
					</div>
				</div>
			</PortfolioItem>
			<PortfolioItem
				id={5}
				title={EXPERTISE[4].title}
				type={EXPERTISE[4].type}
				img={EXPERTISE[4].img}
				isOpen={openCardId}
				setOpen={setOpenCardId}
			>
				<div className={style.list__item}>
					<img
						className={style.list__img}
						src={EXPERTISE[4].img}
						alt={EXPERTISE[4].title}
					/>
					<div className={style.list__text_wrap}>
						<p className={style.list__title}>
							{EXPERTISE[4].title}
						</p>
						<p className={style.list__desc}>
							{EXPERTISE[4].description}
						</p>
						<p className={style.list__type}>{EXPERTISE[4].type}</p>
					</div>
				</div>
			</PortfolioItem>
		</div>
	);
};
