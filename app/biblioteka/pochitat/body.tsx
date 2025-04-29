import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PochitatCard } from "@/components/modules/PochitatCard/PochitatCard";
import { TBibliotekaPochitat } from "@/types/types";

const Body = ({ data }: { data: TBibliotekaPochitat[] }) => {
  return (
    <section className="grid_layout">
      <PochitatCard data={data} />
      <BibliotekaNavigationFlat exclude="pochitat" />
    </section>
  );
};

export default Body;
