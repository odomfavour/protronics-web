import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findState } from './app/utils/helpers';

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/location')) {
		const state = findState(request.nextUrl.pathname.split('/').pop() || '');

		if (request.nextUrl.pathname !== `/location/${state}`) {
			return NextResponse.redirect(new URL(`/location/${state}`, request.url));
		}
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/location/:path*',
};
