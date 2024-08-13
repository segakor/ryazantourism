/* eslint-disable @next/next/no-img-element */
import { ButtonDownload } from "@/components/elements/ButtonNew";
import { ChipsService } from "@/components/elements/ChipsService/ChipsService";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { poshitat } from "@/constants/pages/poshitat/poshitat";
import { TPochitatCard } from "@/types/types";

export const PochitatCard = () => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-3 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {poshitat.map((item, index) => (
        <PochitatCardItem {...item} key={index} />
      ))}
    </div>
  );
};
const PochitatCardItem = (props: TPochitatCard) => {
  const { imgUrl, title, desc, linkLitres, linkOzon, fileUrl, tag } = props;
  return (
    <div className="flex flex-col gap-12 bg-[#F7F7F7] rounded-[30px] p-7">
      <div className="flex flex-col gap-7 h-full">
        <ImageBlock srcImg={imgUrl} full />
        {tag?.map((item, index) => (
          <span key={index}>
            <div className="inline-block rounded-full text-white py-2 px-4 bg-[#5363F7]">
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.34034 12.3482C7.15323 12.4142 6.84506 12.4142 6.65796 12.3482C5.06207 11.8034 1.49609 9.53064 1.49609 5.6785C1.49609 3.97806 2.86635 2.60229 4.55579 2.60229C5.55735 2.60229 6.44334 3.08656 6.99915 3.83498C7.55496 3.08656 8.44645 2.60229 9.44251 2.60229C11.1319 2.60229 12.5022 3.97806 12.5022 5.6785C12.5022 9.53064 8.93622 11.8034 7.34034 12.3482Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </div>
            </div>
          </span>
        ))}
        <div className="flex flex-col justify-between h-full gap-5">
          <div className="flex flex-col gap-2">
            <div className="library-h">{title}</div>
            <div className="text3">{desc}</div>
          </div>
          <div className="flex flex-col gap-5">
            {linkLitres && <ChipsService type="litres" link={linkLitres} />}
            {linkOzon && <ChipsService type="ozon" link={linkOzon} />}
            {fileUrl && <ButtonDownload link={fileUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
};
