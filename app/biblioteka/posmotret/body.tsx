import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { PosmotretCard } from "@/components/modules/PosmotretCard/PosmotretCard";
import { TBibliotekaPosmotret } from "@/types/types";

const Body = ({ data }: { data: TBibliotekaPosmotret[] }) => {
  return (
    <section className="grid_layout">
      <PosmotretCard data={data} />
      <BibliotekaNavigationFlat exclude="posmotret" />
    </section>
  );
};

export default Body;
