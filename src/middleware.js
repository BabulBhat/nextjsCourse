import { NextResponse } from "next/server";
export function middleware(request) {
    //console.log('middleware');
    // if(request.nextUrl.pathname != "/login"){
    return NextResponse.redirect(new URL("/login", request.url))
    // }

}

// NOTE: particular kono page redirect korty hola ai vabay kortay hoby, path diya.
export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"]
}