import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/sobytiya";
import { TLongReadBody } from "@/types/types";

const Sobytia = () => {
  return (
    <WrapperGreyPages>
      <HeroPage imgUrl="/heroPages/region/sobytiya.jpg" title="События" />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Sobytia;
