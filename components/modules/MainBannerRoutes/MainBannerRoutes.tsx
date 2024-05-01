"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import { Button } from "@/components/elements/Button/Button";

export const MainBannerRoutes = () => {
  return (
    <section className="banner_routes_wrapper">
      <div className="banner_routes_header">
        <div>
          <h3 className="section_header">Маршруты</h3>
          <p className="section_desc">
            <Icons icon={"quote"} /> Исследуйте Рязань самостоятельно или с
            опытными экскурсоводами
          </p>
        </div>
      </div>
      <div className="banner_routes_body">
        <div className="banner_routes_card_first">
          <h3 className="section_header">Самостоятельные маршруты</h3>
          <p className="section_desc">
            Готовые тематические сценарии для самостоятельных увлекательных
            путешествий. Рекомендуется для легких на подъем и любопытных
            искателей приключений
          </p>
          <div className="banner_routes_button">
            <Button name="Перейти" onClick={() => console.log("e")} />
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
          <h3 className="section_header">Маршрут с гидом</h3>
          <p className="section_desc">
            Проект для тех, кто готов к глубокому погружению в историю и
            культуру города и области в компании с экскурсоводом. Подходит для
            опытных и начинающих туристов
          </p>
          <div className="banner_routes_button">
            <Button name="Перейти" onClick={() => console.log("e")} />
          </div>
        </div>
      </div>
    </section>
  );
};
