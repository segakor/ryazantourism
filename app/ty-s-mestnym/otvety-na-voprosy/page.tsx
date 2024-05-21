import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";
import { Suspense } from "react";
import { Otvet } from "@/components/modules/Otvety/Otvet";

export const metadata: Metadata = {
  title: "Ответы на вопросы - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <div className="pages">
      <Suspense fallback={<Loading />}>
        <section className="grid_layout">
          <Otvet />
        </section>
      </Suspense>
    </div>
  );
};

export default Page;
