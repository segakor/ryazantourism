/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { TSinglyRoutes } from "@/types/types";
import LinkButton from "@/components/elements/Button/LinkButton";

//TODO: просклонять время !
//TODO: icons часики
const Item = ({ item }: { item: TSinglyRoutes }) => {
  return (
    <div className="singly_routes_item">
      <div className="singly_routes_item_header">
        <img
          className="singly_routes_image"
          src={item.images[0].url}
          alt="Фон"
        />
      </div>
      <div className="singly_routes_item_body">
        <div className="singly_routes_item_body_inner">
          <h5 className="h5">{item.title}</h5>
          <div className="note-text singly_routes_item_body_address">
            <Icons icon="location" />
            {item.duration.days} дня {item.duration.hours} часа
          </div>
        </div>
        <div className="singly_routes_item_footer">
          <LinkButton href={`/marshruty/samostoyatelnye-marshruty/${item.id}`} target="_self">
            К сценарию
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export const SinglyRoutest = ({ data }: { data: TSinglyRoutes[] }) => {
  return (
    <div className="singly_routes_group">
      {data.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};
