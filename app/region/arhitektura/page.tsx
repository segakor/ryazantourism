import { API_URL_LONGREAD } from "@/constants/apiUrl";
import { TLongread } from "@/types/types";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import Body from "./body";

export const metadata: Metadata = {
  title: "Архитектура - Всё о туризме в Рязани и Рязанской области",
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

const Arhitektura = async () => {
  const { bodyText } = (await getTemplate('arhitektura')) as TLongread;

  return (
    <Suspense fallback={<Loading />}>
      <Body bodyText={bodyText} />
    </Suspense>
  );
};

export default Arhitektura;
