import { HeroLongRead } from "@/components/modules/HeroLongRead";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/kuhnya-ryazanskogo-kraya";
import { LongReadBody } from "@/types/types";

const Kuhnya = () => {
  return (
    <div className="pages">
      <HeroLongRead
        imgUrl="/heroPages/region/kuhnya.jpg"
        title="Кухня рязанского края"
      />
      <LongRead body={template as LongReadBody[]} />
    </div>
  );
};

export default Kuhnya;
