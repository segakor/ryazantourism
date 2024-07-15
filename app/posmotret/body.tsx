import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PosmotretCard } from "@/components/modules/PosmotretCard/PosmotretCard";

const Body = () => {

  return (
    <section className="grid_layout">
      <PosmotretCard/>
      <BibliotekaNavigationFlat exclude="posmotret"/>
    </section>
  );
};

export default Body;
