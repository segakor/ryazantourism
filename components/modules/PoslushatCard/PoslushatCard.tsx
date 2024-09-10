/* eslint-disable @next/next/no-img-element */
import { ChipsService } from "@/components/elements/ChipsService/ChipsService";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { poslushat } from "@/constants/pages/biblioteka/poslushat/poslushat";
import { TPoslushatCard } from "@/types/types";

export const PoslushatCard = () => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-2 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {poslushat.map((item, index) => (
        <PoslushatCardItem {...item} key={index} />
      ))}
    </div>
  );
};

const PoslushatCardItem = ({
  title,
  desc,
  date,
  prolongation,
  imgUrl,
  linkIzi,
  linkYa,
}: TPoslushatCard) => {
  return (
    <div className="flex flex-col gap-12 bg-[#F7F7F7] rounded-[30px] p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="md:w-[248px] md:h-[248px]">
          <ImageBlock srcImg={imgUrl} full/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text3 text-gray-400">
            {prolongation} минут ・ {date}
          </p>
          <div className="library-h">{title}</div>
          <div className="text3">{desc}</div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {linkYa && <ChipsService type="ya" link={linkYa} />}
        {linkIzi && <ChipsService type="izi" link={linkIzi} />}
      </div>
    </div>
  );
};
