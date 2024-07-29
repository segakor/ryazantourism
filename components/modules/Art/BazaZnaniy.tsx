import { Typography } from "@/components/elements/Typography/Typography";
import { Documents } from "../Document/Document";
import { data } from "@/constants/pages/professionalam/baza-znanij";

export const BazaZnaniy = () => {
  return (
    <div className="md:max-w-[82.5rem] md:m-auto">
      <Typography variant="h2" className="mb-16">База знаний</Typography>
      <Documents data={data} />
    </div>
  );
};
