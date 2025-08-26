import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  console.log('New lead:', payload);
  return NextResponse.json({ ok: true });
}
