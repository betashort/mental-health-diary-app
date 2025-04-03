import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import authConfig from "../auth.config"
import NextAuth from "next-auth";


const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req: NextRequest) {
  const session = await auth();

  if(!session) {
    console.log("No session found, redirecting to login page.");
    return NextResponse.redirect(new URL("/", req.url));
  }
  console.log("Session.");
  return NextResponse.next();
})

export const config = {
    matcher: ["/diary:path*",
      "/mental-report:path*",
      "/profile:path*",
      "/sns:path*",
    ],
  }