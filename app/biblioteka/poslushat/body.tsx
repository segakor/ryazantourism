import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PoslushatCard } from "@/components/modules/PoslushatCard/PoslushatCard";

const Body = () => {

  return (
    <section className="grid_layout">
      <PoslushatCard/>
      <BibliotekaNavigationFlat exclude="poslushat"/>
    </section>
  );
};

export default Body;
