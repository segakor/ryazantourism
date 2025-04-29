/* eslint-disable @next/next/no-img-element */
import { ChipsService } from "@/components/elements/ChipsService/ChipsService";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { TBibliotekaPoslushat } from "@/types/types";
import { getImageUrl } from "@/utils/getImageUrl";

export const PoslushatCard = ({ data }: { data: TBibliotekaPoslushat[] }) => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-2 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {data.map((item, index) => (
        <PoslushatCardItem {...item} key={index} />
      ))}
    </div>
  );
};

const PoslushatCardItem = ({
  title,
  subTitle,
  date,
  prolongation,
  storage_image,
  linkPathIzi,
  linkPathYa,
}: TBibliotekaPoslushat) => {
  return (
    <div className="flex flex-col gap-12 bg-[#F7F7F7] rounded-[30px] p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="md:w-[248px] md:h-[248px]">
          <ImageBlock srcImg={getImageUrl(storage_image.imagePath)} full />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text3 text-gray-400">
            {prolongation} минут ・ {date}
          </p>
          <div className="library-h">{title}</div>
          <div className="text3">{subTitle}</div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {linkPathYa && <ChipsService type="ya" link={linkPathYa} />}
        {linkPathIzi && <ChipsService type="izi" link={linkPathIzi} />}
      </div>
    </div>
  );
};
