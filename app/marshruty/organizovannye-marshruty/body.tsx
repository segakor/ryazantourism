import { TGid } from "@/types/types";
import { OrganizedBannerRoutes } from "@/components/modules/OrganizedBannerRoutes";
import { Gidy } from "@/components/modules/Gidy";
import { EventCard } from "@/components/modules/EventCard/EventCard";

const Body = ({ dataGid }: { dataGid: TGid[] }) => {
  return (
    <div className="md:pt-[120px] md:pb-[120px] pt-[80px] pb-[80px]">
      <section className="grid_layout">
        <OrganizedBannerRoutes />
        <EventCard />
        <Gidy data={dataGid} />
      </section>
    </div>
  );
};

export default Body;
