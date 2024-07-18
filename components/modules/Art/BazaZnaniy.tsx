import { Documents } from "../Document/Document";
import { data } from "@/constants/pages/professionalam/baza-znanij";

export const BazaZnaniy = () => {
  return (
    <div className="md:max-w-[82.5rem] md:m-auto">
      <h2 className="h2 mb-16">База знаний</h2>
      <Documents data={data} />
    </div>
  );
};
