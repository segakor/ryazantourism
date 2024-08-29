import { ImageBlock } from "../ImageBlock/ImageBlock";
import { TextBlock } from "../TextBlock/TextBlock";

export const LeadBlock = ({
  srcImg,
  text,
}: {
  text: string;
  srcImg?: string;
}) => {
  return (
    <div className="bg-white md:p-[50px] p-[30px] rounded-[30px] grid gap-7 shadow-md">
      {text && <TextBlock text={text} />}
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};
