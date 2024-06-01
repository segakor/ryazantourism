import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { Suspense } from "react";
import { data } from "@/constants/pages/marshruty/organizovannye-marshruty/gidy";

export const metadata: Metadata = {
  title: "Организованные маршруты - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body dataGid={data} />
      </Suspense>
    </>
  );
};

export default Page;
