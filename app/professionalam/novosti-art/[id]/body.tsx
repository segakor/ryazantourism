import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody, TNewsArt } from "@/types/types";

const Body = ({ data }: { data: TNewsArt }) => {
  const templates = [
    {
      element: "NEWS_BLOCK",
      desc: data.desc,
      srcImg: data.imgUrl,
      title: data.title,
    },
  ];

  return (
    <section className="grid_layout">
      <LongRead body={templates as TLongReadBody[]} noMargin noSidebar></LongRead>
    </section>
  );
};

export default Body;
