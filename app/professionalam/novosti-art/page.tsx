import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Новости АРТ - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {

  return (
    <>
      <Suspense fallback={<Loading />}>
      </Suspense>
    </>
  );
};

export default Page;
