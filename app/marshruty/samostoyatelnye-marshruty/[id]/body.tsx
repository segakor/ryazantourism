import { LongRead } from "@/components/modules/LongRead";
import { SinglyRoutesCard } from "@/components/modules/SinglyRoutesCard/SinglyRoutesCard";
import { TLongReadBody, TSinglyRoutesDetails } from "@/types/types";

const Body = ({ data }: { data: TSinglyRoutesDetails }) => {
  const templates = [{ element: "LEAD_BLOCK", text: data.description }];

  return (
    <section className="grid_layout">
      <LongRead body={templates as TLongReadBody[]} noSidebar>
        <SinglyRoutesCard data={data.sights} />
      </LongRead>
    </section>
  );
};

export default Body;
