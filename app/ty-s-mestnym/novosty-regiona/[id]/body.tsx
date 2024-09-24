import { LongRead } from "@/components/modules/LongRead";
import { TLongReadBody, TNews } from "@/types/types";
import { getImageUrl } from "@/utils/getImageUrl";
import { format, parseISO } from "date-fns";

const Body = ({ data }: { data: TNews }) => {
  const templates = [
    {
      element: "SINGLE_BLOCK",
      desc: data.bodyText,
      srcImg: getImageUrl(data.storage_image?.imagePath),
      title: data.title,
      date: format(parseISO(data.date), 'dd.MM.yyyy')
    },
  ];

  return (
    <section className="grid_layout">
      <LongRead body={templates as TLongReadBody[]} noMargin noSidebar></LongRead>
    </section>
  );
};

export default Body;
