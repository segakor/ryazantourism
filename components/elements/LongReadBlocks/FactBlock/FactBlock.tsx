import { Typography } from "../../Typography/Typography";
import Image from "next/image";

export const FactBlock = ({ text }: { text: string }) => {
  return (
    <div className="p-[30px] bg-[#5363f7] rounded-[30px] text-white">
      <div className="grid gap-2">
        <div className="flex gap-2 items-center">
          <Image
            priority
            src={"/factBlock/fact.svg"}
            alt="img"
            width={24}
            height={24}
            className="image"
          />
          <Typography variant="h4">Интересный факт</Typography>
        </div>
        <div className="text3">{text}</div>
      </div>
    </div>
  );
};
