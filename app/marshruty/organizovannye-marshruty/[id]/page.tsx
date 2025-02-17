import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { TOrganizovannyeMarshruty } from "@/types/types";
import { HeroPage } from "@/components/modules/HeroPage";
import { WrapperGreyPages } from "@/components/wrapper";
import { redirect } from "next/navigation";
import { getImageUrl } from "@/utils/getImageUrl";
import { API_URL_ORG_MARSH } from "@/constants/apiUrl";

type Props = {
  params: { id: string };
};


async function getEventCard(id: string) {
  const response = await fetch(
    `${API_URL_ORG_MARSH}/${id}`,
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
  const data = (await getEventCard(params.id)) as TOrganizovannyeMarshruty;

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getEventCard(params.id)) as TOrganizovannyeMarshruty;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl={getImageUrl(data.storage_image.imagePath) || "/heroPages/ty-s-mestnym/cit.jpg"}
          title={data.title}
          desc=""
          classNameImage="brightness-50"
        />
        <Body data={data} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
