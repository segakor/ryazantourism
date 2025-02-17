import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { TNews } from "@/types/types";
import { WrapperGreyPages } from "@/components/wrapper";
import { redirect } from "next/navigation";
import { API_URL_NOVOSTI_ART } from "@/constants/apiUrl";

type Props = {
  params: { id: string };
};

async function getNewsDetail(id: string) {
  const response = await fetch(
    `${API_URL_NOVOSTI_ART}/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    redirect("/not-found");
  }
  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = (await getNewsDetail(params.id)) as TNews;

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getNewsDetail(params.id)) as TNews;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages className="md:pt-48 pt-36">
        <Body data={data} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
