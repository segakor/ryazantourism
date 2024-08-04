"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsSinglyRoutes } from "@/constants/contstants";
import { useState } from "react";
import { SinglyRoutest } from "@/components/modules/SinglyRoutes/SinglyRoutes";
import { TSinglyRoutes } from "@/types/types";
import Icons from "@/components/elements/Logo/Icons";
import { PodcastCard } from "@/components/modules/PodcastCard/PodcastCard";
import { TourCard } from "@/components/modules/TourCard/TourCard";
import { Typography } from "@/components/elements/Typography/Typography";

const Body = ({ data }: { data: TSinglyRoutes[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <div className="md:pt-[120px] md:pb-[120px] pt-[80px] pb-[80px]">
      <section className="grid_layout">
        <Typography
          variant="h4"
          className="font-medium text-center opacity-[0.5] text-[var(--color-grey)]"
        >
          Мы собрали десятки сценариев путешествий по Рязанской области для
          разных людей и разных ситуаций. И продумали их до мелочей
        </Typography>
        <div className="flex justify-between gap-[2.1875rem]">
          <div className="flex-[0_1_31.25rem] font-medium text-center md:text-2xl text-xs">
            Выбирайте готовый сценарий на сайте и отправляйтесь в поездку хоть
            сейчас. Всё уже продумано
          </div>
          <div className="md:block hidden">
            <Icons icon={"eye"} />
          </div>
          <div className="flex-[0_1_31.25rem] font-medium text-center md:text-2xl text-xs">
            Или используйте их для вдохновения, как основу для вашего
            собственного плана путешествия
          </div>
        </div>
        <div className="singly_routes_card">
          <Typography variant="h3" className="mb-5 font-medium">
            Найдите свой сценарий
          </Typography>
          <div className="md:mb-8 mb-5">
            <Tabs tabs={tabsSinglyRoutes} onChange={onChangeTab} />
          </div>
          <SinglyRoutest data={filteredData} />
        </div>
        <Typography
          variant="h4"
          className="font-medium text-center opacity-[0.5] text-[var(--color-grey)]"
        >
          Знакомство с городом с лучшим бесплатным приложением для свободного
          путешественника! Отправляйтесь гулять и слушайте истории о том, что
          находится вокруг.
        </Typography>
        <PodcastCard />
        <div>
          <Typography variant="h3" className="mb-5 font-medium">
            Экскурсии онлайн
          </Typography>
          <TourCard />
        </div>
      </section>
    </div>
  );
};

export default Body;
