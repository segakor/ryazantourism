/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";

export const ImageBlock = ({ srcImg, full, classNameImg }: { srcImg: string; full?: boolean, classNameImg?:string }) => {
  return (
    <div className={`w-full relative ${full ? 'pt-[100%]' : "pt-[50%]"} max-h-[456px]`}>
      <Image
        src={srcImg}
        alt="img"
        objectFit="cover"
        fill
        className={`w-full h-full top-0 left-0 object-cover rounded-[30px] ${classNameImg && classNameImg}`}
        placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
        priority
      />
    </div>
  );
};
