"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsSinglyRoutes } from "@/constants/contstants";
import { useState } from "react";
import { SinglyRoutest } from "@/components/modules/SinglyRoutes/SinglyRoutes";
import { TSinglyRoutes } from "@/types/types";
import "./style.css";
import Icons from "@/components/elements/Logo/Icons";
import { PodcastCard } from "@/components/modules/PodcastCard/PodcastCard";
import { TourCard } from "@/components/modules/TourCard/TourCard";

const Body = ({ data }: { data: TSinglyRoutes[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <div className="samostoyatelnye_marshruty_page">
      <section className="grid_layout">
        <h4 className="h4">
          Мы собрали десятки сценариев путешествий по Рязанской области для
          разных людей и разных ситуаций. И продумали их до мелочей
        </h4>
        <div className="singly_routes_info">
          <div className="singly_routes_info_text">
            Выбирайте готовый сценарий на сайте и отправляйтесь в поездку хоть
            сейчас. Всё уже продумано
          </div>
          <div className="singly_routes_info_decor">
            <Icons icon={"eye"} />
          </div>
          <div className="singly_routes_info_text">
            Или используйте их для вдохновения, как основу для вашего
            собственного плана путешествия
          </div>
        </div>
        <div className="singly_routes_card">
          <h3 className="h3">Найдите свой сценарий</h3>
          <Tabs tabs={tabsSinglyRoutes} onChange={onChangeTab} />
          <SinglyRoutest data={filteredData} />
        </div>
        <h4 className="h4">
          Знакомство с городом с лучшим бесплатным приложением для свободного
          путешественника! Отправляйтесь гулять и слушайте истории о том, что
          находится вокруг.
        </h4>
        <PodcastCard />
        <div className="singly_routes_card">
          <h3 className="h3">Экскурсии онлайн</h3>
          <TourCard />
        </div>
      </section>
    </div>
  );
};

export default Body;
