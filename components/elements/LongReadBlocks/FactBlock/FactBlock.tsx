import { Typography } from "../../Typography/Typography";
import Image from "next/image";

export const FactBlock = ({ text }: { text: string }) => {
  return (
    <div className="md:p-[30px] bg-[#5363f7] rounded-[30px] text-white">
      <div className="grid gap-5">
        <div className="flex gap-5">
          <Image
            priority
            src={"/factBlock/fact.svg"}
            alt="img"
            width={40}
            height={40}
            className="image"
          />
          <Typography variant="h4">Интересный факт</Typography>
        </div>
        <div className="text3">{text}</div>
      </div>
    </div>
  );
};
