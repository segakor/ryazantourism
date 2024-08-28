import { NextResponse } from "next/server";
import { sendMail } from "@/service/mailSender";
import { TMailBody } from "@/types/types";

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as TMailBody;
    const bodyMail = {
      ФИО: json.fio,
      Телефон: json.tel,
      Дата: json.date,
      Колличество: json.count,
    };
    await sendMail(json.tour, JSON.stringify(bodyMail));

    return NextResponse.json({ status: 200 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
