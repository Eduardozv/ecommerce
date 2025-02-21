import { NextRequest, NextResponse } from "next/server";
import PolicyOne from "../../../utility/data/policytwo";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(PolicyOne);
}
