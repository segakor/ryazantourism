import Link from "next/link";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { TBibliotekaPosmotret } from "@/types/types";
import { getImageUrl } from "@/utils/getImageUrl";

export const PosmotretCard = ({ data }: { data: TBibliotekaPosmotret[] }) => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-2 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {data.map((item, index) => (
        <PosmotretCardItem {...item} key={index} />
      ))}
    </div>
  );
};

export const PosmotretCardItem = ({
  title,
  subTitle,
  prolongation,
  date,
  storage_image,
  linkName,
  linkPath,
}: TBibliotekaPosmotret) => {
  return (
    <div className="flex flex-col gap-7 h-full bg-[#F7F7F7] rounded-[30px] p-7">
      <ImageBlock srcImg={getImageUrl(storage_image.imagePath)} />
      <div className="flex flex-col gap-5 h-full justify-between">
        <div className="grid gap-2">
          <div className="library-h">{title}</div>
          <div className="text3">{subTitle}</div>
          <p className="text3 text-gray-400">
            {prolongation} минут ・ {date}
          </p>
        </div>
        <Link href={linkPath} target="_blank">
          <div className="group/item bg-[var(--color-green)] hover:bg-black hover:text-white transition-all py-5 px-10 inline-block rounded-full ">
            <div className="flex gap-2 items-center">
              Смотреть на {linkName}{" "}
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black group-hover/item:fill-white"
              >
                <path
                  d="M7.61621 6.99099V0.687012H1.32218L1.31223 1.76088H5.76678L-0.000266552 7.53786L0.775302 8.31343L6.54235 2.53644L6.5324 6.99099H7.61621Z"
                  fill="fill-black group-hover/item:fill-white"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
