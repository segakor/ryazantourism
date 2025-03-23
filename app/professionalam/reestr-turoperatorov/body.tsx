import { LongReadRender } from "@/components/modules/LongReadRender/LongReadRender";

const Body = ({ bodyText }: { bodyText: string }) => {
  return <LongReadRender body={bodyText} noSidebar />;
};

export default Body;
