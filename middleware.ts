import { NextRequest, NextResponse } from "next/server"
import cookie from "cookie";


export async function middleware(req: NextRequest){
    const cookies = cookie.parse(req.headers.get("Cookie") || "");
    const token = cookies.currentUser;
    const tokenFromOauth = req.cookies.get("currentUser");
    const role = token ? JSON.parse(token).role : tokenFromOauth ? JSON.parse(String(tokenFromOauth)).role : null;

    if(//!token &&
        //!tokenFromOauth &&
        req.nextUrl.pathname.startsWith('/home')
    ){
        console.log("cant enter home ");
        return NextResponse.redirect(new URL("/login", req.url));
    }


    if (req.nextUrl.pathname.startsWith("/oauth")) {
        const oAuthToken = req.nextUrl.searchParams.get("token") || "";
        const oAuthid = req.nextUrl.searchParams.get("id") || ""
        const oAuthEmail = req.nextUrl.searchParams.get("email") || ""
    
        
        //console.log(tokenData);
    
        const current = {
          id: oAuthid,
          email:oAuthEmail,
          token:oAuthToken
        }
    
        //console.log(current)
    
        if (oAuthToken.length > 0) {
          const response = NextResponse.redirect(new URL("/auth/login", req.url));
    
          response.cookies.set({
            name: "currentUser",
            value: JSON.stringify(current),
            maxAge: 60 * 60 * 24 * 7,
          });
          return response;
        }
      }

      if((!token || role !== 'admin') && req.nextUrl.pathname.startsWith('/admin')){
        console.log("Unauthorized access to admin route");
        return NextResponse.redirect(new URL("/", req.url));
    }

    
      return NextResponse.next()
}