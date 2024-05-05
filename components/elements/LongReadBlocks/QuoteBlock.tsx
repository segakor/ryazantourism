import "./style.css";
import Image from "next/image";

export const QuoteBlock = ({ text }: { text: string }) => {
  return (
    <div className="quote_block">
      <div className="quote_block_body">
        <Image
          priority
          src={"/quoteBlock/quote.svg"}
          alt="img"
          width={40}
          height={40}
          className="image"
        />
        <div className="quote_block_desc">{text}</div>
      </div>
    </div>
  );
};
