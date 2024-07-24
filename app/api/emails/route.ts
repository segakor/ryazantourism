import { NextResponse } from 'next/server'
import { sendMail } from '@/service/mailSender'

export async function POST(req: Request) {
  try {

    await sendMail('Rostelecom Shop')

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.log(error)
    throw new Error((error as Error).message)
  }
}
