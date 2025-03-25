import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { TLongread } from "@/types/types";
import { Suspense } from "react";
import { API_URL_LONGREAD } from "@/constants/apiUrl";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Реестр туроператоров - Всё о туризме в Рязани и Рязанской области",
};

async function getTemplate(path: string) {
  //TODO: вынести в отдельный хук 
  const response = await fetch(`${API_URL_LONGREAD}/${path}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

const Page = async () => {

  const { bodyText } = (await getTemplate('reestr-turoperatorov')) as TLongread;

  return (
    <Suspense fallback={<Loading />}>
      <Body bodyText={bodyText} />
    </Suspense>
  );
};

export default Page;
