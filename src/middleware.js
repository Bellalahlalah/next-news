import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/news/:path*', '/api/:path*'], // กำหนดให้ middleware ทำงานกับ path ที่ต้องการ เช่น news,api ตัวmiddleware จะทำงานเมื่อมีการเรียกใช้งาน path เหล่านี้
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // บล็อกการลบข่าว ถ้าไม่ได้ส่ง header x-admin=true
  if (pathname.startsWith('/api/news') && request.method === 'DELETE') { // ลบข่าวได้เฉพาะ header เป็น x-admin
    const isAdmin = request.headers.get('x-admin') === 'true';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}