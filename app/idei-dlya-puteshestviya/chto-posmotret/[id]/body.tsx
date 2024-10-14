import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody } from "@/types/types";

const Body = ({ data, sideBarText }: { data: any, sideBarText: string }) => {

  return (
    <section className="grid_layout">
      <LongRead body={data as TLongReadBody[]} noSidebar sideBarText={sideBarText} />
    </section>
  );
};

export default Body;
