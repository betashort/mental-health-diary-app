import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  console.log(start, end);
  
  return NextResponse.json([
    {
      id: "1",
      title: "Event1",
      start: new Date("2025-1-1"),
      description: "Event1 Description",
      allDay: true,
    },
    {
      id: "2",
      title: "Event2",
      start: new Date("2025-01-02"),
      description: "Event2 Description",
      allDay: true,
    },
    {
      id: "3",
      title: "Event3",
      start: new Date("2025-01-03"),
      description: "Event3 Description",
      allDay: true,
    },]
);
}

export async function POST(request:NextRequest){

  const body = await request.json();
  return NextResponse.json(
    body
  );
}