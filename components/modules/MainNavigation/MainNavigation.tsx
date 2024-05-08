/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { mainNavigation } from "@/constants/contstants";

export const MainNavigation = () => {
  return (
    <section className="grid_layout">
      <div className="navigation_header">
        <h3 className="header_typography">Спланировать путешествие</h3>
        <p className="desc_typography">
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="navigation_body">
        {mainNavigation.map((item, index) => (
          <div className="navigation_card" key={index}>
            <img className="navigation_image" src={item.imgUrl} alt="" />
            <div className="navigation_inner">
              <div className="navigation_inner_header">
                <Icons icon={"goTo"} />
              </div>
              <div className="navigation_inner_footer">
                <h3 className="header_typography">{item.title}</h3>
                <p className="desc_typography">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
