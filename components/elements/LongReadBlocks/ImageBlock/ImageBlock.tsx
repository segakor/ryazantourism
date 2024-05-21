/* eslint-disable @next/next/no-img-element */
import "./style.css";
export const ImageBlock = ({ srcImg }: { srcImg: string }) => {
  return (
    <div className="image_block">
      <img className="longread_image" src={srcImg} alt="img" />
    </div>
  );
};
