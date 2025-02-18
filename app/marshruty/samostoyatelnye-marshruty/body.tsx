"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsSinglyRoutes } from "@/constants/contstants";
import { useState } from "react";
import { SinglyRoutest } from "@/components/modules/SinglyRoutes/SinglyRoutes";
import { TSamostoyatelnyeMarshruty } from "@/types/types";
import { PodcastCard } from "@/components/modules/PodcastCard/PodcastCard";
import { TourCard } from "@/components/modules/TourCard/TourCard";
import { Typography } from "@/components/elements/Typography/Typography";

const Body = ({ data }: { data: TSamostoyatelnyeMarshruty[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category === tab) : data;

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
        <Typography variant="h3" className="font-medium">
          Найдите свой сценарий
        </Typography>
        <div className='flex flex-nowrap overflow-x-auto'>
          <Tabs tabs={tabsSinglyRoutes} onChange={onChangeTab} />
        </div>
        <SinglyRoutest data={filteredData} />
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
