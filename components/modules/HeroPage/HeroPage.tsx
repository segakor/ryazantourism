import "./style.css";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const HeroPage = ({
  imgUrl,
  title,
  desc,
}: {
  imgUrl: string;
  title: string;
  desc?: string;
}) => {
  return (
    <div className="hero_longread_wrapper">
      <Image
        className="hero_longread_image"
        src={imgUrl}
        alt="Фон"
        fill
        priority
        quality={50}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
