import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('role')?.value

  // ✅ Allow admin login page ALWAYS
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // ✅ Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!token || role !== 'ADMIN') {
      return NextResponse.redirect(
        new URL('/admin/login', request.url)
      )
    }
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/admin/:path*'],
}
