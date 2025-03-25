import { API_URL_LONGREAD } from "@/constants/apiUrl";
import { TLongread } from "@/types/types";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Body from "./body";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Кухня рязанского края  - Всё о туризме в Рязани и Рязанской области",
};

async function getTemplate(path: string) {
  const response = await fetch(`${API_URL_LONGREAD}/${path}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Kuhnya = async () => {
  const { bodyText } = (await getTemplate('kuhnya-ryazanskogo-kraya')) as TLongread;

  return (
    <Suspense fallback={<Loading />}>
      <Body bodyText={bodyText} />
    </Suspense>
  );
};

export default Kuhnya;
