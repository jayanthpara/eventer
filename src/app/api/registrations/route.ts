// src/app/api/registrations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function GET() {
  const keys = await redis.keys('registration:*');
  const all = await Promise.all(keys.map(k => redis.hgetall(k)));
  return NextResponse.json(all);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ success: false, message: 'ID missing' }, { status: 400 });

  await redis.del(`registration:${id}`);
  return NextResponse.json({ success: true });
}
