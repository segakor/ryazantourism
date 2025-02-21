import { createShimmer } from "@/utils/shimer";
import { TextBlock } from "../TextBlock/TextBlock";
import Image from "next/image";
import { Typography } from "../../Typography/Typography";

export const SingleBlock = ({
  title,
  desc,
  srcImg,
  date
}: {
  title: string;
  desc: string;
  srcImg?: string;
  date: string
}) => {
  //TODO: Image сделать один на всех
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
      {srcImg && (
        <div className={`w-full relative pt-[35%]`}>
          <Image
            src={srcImg}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg max-h-[440px]`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
            unoptimized
          />
        </div>
      )}
      <div className="md:py-[40px] md:px-[50px] p-[30px] grid gap-[30px]">
        {date && <div>{date}</div>}
        {title && (
          <Typography variant="h3" className="font-medium">
            {title}
          </Typography>
        )}
        {desc && <TextBlock text={desc} />}
      </div>
    </div>
  );
};
