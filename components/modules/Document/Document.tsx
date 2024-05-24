import "./style.css";
import Link from "next/link";
import { TDocument } from "@/types/types";
import Button from "@/components/elements/Button/Button";

const Document = ({ item }: { item: TDocument }) => {
  return (
    <Link href={item.link} target="_blank">
      <div className="document">
        <div className="document_header">
          <div className="document_header_format">
            {item.type.toUpperCase()}
          </div>
          <div className="document_header_date">{item.year}</div>
        </div>
        <div>{item.name}</div>
        <div>
          <div className="document_action">Скачать</div>
        </div>
      </div>
    </Link>
  );
};

export const Documents = ({ data }: { data: TDocument[] }) => {
  return (
    <div className="document_group">
      {data.map((item, index) => (
        <Document item={item} key={index} />
      ))}
    </div>
  );
};
