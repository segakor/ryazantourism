import { ImageBlock } from "../ImageBlock/ImageBlock";
import { TextBlock } from "../TextBlock/TextBlock";

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
    <div className="bg-white md:p-[50px] p-[30px] rounded-[30px] grid gap-7">
      {title && <div className="lead-text">{title}</div>}
      {desc && <TextBlock text={desc} />}
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};
