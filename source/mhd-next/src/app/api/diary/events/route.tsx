import { IEventData } from "@/interface/diary";
import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  
  if (start === null || end === null){
    return NextResponse.json({ message: "Bad request" }, { status: 500 })
  }

  try {
    await prisma.$connect();
    const events = await prisma.diary_event.findMany({
      where: {
        start:{
        gte: new Date(start),
        lt: new Date(end),
        }
      },
      select: {
        id: true,
        title: true,
        start: true,
        description: true,
        allDay: true,
      },
    });
    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(request: NextRequest) {
  const body: IEventData = await request.json();

  try {
    await prisma.$connect();
    await prisma.diary_event.create({ data: body });
    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
