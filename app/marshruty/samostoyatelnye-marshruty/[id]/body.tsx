import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody } from "@/types/types";

const Body = ({ data }: { data: TLongReadBody[] }) => {

  return (
    <section className="grid_layout">
      <LongRead body={data as TLongReadBody[]} />
    </section>
  );
};

export default Body;
