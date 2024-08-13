import { createShimmer } from "@/utils/shimer";
import "./style.css";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";

export const HeroPage = ({
  imgUrl,
  title,
  desc,
  noFilter,
  className,
}: {
  imgUrl: string;
  title: string;
  desc?: string;
  noFilter?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-[500px] md:rounded-b-[100px] rounded-b-[50px] overflow-hidden ${className}`}
    >
      <Image
        className={`hero_longread_image ${
          noFilter && "hero_longread_image_no_filter"
        }`}
        src={imgUrl}
        alt="hero_img"
        fill
        priority
        placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
      />
      <div className="hero_longread_inner">
        <div className="grid gap-5 text-white">
          <Typography variant="h1">{title}</Typography>
          {desc && <p className="text1 opacity-50">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
