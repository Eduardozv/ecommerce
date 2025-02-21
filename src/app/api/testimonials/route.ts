import { NextRequest, NextResponse } from "next/server";
import Testimonials from "../../../utility/data/testimonials";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Testimonials);
}
