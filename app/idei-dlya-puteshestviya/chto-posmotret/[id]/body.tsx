import { LongReadRender } from "@/components/modules/LongReadRender/LongReadRender";

const Body = ({ data, sideBarText }: { data: any, sideBarText: string }) => {

  return (
    <section className="grid_layout">
      <LongReadRender body={data} noSidebar sideBarText={sideBarText} />
    </section>
  );
};

export default Body;
