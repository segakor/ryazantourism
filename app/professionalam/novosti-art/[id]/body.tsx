import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody, TNewsArt } from "@/types/types";

const Body = ({ data }: { data: TNewsArt }) => {
  const templates = [{ element: "LEAD_BLOCK", desc: data.desc }];

  return (
    <section className="grid_layout">
      <LongRead body={templates as TLongReadBody[]}></LongRead>
    </section>
  );
};

export default Body;
