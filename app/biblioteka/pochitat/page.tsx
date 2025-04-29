import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { API_URL_POCHITAT } from "@/constants/apiUrl";
import { TBibliotekaPochitat, TResponseTableData } from "@/types/types";

export const metadata: Metadata = {
  title: "Почитать - Всё о туризме в Рязани и Рязанской области",
};

async function getPochitat() {
  const response = await fetch(API_URL_POCHITAT, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Page = async () => {
  const { rows } = (await getPochitat()) as TResponseTableData<TBibliotekaPochitat[]>;
  return (
    <Suspense fallback={<Loading />}>
      <Body data={rows || []} />
    </Suspense>
  );
};

export default Page;
