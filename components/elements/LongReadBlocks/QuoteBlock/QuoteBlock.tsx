import Image from "next/image";
import { TextBlock } from "../TextBlock/TextBlock";

export const QuoteBlock = ({ text }: { text: string }) => {
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
        <TextBlock text={text} />
      </div>
    </div>
  );
};
