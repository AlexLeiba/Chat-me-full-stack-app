import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

export function middleware(request) {
  console.log('Middleware triggered for:', request.nextUrl.pathname);
  const token = request.cookies.get('chat-me-token'); // Retrieve the token from cookies
  console.log('🚀 ~ middleware ~ token:', token);

  //   const authPages = ['/signin', '/signup']; // Routes for auth pages
  //   const dashboardPages = [
  //     '/dashboard',
  //     '/dashboard/profile',
  //     '/dashboard/settings',
  //   ]; // Routes for protected pages

  //   const { pathname } = request.nextUrl;

  //   // 1. Redirect logged-in users away from auth pages
  //   if (token && authPages.includes(pathname)) {
  //     return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect to dashboard
  //   }

  //   // 2. Redirect guests (no token) away from protected pages
  //   if (
  //     !token &&
  //     dashboardPages.some((protectedPath) => pathname.startsWith(protectedPath))
  //   ) {
  //     return NextResponse.redirect(new URL('/signin', request.url)); // Redirect to login
  //   }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure middleware to match specific routes
export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/dashboard/:path*', // Matches all dashboard routes
    '/dashboard/profile/:path*', // Matches specific profile paths if needed
  ],
};
