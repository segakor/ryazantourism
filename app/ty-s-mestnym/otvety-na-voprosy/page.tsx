import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { Suspense } from "react";
import { API_URL_ANSWER } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Ответы на вопросы - Всё о туризме в Рязани и Рязанской области",
};

async function getAnswers() {
  const response = await fetch(
    API_URL_ANSWER, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) {
    return { rows: [] }
  }

  return response.json()
}

const Page = async () => {
  const answers = await getAnswers();

  return (
    <Suspense fallback={<Loading />}>
      <Body data={answers.rows} />
    </Suspense>
  );
};

export default Page;
