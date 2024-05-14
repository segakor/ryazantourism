import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Где остановиться? - Всё о туризме в Рязани и Рязанской области",
};

async function geTPlaceCard() {
  const response = await fetch(API_URL.GDE_OSTANOVYTSYA);
  return response.json();
}

const Page = async () => {
  const cards = (await geTPlaceCard()) as ResponsePlaceCard;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body data={cards.data} />
      </Suspense>
    </>
  );
};

export default Page;
