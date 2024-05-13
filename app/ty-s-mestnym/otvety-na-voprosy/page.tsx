import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Ответы на вопросы - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Body data={cards.data} /> */}
      </Suspense>
    </>
  );
};

export default Page;
