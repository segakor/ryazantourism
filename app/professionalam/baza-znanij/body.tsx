import { Documents } from "@/components/modules/Document/Document";
import { TDocument } from "@/types/types";

const Body = ({ data }: { data: TDocument[] }) => {
  return (
    <section className="grid_layout">
      <div className="pt-[11.25rem] pb-[11.25rem]">
        <Documents data={data} />
      </div>
    </section>
  );
};

export default Body;
