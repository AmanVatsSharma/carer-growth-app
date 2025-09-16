import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the request is for the dashboard
  if (pathname.startsWith('/dashboard')) {
    // Check for password in cookies
    const passwordCookie = request.cookies.get('dashboard-password');
    
    // Simple password check - you can change this password
    const correctPassword = 'admin123'; // Change this to your desired password
    
    if (!passwordCookie || passwordCookie.value !== correctPassword) {
      // Redirect to password page if not authenticated
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};