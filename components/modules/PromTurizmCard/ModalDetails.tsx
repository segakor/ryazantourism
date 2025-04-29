"use client";
import { TPromturizm } from "@/types/types";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";
import { TagsPromTur } from "@/components/elements/Tags/TagsPromTur";
import { TextBlock } from "@/components/elements/LongReadBlocks/TextBlock/TextBlock";
import { getImageUrl } from "@/utils/getImageUrl";

//TODO: Image сделать один на всех
export const ModalDetails = (data: TPromturizm) => {
  return (
    <div className="flex gap-10 py-5 md:flex-row flex-col">
      <div className="grid gap-4">
        <TagsPromTur tags={data.tags} />
        <Typography variant="h4" className="font-medium">
          {data.title}
        </Typography>
        <div className="note-text flex gap-2">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 6.85831C0 3.61134 2.71333 0.986938 5.99539 0.986938C9.28669 0.986938 12 3.61134 12 6.85831C12 8.4945 11.405 10.0135 10.4256 11.301C9.34506 12.7212 8.0133 13.9586 6.51428 14.9299C6.1712 15.1543 5.86157 15.1713 5.48503 14.9299C3.97747 13.9586 2.64571 12.7212 1.57447 11.301C0.594343 10.0135 0 8.4945 0 6.85831ZM4.01953 7.04108C4.01953 8.12882 4.90713 8.98433 5.99545 8.98433C7.08449 8.98433 7.98063 8.12882 7.98063 7.04108C7.98063 5.96182 7.08449 5.06467 5.99545 5.06467C4.90713 5.06467 4.01953 5.96182 4.01953 7.04108Z"
              fill="black"
            />
          </svg>
          {data.address}
        </div>
        <TextBlock text={data.template} />
        <div className="overflow-hidden h-full rounded-[30px]">
          <div className="w-full md:h-[420px] min-h-[200px] overflow-hidden grid">
            <div className={`w-full relative`}>
              <Image
                src={getImageUrl(data.storage_image.imagePath)}
                alt="img"
                objectFit="cover"
                fill
                className={`w-full h-full top-0 left-0 object-cover rounded-[30px]`}
                placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
