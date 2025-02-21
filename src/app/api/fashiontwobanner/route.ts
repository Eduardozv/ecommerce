import { NextRequest, NextResponse } from "next/server";
import FashionTwoBanner from "../../../utility/data/fashiontwobanner";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoBanner);
}
