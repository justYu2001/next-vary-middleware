import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const response = NextResponse.next();

    response.headers.append('my-custom-header', 'test');
    response.headers.append('vary', 'Accept-Language');

    return response;
}

export const config = {
    matcher: '/',
}