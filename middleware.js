import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18Config";

export function middleware( request) {
    return i18nRouter(request, i18nConfig) ;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/en', '/(ar|en)/:path*']
  };