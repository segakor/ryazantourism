import { NextResponse } from "next/server";
import { sendMail } from "@/service/mailSender";
import { TMailBody } from "@/types/types";

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as TMailBody;
    const html = `<div><h2>${json.tour}</h2><ul><li>Ф.И.О: ${json.fio}</li><li>Телефон: ${json.tel}</li><li>Дата: ${json.date}</li><li>Количество людей: ${json.count}</li></ul></div>`;
    await sendMail('Бронирование тура', html);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
