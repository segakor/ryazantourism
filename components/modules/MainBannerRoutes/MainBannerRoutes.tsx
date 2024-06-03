"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import LinkButton from "@/components/elements/Button/LinkButton";

export const MainBannerRoutes = () => {
  return (
    <section className="grid_layout">
      <div className="banner_routes_header">
        <h3 className="h2">Маршруты</h3>
        <div className="text2">
          <Icons icon={"quote"} className="quote" />
          Исследуйте Рязань самостоятельно или с опытными экскурсоводами
        </div>
      </div>
      <div className="banner_routes_body">
        <div className="banner_routes_card_first">
          <h3 className="h3">Самостоятельные маршруты</h3>
          <p className="text2">
            Готовые тематические сценарии для самостоятельных увлекательных
            путешествий. Рекомендуется для легких на подъем и любопытных
            искателей приключений
          </p>
          <div className="banner_routes_button">
            <LinkButton>Перейти</LinkButton>
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
          <h3 className="h3">Маршрут с гидом</h3>
          <p className="text2">
            Проект для тех, кто готов к глубокому погружению в историю и
            культуру города и области в компании с экскурсоводом. Подходит для
            опытных и начинающих туристов
          </p>
          <div className="banner_routes_button">
            <LinkButton>Перейти</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
