import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PochitatCard } from "@/components/modules/PochitatCard/PochitatCard";

const Body = () => {
  return (
    <section className="grid_layout">
      <PochitatCard />
      <BibliotekaNavigationFlat exclude="pochitat" />
    </section>
  );
};

export default Body;
