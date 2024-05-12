import Body from "./body";
import type { Metadata } from "next";
import { API_URL } from "@/constants/apiUrl";
import { ResponsePlaceCard } from "@/types/types";
import Loading from "./loading";
import Layout from "./layout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Где остановиться? - Всё о туризме в Рязани и Рязанской области",
};

async function getPlaceCard() {
  const response = await fetch(API_URL.GDE_OSTANOVYTSYA);
  return response.json();
}

const Page = async () => {
  const cards = (await getPlaceCard()) as ResponsePlaceCard;

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Body data={cards.data} />
      </Suspense>
    </Layout>
  );
};

export default Page;
