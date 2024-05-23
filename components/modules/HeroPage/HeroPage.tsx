import "./style.css";
import Image from "next/image";

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
      <Image className="hero_longread_image" src={imgUrl} alt="Фон" fill priority quality={50}/>
      <div className="hero_longread_inner">
        <div className="hero_longread_inner_body">
          <h1 className="h1">{title}</h1>
          {desc && <p className="text1">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
