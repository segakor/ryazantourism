/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { mainNavigation } from "@/constants/contstants";
import Link from "next/link";

export const MainNavigation = () => {
  return (
    <div className="grid md:gap-20 gap-10 md:mt-20 mt-10">
      <div className="navigation_header">
        <h2 className="h2">Спланировать путешествие</h2>
        <p className="text2">
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="navigation_body">
        {mainNavigation.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="navigation_card">
              <img className="navigation_image" src={item.imgUrl} alt="" />
              <div className="navigation_inner">
                <div className="navigation_inner_header">
                  <Icons icon={"goTo"} />
                </div>
                <div className="navigation_inner_footer">
                  <h3 className="h3">{item.title}</h3>
                  <p className="text2">{item.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
