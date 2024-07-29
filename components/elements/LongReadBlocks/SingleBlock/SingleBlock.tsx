import { createShimmer } from "@/utils/shimer";
import { TextBlock } from "../TextBlock/TextBlock";
import Image from "next/image";

export const SingleBlock = ({
  title,
  desc,
  srcImg,
}: {
  title: string;
  desc: string;
  srcImg?: string;
}) => {
  //TODO: Image сделать один на всех
  return (
    <div className="bg-white rounded-[30px] overflow-hidden">
       {srcImg && (
          <div className={`w-full relative pt-[35%]`}>
          <Image
            src={srcImg}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg max-h-[437px]`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
          />
        </div>
        )}
      <div className="md:py-[80px] md:px-[50px] p-[30px] grid gap-[30px]">
        {title && <div className="h3">{title}</div>}
        {desc && <TextBlock text={desc} />}
      </div>
    </div>
  );
};
