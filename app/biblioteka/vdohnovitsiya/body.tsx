import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";

const Body = () => {

  return (
    <section className="grid_layout">
      <BibliotekaNavigationFlat exclude='vdohnovitsiya'/>
    </section>
  );
};

export default Body;
