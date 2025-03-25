import { LongReadRender } from "@/components/modules/LongReadRender/LongReadRender";

const Body = ({ bodyText }: { bodyText: string }) => {
  return (
    <section className="grid_layout">
      <LongReadRender body={bodyText} />
    </section>
  );
};

export default Body;
