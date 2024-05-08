import { HeroLongRead } from "@/components/modules/HeroLongRead";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/priroda";
import { LongReadBody } from "@/types/types";

const Priroda = () => {
  return (
    <div className="pages">
      <HeroLongRead imgUrl="/heroPages/region/priroda.jpg" title="Природа" />
      <LongRead body={template as LongReadBody[]} />
    </div>
  );
};

export default Priroda;
