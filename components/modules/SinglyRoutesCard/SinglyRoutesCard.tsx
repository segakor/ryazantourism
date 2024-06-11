import Link from "next/link";
import "./style.css";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock/ImageBlock";

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
    <div className="singly_routes_card_group">
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
    <Link href={"link"} target="_black">
      <div className="singly_routes_card_item">
        <div className="singly_routes_card_image">
          <ImageBlock srcImg={image_path} />
        </div>
        <div className="h5">{name}</div>
      </div>
    </Link>
  );
};
