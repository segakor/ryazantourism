import { API_URL_DETAILS_SINGLY_ROUTES } from "@/constants/apiUrl";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";
import { ResponseSinglyRoutesDetails } from "@/types/types";
import { WrapperGreyPages } from "@/components/wrapper";

type Props = {
  params: { id: string };
};

async function getSinglyRoutesDetails(id: string) {
  const response = await fetch(API_URL_DETAILS_SINGLY_ROUTES + "/" + id);
  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = await getSinglyRoutesDetails(id);

  return {
    title: `${data.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = await getSinglyRoutesDetails(params.id) as ResponseSinglyRoutesDetails;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl={data?.images[0]?.url || "/heroPages/ty-s-mestnym/cit.jpg"}
          title={data.title}
          desc=""
        />
        <Body data={data} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
