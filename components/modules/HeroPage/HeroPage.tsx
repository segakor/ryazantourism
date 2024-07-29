import { createShimmer } from "@/utils/shimer";
import "./style.css";
import Image from "next/image";

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
        <div className="hero_longread_inner_body">
          <h1 className="h1">{title}</h1>
          {desc && <p className="text1">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
