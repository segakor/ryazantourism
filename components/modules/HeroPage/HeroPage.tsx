import { createShimmer } from "@/utils/shimer";
import "./style.css";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";

export const HeroPage = ({
  imgUrl,
  title,
  desc,
  noFilter,
}: {
  imgUrl: string;
  title: string;
  desc?: string;
  noFilter?: boolean;
}) => {
  return (
    <div className="hero_longread_wrapper">
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
