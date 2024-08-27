import { Loader } from "@/components/elements/Loader/Loader";
import { HeroPageFake } from "@/components/modules/HeroPage";

export default function Loading() {
  return (
    <div>
      <HeroPageFake />
      <Loader />
    </div>
  );
}
