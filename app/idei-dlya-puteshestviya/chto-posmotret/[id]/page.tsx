import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import { TArchCard } from "@/types/types";
import Body from "./body";
import { WrapperGreyPages } from "@/components/wrapper";
import { redirect } from "next/navigation";
import { API_URL_CHTO_POSMOTRET } from "@/constants/apiUrl";

type Props = {
  params: { id: string };
};

async function getDetailsChtoPosmotret(id: string) {
  const response = await fetch(
    `${API_URL_CHTO_POSMOTRET}/${id}`,
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

  const data = (await getDetailsChtoPosmotret(id)) as TArchCard;

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getDetailsChtoPosmotret(params.id)) as TArchCard;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
          title={data.title}
          desc=""
        />
        <Body data={data.template} sideBarText={data.contacts} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;
