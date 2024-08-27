import { Napravleniya } from "@/components/modules/Art/Napravleniya";
import { TabPanelPoleznyi } from "@/components/modules/Art/TabPanelPoleznyi";
import { BazaZnaniy } from "@/components/modules/Art/BazaZnaniy";
import { News } from "@/components/modules/News";
import { news } from "@/constants/pages/professionalam/novosti-art";

const Body = () => {
  return (
    <section className="grid_layout !max-w-[1620px] md:!pt-40 md:!pb-40 !pt-20 !pb-20">
      <Napravleniya />
      <TabPanelPoleznyi />
      <News type="art" news={news.reverse().slice(0,4)} />
      <BazaZnaniy />
    </section>
  );
};

export default Body;
