import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { API_URL_PROMTURIZM } from "@/constants/apiUrl";
import { redirect } from "next/navigation";
import { TPromturizm, TResponseTableData } from "@/types/types";

export const metadata: Metadata = {
  title:
    "Промышленный туризм Рязанской области - Всё о туризме в Рязани и Рязанской области",
};

async function getPromturizm() {
  const response = await fetch(API_URL_PROMTURIZM, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Page = async () => {
  const { rows } = (await getPromturizm()) as TResponseTableData<TPromturizm[]>;
  return (
    <Suspense fallback={<Loading />}>
      <Body data={rows} />
    </Suspense>
  );
};

export default Page;
