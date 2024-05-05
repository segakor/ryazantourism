import "./style.css";
import Image from "next/image";

export const FactBlock = ({ text }: { text: string }) => {
  return (
    <div className="fact_block">
      <div className="fact_block_body">
        <Image
          priority
          src={"/factBlock/fact.svg"}
          alt="img"
          width={40}
          height={40}
          className="image"
        />
        <div className="fact_block_desc">
          <div className="h4">Интересный факт</div>
          <div className="text3">{text}</div>
        </div>
      </div>
    </div>
  );
};
