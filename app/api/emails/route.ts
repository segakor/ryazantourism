import { NextResponse } from "next/server";
import { sendMail } from "@/service/mailSender";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const bodyMail = {
      ФИО: json.fio,
      Телефон: json.tel,
      Дата: json.date,
      Колличество: json.count,
    };
    await sendMail("Бронирование Рязань+", JSON.stringify(bodyMail));

    return NextResponse.json({ status: 200 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
