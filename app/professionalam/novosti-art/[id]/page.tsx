import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { news } from "@/constants/pages/professionalam/novosti-art";
import { TNewsArt } from "@/types/types";
import { WrapperGreyPages } from "@/components/wrapper";

type Props = {
  params: { id: string };
};

async function getNews(id: string) {
  const data = news.find((item) => item.id === Number(id));
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = news.find((item) => item.id === Number(id));

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getNews(params.id)) as TNewsArt;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages className="md:pt-48 pt-36">
        <Body data={data} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
