/* eslint-disable @next/next/no-img-element */
import "./style.css";

export const HeroPage = ({ imgUrl, title, desc}: { imgUrl: string, title:string, desc?:string }) => {
  return (
    <div className="hero_longread_wrapper">
      <img className="hero_longread_image" src={imgUrl} alt="Фон" />
      <div className="hero_longread_inner">
        <div className="hero_longread_inner_body">
          <h1 className="h1">{title}</h1>
          {desc && <p className="text1">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
