import { API_URL_DETAILS_SINGLY_ROUTES } from "@/constants/apiUrl";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";
import { ResponseSinglyRoutesDetails, TSinglyRoutes } from "@/types/types";
import { WrapperGreyPages } from "@/components/wrapper";
import { scenarii } from "@/constants/pages/organizovannye-marshruty/scenarii";

type Props = {
  params: { id: string };
};

async function getSinglyRoutesDetails(id: string) {
  const data = scenarii.find((item) => item.id === Number(id));
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = await getSinglyRoutesDetails(id);

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = await getSinglyRoutesDetails(params.id) as TSinglyRoutes;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl={data?.imgUrl || "/heroPages/ty-s-mestnym/cit.jpg"}
          title={data.title}
          desc=""
          classNameImage="brightness-50"
        />
        <Body data={data.template} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
