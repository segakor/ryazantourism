import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PoslushatCard } from "@/components/modules/PoslushatCard/PoslushatCard";
import { TBibliotekaPoslushat } from "@/types/types";

const Body = ({ data }: { data: TBibliotekaPoslushat[] }) => {
  return (
    <section className="grid_layout">
      <PoslushatCard data={data} />
      <BibliotekaNavigationFlat exclude="poslushat" />
    </section>
  );
};

export default Body;
