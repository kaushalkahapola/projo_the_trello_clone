import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req) && auth().userId) {
    let path = "/select-org";
    if (auth().orgId) {
      path = `/organizations/${auth().orgId}`;
    }
    const orgSelection = new URL(path, req.url)
    return NextResponse.redirect(orgSelection.toString());
  }

  if (!isPublicRoute(req)) auth().protect();

  if(auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org") {
    return NextResponse.redirect(new URL("/select-org",req.url).toString());
  }

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
