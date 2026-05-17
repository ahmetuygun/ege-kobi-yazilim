import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  HERO_BACKGROUND_IMAGE,
  HERO_BACKGROUND_LEGACY_PNG_PATH,
} from "@/lib/site-assets";

/** `matcher` sabit olmalı — `HERO_BACKGROUND_LEGACY_PNG_PATH` ile aynı yol. */

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === HERO_BACKGROUND_LEGACY_PNG_PATH) {
    const url = request.nextUrl.clone();
    url.pathname = HERO_BACKGROUND_IMAGE;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/images/hero-bg.png",
};
