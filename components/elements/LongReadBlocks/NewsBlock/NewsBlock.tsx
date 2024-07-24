import { TextBlock } from "../TextBlock/TextBlock";

export const NewsBlock = ({
  title,
  desc,
  srcImg,
}: {
  title: string;
  desc: string;
  srcImg?: string;
}) => {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden">
      <div className="w-full h-[27.5rem] relative">
        <img
          src={srcImg}
          className="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="md:py-[80px] md:px-[50px] p-[30px] grid gap-[30px]">
        {title && <div className="h3">{title}</div>}
        {desc && <TextBlock text={desc} />}
      </div>
    </div>
  );
};
