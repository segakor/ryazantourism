"use client";
import { TGid } from "@/types/types";
import { OrganizedBannerRoutes } from "@/components/modules/OrganizedBannerRoutes";
import { Gidy } from "@/components/modules/Gidy";
import { Calendar } from "@/components/elements/Calendar/Calendar";
import "./style.css";

const Body = ({ dataGid }: { dataGid: TGid[] }) => {
  return (
    <div className="organizovannye_marshruty_page">
      <section className="grid_layout">
        <OrganizedBannerRoutes />
        <Calendar />
        <Gidy data={dataGid} />
      </section>
    </div>
  );
};

export default Body;
