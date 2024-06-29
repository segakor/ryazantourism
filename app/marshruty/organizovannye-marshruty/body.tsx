"use client";
import { TGid } from "@/types/types";
import { OrganizedBannerRoutes } from "@/components/modules/OrganizedBannerRoutes";
import { Gidy } from "@/components/modules/Gidy";
import "./style.css";
import { EventCard } from "@/components/modules/EventCard/EventCard";

const Body = ({ dataGid }: { dataGid: TGid[] }) => {
  return (
    <div className="organizovannye_marshruty_page">
      <section className="grid_layout">
        <OrganizedBannerRoutes />
        <EventCard />
        <Gidy data={dataGid} />
      </section>
    </div>
  );
};

export default Body;
