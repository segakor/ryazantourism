/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import { mainNavigation } from "@/constants/contstants";

export const MainNavigation = () => {
  return (
    <section className="navigation_wrapper">
      <div className="section_title">
        <h3>Спланировать путешествие</h3>
        <p>
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="navigation_body">
        {mainNavigation.map((item, index) => (
          <div className="navigation_card" key={index}>
            <img className="navigation_image" src={item.icon_url} alt="" />
            <div className="navigation_inner">
              <div className="navigation_inner_header">
                <Icons icon={"goTo"} />
              </div>
              <div className="navigation_inner_footer">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
