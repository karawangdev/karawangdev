import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Get the hostname and protocol
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';
    const proto = request.headers.get('x-forwarded-proto');

    // Force HTTPS redirect (for production)
    if (process.env.NODE_ENV === 'production' && proto === 'http') {
        url.protocol = 'https:';
        return NextResponse.redirect(url);
    }

    // Create response
    const response = NextResponse.next();

    // ✅ STRONG HSTS POLICY
    response.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload' // 1 year
    );

    // ✅ ADDITIONAL SECURITY HEADERS
    response.headers.set(
        'X-Frame-Options',
        'DENY'
    );

    response.headers.set(
        'X-Content-Type-Options',
        'nosniff'
    );

    response.headers.set(
        'X-XSS-Protection',
        '1; mode=block'
    );

    response.headers.set(
        'Referrer-Policy',
        'strict-origin-when-cross-origin'
    );

    // ✅ CONTENT SECURITY POLICY
    response.headers.set(
        'Content-Security-Policy',
        `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: https: blob:;
            connect-src 'self' https://www.google-analytics.com https://vercel.live wss:;
            frame-src 'self' https://www.youtube.com https://www.google.com;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            upgrade-insecure-requests;
        `.replace(/\s+/g, ' ').trim()
    );

    // ✅ PERMISSIONS POLICY
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()'
    );

    return response;
}

// ✅ CONFIGURE MIDDLEWARE MATCHER
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};