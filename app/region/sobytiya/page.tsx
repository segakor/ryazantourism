import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/sobytiya";
import { TLongReadBody } from "@/types/types";

const Sobytia = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/sobytiya.jpg" title="События" />
      <LongRead body={template as TLongReadBody[]} />
    </div>
  );
};

export default Sobytia;
