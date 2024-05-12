import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";
import { Suspense } from "react";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Чем заняться? - Всё о туризме в Рязани и Рязанской области",
};

async function getPlaceCard() {
  const response = await fetch(API_URL.CHEM_ZANYATSYA);
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
