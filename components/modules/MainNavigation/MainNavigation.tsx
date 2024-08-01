/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { mainNavigation } from "@/constants/contstants";
import Link from "next/link";
import { Typography } from "@/components/elements/Typography/Typography";

export const MainNavigation = () => {
  return (
    <div className="grid md:gap-20 gap-10 md:mt-20 mt-10">
      <div className="navigation_header">
        <Typography variant="h2" className="font-medium leading-tight">Спланировать путешествие</Typography>
        <p className="text2">
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[28px]">
        {mainNavigation.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${(index === 0 || index === 3) && "md:col-span-2 col-span-1"
              }`}
          >
            <div className="navigation_card">
              <img className="navigation_image" src={item.imgUrl} alt="" />
              <div className="navigation_inner">
                <div className="navigation_inner_header">
                  <Icons icon={"goTo"} />
                </div>
                <div className="navigation_inner_footer">
                  <Typography variant="h3" className="font-medium">
                    {item.title}
                  </Typography>
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
