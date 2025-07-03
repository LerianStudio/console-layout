import { NextResponse } from "next/server";

export async function GET() {
  // Simulate a short delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  return NextResponse.json({ version: "2.0.0-test" });
}
