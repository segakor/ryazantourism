import { LongReadRender } from "@/components/modules/LongReadRender/LongReadRender";

const Body = ({ data }: { data: string }) => {
  return (
    <section className="grid_layout">
      <LongReadRender body={data} />
    </section>
  );
};

export default Body;
