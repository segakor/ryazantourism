import Image from "next/image";

export const QuoteBlock = ({
  text,
  authorText,
}: {
  text: string;
  authorText: string;
}) => {
  return (
    <div className="p-[30px] bg-[#252525] text-white rounded-[30px]">
      <div className="flex gap-5 items-baseline">
        <Image
          priority
          src={"/quoteBlock/quote.svg"}
          alt="img"
          width={24}
          height={24}
          className="image md:block hidden"
          unoptimized
        />
        <div>
          <div className="quote-text">{text}</div>
          <div className="quote-author-text">{authorText}</div>
        </div>
      </div>
    </div>
  );
};
