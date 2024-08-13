import Link from "next/link";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";
import { Typography } from "@/components/elements/Typography/Typography";

export const SinglyRoutesCard = ({
  data,
}: {
  data: {
    id: number;
    image_path: string;
    name: string;
    point_x: number;
    point_y: number;
  }[];
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 bg-white p-5 rounded-[30px]">
      {data.map((item, index) => (
        <SinglyRoutesCardItem {...item} key={index} />
      ))}
    </div>
  );
};

export const SinglyRoutesCardItem = ({
  id,
  image_path,
  name,
  point_x,
  point_y,
}: {
  id: number;
  image_path: string;
  name: string;
  point_x: number;
  point_y: number;
}) => {
  return (
    <Link
      href={`https://maps.yandex.ru/?text=${point_x}+${point_y}`}
      target="_black"
    >
      <div className="rounded-[30px] bg-[#f5f5f5] hover:bg-[var(--color-green)] transition-all p-[30px] cursor-pointer grid gap-5">
        <div className="h-[150px] overflow-hidden">
          <ImageBlock srcImg={image_path} />
        </div>
        <Typography variant="h5" className="font-medium">
          {name}
        </Typography>
      </div>
    </Link>
  );
};
