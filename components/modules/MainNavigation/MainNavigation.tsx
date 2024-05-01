/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import { mainNavigation } from "@/constants/contstants";

export const MainNavigation = () => {
  return (
    <section className="navigation_wrapper">
      <div className="navigation_header">
        <h3 className="section_header">Спланировать путешествие</h3>
        <p className="section_desc">
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="navigation_body">
        {mainNavigation.map((item, index) => (
          <div className="navigation_card" key={index}>
            {/* <img className="navigation_image" src={item.icon_url} alt="" /> */}
            <Image className="navigation_image" src={item.icon_url} alt="" fill />
            <div className="navigation_inner">
              <div className="navigation_inner_header">
                <Icons icon={"goTo"} />
              </div>
              <div className="navigation_inner_footer">
                <h3 className="section_header">{item.title}</h3>
                <p className="section_desc">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
