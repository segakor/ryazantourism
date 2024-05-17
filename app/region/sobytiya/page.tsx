import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/sobytiya";
import { LongReadBody } from "@/types/types";

const Sobytia = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/arhitektura.jpg" title="События" />
      <LongRead body={template as LongReadBody[]} />
    </div>
  );
};

export default Sobytia;
