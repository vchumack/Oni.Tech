import style from "../Hero/Hero.module.scss";

import Marquee from "react-fast-marquee";

const MARQUE_ITEMS = [
  { key: "1", text: "E-commerce" },
  { key: "2", text: "FinTech" },
  { key: "3", text: "crypto" },
  { key: "4", text: "Payments" },
  { key: "5", text: "E-commerce" },
  { key: "6", text: "FinTech" },
  { key: "7", text: "crypto" },
  { key: "8", text: "Payments" },
];

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__wrap}>
          <h1 className={style.hero__title}>
            We will create
            <br className={style.hero__br} /> your&#32;
            <span className={style.hero__title_bold}>business</span>
            <br className={style.hero__br} /> from idea
          </h1>
          <button className={style.hero__btn}>Contact us</button>
        </div>
      </div>
      <div className={style.hero__loop_wrap}>
        <Marquee
          gradientColor={"no"}
          style={{
            width: "100vw",
          }}
        >
          <div className={style.hero__loop}>
            {MARQUE_ITEMS.map(({ key, text }) => {
              return (
                <p key={key} className={style.hero__loop_word}>
                  {text}
                </p>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
