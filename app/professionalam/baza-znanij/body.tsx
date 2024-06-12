import { Documents } from "@/components/modules/Document/Document";
import { TDocument } from "@/types/types";

const Body = ({ data }: { data: TDocument[] }) => {
  return (
    <section className="grid_layout">
      <Documents data={data} />
    </section>
  );
};

export default Body;
