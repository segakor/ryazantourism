import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import LinkButton from "@/components/elements/Button/LinkButton";
import { Typography } from "@/components/elements/Typography/Typography";

export const MainBannerRoutes = () => {
  return (
    <div className="grid md:gap-20 gap-10">
      <div className="banner_routes_header">
        <Typography variant="h2" className="font-medium">Маршруты</Typography>
        <div className="text2">
          <Icons icon={"quote"} className="quote" />
          Исследуйте Рязань самостоятельно или с опытными экскурсоводами
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px]">
        <div className="banner_routes_card_first">
          <Typography variant="h3" className="font-medium">Самостоятельные маршруты</Typography>
          <p className="text2">
            Готовые тематические сценарии для самостоятельных увлекательных
            путешествий. Рекомендуется для легких на подъем и любопытных
            искателей приключений
          </p>
          <div className="banner_routes_button">
            <LinkButton href="/marshruty/samostoyatelnye-marshruty">
              Перейти
            </LinkButton>
          </div>
          <Image
            priority
            src={"/routesCard/first.svg"}
            alt="img"
            width={512}
            height={202}
            className="banner_image"
          />
        </div>
        <div className="banner_routes_card_second">
          <Image
            priority
            src={"/routesCard/second.svg"}
            alt="img"
            width={512}
            height={202}
            className="banner_image"
          />
          <Typography variant="h3" className="font-medium">Маршрут с гидом</Typography>
          <p className="text2">
            Проект для тех, кто готов к глубокому погружению в историю и
            культуру города и области в компании с экскурсоводом. Подходит для
            опытных и начинающих туристов
          </p>
          <div className="banner_routes_button">
            <LinkButton href="/marshruty/organizovannye-marshruty">
              Перейти
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
