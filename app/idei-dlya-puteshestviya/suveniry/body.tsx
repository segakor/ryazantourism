import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { TPlaceCard } from "@/types/types";

const Body = ({ data }: { data: TPlaceCard[] }) => {
  return (
    <section className="grid_layout">
      <div style={{ marginTop: "80px" }}>
        <PlaceCard data={data} />
      </div>
    </section>
  );
};

export default Body;
