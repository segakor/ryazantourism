import Image from "next/image";

export const FactBlock = ({ text }: { text: string }) => {
  return (
    <div className="p-[30px] bg-[#5363f7] rounded-[30px] text-white">
      <div className="flex gap-4">
        <Image
          priority
          src={"/factBlock/fact.svg"}
          alt="img"
          width={24}
          height={24}
          className="image"
        />
        <div className="text3">{text}</div>
      </div>
    </div>
  );
};
