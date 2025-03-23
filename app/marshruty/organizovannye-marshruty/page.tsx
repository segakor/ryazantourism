import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { Suspense } from "react";
import { Hero } from "./Hero/Hero";
import { API_URL_GID } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Организованные маршруты - Всё о туризме в Рязани и Рязанской области",
};

async function getGid() {
  const response = await fetch(API_URL_GID, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

const Page = async () => {
  const gid = await getGid();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
        <Body dataGid={gid.rows} />
      </Suspense>
    </>
  );
};

export default Page;
