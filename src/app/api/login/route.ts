import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const res = NextResponse.json({ success: true });
  res.cookies.set("token", `${email}-gbsYGhjsgYbtNHJHhj3jhbGguT`);
  return res;
}
