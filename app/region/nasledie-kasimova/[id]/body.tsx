import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody } from "@/types/types";

const Body = ({ data }: { data: any }) => {
  return (
    <section className="grid_layout">
      <LongRead body={data as TLongReadBody[]} noSidebar />
    </section>
  );
};

export default Body;
