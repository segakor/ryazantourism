import { Napravleniya } from "@/components/modules/Art/Napravleniya";
import "./style.css";
import { TabPanelPoleznyi } from "@/components/modules/Art/TabPanelPoleznyi";
import { BazaZnaniy } from "@/components/modules/Art/BazaZnaniy";
import { News } from "@/components/modules/News";

const Body = () => {
  return (
    <section className="grid_layout grid_layout_art">
      <Napravleniya />
      <TabPanelPoleznyi />
      <News type="art" />
      <BazaZnaniy />
    </section>
  );
};

export default Body;
