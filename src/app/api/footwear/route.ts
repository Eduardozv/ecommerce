import { NextRequest, NextResponse } from "next/server";
import Footwear from "../../../utility/data/footwear";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Footwear);
}
