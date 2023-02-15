import style from "../PortfolioList/PortfolioList.module.scss";
import { useMediaQuery } from "react-responsive";
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
	const [open, setOpen] = useState(0);
	const isBigScreen = useMediaQuery({ query: "(min-width: 1100px)" });
	// console.log("open", open);
	return (
		<ul className={style.list}>
			{EXPERTISE.map((expertise, index) => (
				<li
					key={index}
					className={style.list__item}
					style={
						isBigScreen
							? {
									// transform: `translateY(0)`,
									transform: `translateX(-${index * 1.9}rem)`,
									zIndex: EXPERTISE.length - index,
									// {open === index ? flexBasis:"49%":flexBasis:"9.5%"},
									// ":firstOfType": {
									// 	left: 0,
									// 	flexBasis:
									// 		open === index ? "49%" : "9.5%",
									// },

									flex:
										open === index
											? "1 0 49%"
											: "1 0 10.2%",
							  }
							: {
									zIndex: EXPERTISE.length - index,
									transform: `translate(0,-${
										index * 1.5
									}rem)`,
									// transform: `translateY(-${index * 1.5}rem)`,
									flex:
										open === index
											? "1 0 45%"
											: "1 0 11.5%",
							  }
					}
				>
					<PortfolioItem
						isBigScreen={isBigScreen}
						index={index}
						setOpen={setOpen}
						isOpen={open === index}
						expertise={expertise}
					/>
				</li>
			))}
		</ul>
	);
};
