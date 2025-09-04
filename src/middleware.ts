import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const isAdminRoute = (url: string) => url.startsWith("/admin")  
const isSuperAdminRoute = (url: string) => url.startsWith("/superadmin")
const isStaffRoute = (url: string) => url.startsWith("/staff")
const isTenantRoute = (url: string) => url.startsWith("/tenant")



const isPublicRoute = (url: string) => {
  const publicRoutes = ["/login", "/signup", "/about", "/contact"];
  return publicRoutes.includes(url);
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  

  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("MIDDLEWARE TOKEN:", token);

 

  if (
    isPublicRoute(path) &&
    token
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
