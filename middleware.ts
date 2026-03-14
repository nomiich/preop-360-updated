import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

const authRoutes = ["/signin", "/signup"];

const protectedRoutes = [
  "/",
  "/dashboard",
  "/calendar",
  "/profile",
  "/medication-management",
  "/labs-to-get",
  "/subscription",
  "/preoperative-assessment",
];

function isProtectedPath(pathname: string) {
  return protectedRoutes.some((route) => {
    if (route === "/") {
      return pathname === "/" || pathname.startsWith("/dashboard");
    }
    return pathname === route || pathname.startsWith(`${route}/`);
  });
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check Supabase session (for OAuth and any flows using Supabase cookies)
  const supabase = createMiddlewareClient({ req: request, res: response });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Also allow our custom auth cookie (set by email/password API)
  const hasCustomToken = request.cookies.get("auth_token")?.value;

  const isLoggedIn = !!session || !!hasCustomToken;

  console.log("is logged in =>", isLoggedIn);
  

  const { pathname } = request.nextUrl;
  const isAuthRoute = authRoutes.includes(pathname);

  // Block protected pages when not logged in
  if (!isLoggedIn && isProtectedPath(pathname)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/signin";
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Block auth pages (signin/signup) when already logged in
  if (isLoggedIn && isAuthRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/calendar/:path*",
    "/profile/:path*",
    "/medication-management/:path*",
    "/labs-to-get/:path*",
    "/subscription/:path*",
    "/preoperative-assessment/:path*",
    "/signin",
    "/signup",
  ],
};

