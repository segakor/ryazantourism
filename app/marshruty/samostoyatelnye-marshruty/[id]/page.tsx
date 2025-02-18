import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";
import { TSamostoyatelnyeMarshruty } from "@/types/types";
import { WrapperGreyPages } from "@/components/wrapper";
import { API_URL_SAM_MARSH } from "@/constants/apiUrl";
import { redirect } from "next/navigation";
import { getImageUrl } from "@/utils/getImageUrl";

type Props = {
  params: { id: string };
};

async function getSamMarshDetail(id: string) {
  const response = await fetch(
    `${API_URL_SAM_MARSH}/${id}`,
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
  const id = params.id;

  const data = await getSamMarshDetail(id) as TSamostoyatelnyeMarshruty;

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = await getSamMarshDetail(params.id) as TSamostoyatelnyeMarshruty;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl={getImageUrl(data.storage_image.imagePath) || "/heroPages/ty-s-mestnym/cit.jpg"}
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
