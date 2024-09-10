import { createShimmer } from "@/utils/shimer";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";

export const HeroPage = ({
  imgUrl,
  title,
  desc,
  className,
  classNameImage
}: {
  imgUrl: string;
  title: string;
  desc?: string;
  className?: string;
  classNameImage?:string
}) => {
  return (
    <div
      className={`relative md:h-[550px] h-[450px] md:rounded-b-[100px] rounded-b-[50px] overflow-hidden ${className}`}
    >
      <Image
        src={imgUrl}
        alt="hero_img"
        fill
        priority
        objectFit="cover"
        placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
        className={classNameImage}
        unoptimized
      />
      <div className="absolute left-1/2 top-[55%] z-[1] max-w-[1280px] w-full m-[0_auto]
       flex flex-col justify-center translate-y-[-50%] translate-x-[-50%] md:px-8 px-5">
        <div className="grid gap-5 text-white">
          <Typography variant="h1">{title}</Typography>
          {desc && <p className="text1 opacity-70">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
