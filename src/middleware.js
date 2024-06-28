import { NextResponse } from "next/server";

const { match } = require("@formatjs/intl-localematcher");
const Negotiator = require("negotiator");


const locales = ['en-us' , 'en' , 'fa-ir' , 'fa'];

function getLocale(request){
    const negotiatorHeader = {};

    request.headers.forEach((value , key) => (negotiatorHeader[key] = value ));
    const languages = new Negotiator({headers : negotiatorHeader}).languages();

    const defaultLocale = 'fa-ir';
    const locale = match(languages , locales, defaultLocale);

    return locale;
}

export function middleware(request){
    const {pathname} = request.nextUrl;
     
    const pathnameHasLocale = locales.some((locale)=>
       pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if(pathnameHasLocale) return;

    const  locale = getLocale(request);


    return NextResponse.redirect(new URL(
        `/${locale}${pathname.startsWith(`/`) ? "" : "/"}${pathname}`, request.url
        )
    );
}

export const config ={
    matcher:['/((?!api|_next/static|_next/image|favicon.ico).*)']
}


