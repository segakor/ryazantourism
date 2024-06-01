"use client";
import { TGid } from "@/types/types";
import { OrganizedBannerRoutes } from "@/components/modules/OrganizedBannerRoutes";
import { Gidy } from "@/components/modules/Gidy";

const Body = ({ dataGid }: { dataGid: TGid[] }) => {
  return (
    <section className="grid_layout">
      <OrganizedBannerRoutes />
      <Gidy data={dataGid} />
    </section>
  );
};

export default Body;
