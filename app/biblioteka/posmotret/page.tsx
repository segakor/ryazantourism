import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { API_URL_POSMOTRET } from "@/constants/apiUrl";
import { redirect } from "next/navigation";
import { TBibliotekaPosmotret, TResponseTableData } from "@/types/types";

export const metadata: Metadata = {
  title: "Посмотреть - Всё о туризме в Рязани и Рязанской области",
};

async function getPosmotret() {
  const response = await fetch(API_URL_POSMOTRET, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Page = async () => {
  const { rows } = (await getPosmotret()) as TResponseTableData<TBibliotekaPosmotret[]>;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body data={rows} />
      </Suspense>
    </>
  );
};

export default Page;
