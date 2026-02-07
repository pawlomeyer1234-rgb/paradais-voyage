import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/dubai") {
    return NextResponse.redirect(
      new URL("/get-a-jet-quote?destination=Dubai", request.url),
      301
    );
  }
  if (pathname === "/maldives") {
    return NextResponse.redirect(
      new URL("/get-a-jet-quote?destination=Maldives", request.url),
      301
    );
  }

  return NextResponse.next();
}
