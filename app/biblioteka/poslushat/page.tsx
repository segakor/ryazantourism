import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { API_URL_POSLUSHAT } from "@/constants/apiUrl";
import { redirect } from "next/navigation";
import { TBibliotekaPoslushat, TResponseTableData } from "@/types/types";

export const metadata: Metadata = {
  title: "Послушать - Всё о туризме в Рязани и Рязанской области",
};

async function getPoslushat() {
  const response = await fetch(API_URL_POSLUSHAT, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Page = async () => {
  const { rows } = (await getPoslushat()) as TResponseTableData<TBibliotekaPoslushat[]>;

  return (
    <Suspense fallback={<Loading />}>
      <Body data={rows} />
    </Suspense>
  );
};

export default Page;
