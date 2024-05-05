import { ImageBlock } from "./ImageBlock";

export const LeadBlock = ({
  title,
  desc,
  srcImg,
}: {
  title: string;
  desc: string;
  srcImg?: string;
}) => {
  return (
    <div className="longread_block">
      <div className="lead-text">{title}</div>
      <div className="text3">{desc}</div>
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};
