import "./style.css";
import Image from "next/image";

export const QuoteBlock = ({
  text,
  authorText,
}: {
  text: string;
  authorText: string;
}) => {
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
        <div>
        <div className="quote-text">{text}</div>
        <div className="quote-author-text">{authorText}</div>
        </div>
      </div>
    </div>
  );
};
