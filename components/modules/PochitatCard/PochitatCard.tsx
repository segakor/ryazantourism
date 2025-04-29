/* eslint-disable @next/next/no-img-element */
import { ChipsService } from "@/components/elements/ChipsService/ChipsService";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { TBibliotekaPochitat } from "@/types/types";
import { getImageUrl } from "@/utils/getImageUrl";

export const PochitatCard = ({ data }: { data: TBibliotekaPochitat[] }) => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-3 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {data.map((item, index) => (
        <PochitatCardItem {...item} key={index} />
      ))}
    </div>
  );
};
const PochitatCardItem = (props: TBibliotekaPochitat) => {
  const {
    storage_image,
    title,
    subTitle,
    linkPathLitres,
    linkPathOzon,
    linkPath,
  } = props;
  return (
    <div className="flex flex-col gap-12 bg-[#F7F7F7] rounded-[30px] p-7">
      <div className="flex flex-col gap-7 h-full">
        <ImageBlock srcImg={getImageUrl(storage_image.imagePath)} full />
        <div className="flex flex-col justify-between h-full gap-5">
          <div className="flex flex-col gap-2">
            <div className="library-h">{title}</div>
            <div className="text3">{subTitle}</div>
          </div>
          <div className="flex flex-col gap-5">
            {linkPathLitres && <ChipsService type="litres" link={linkPathLitres} />}
            {linkPathOzon && <ChipsService type="ozon" link={linkPathOzon} />}
            {linkPath && <ChipsService type="default" link={linkPath} />}
          </div>
        </div>
      </div>
    </div>
  );
};
