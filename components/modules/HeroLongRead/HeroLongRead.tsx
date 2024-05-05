/* eslint-disable @next/next/no-img-element */
import "./style.css";

export const HeroLongRead = ({ imgUrl, title }: { imgUrl: string, title:string }) => {
  return (
    <div className="hero_longread_wrapper">
      <img className="hero_longread_image" src={imgUrl} alt="Фон" />
      <div className="hero_longread_inner">
        <div className="hero_longread_inner_body">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};
