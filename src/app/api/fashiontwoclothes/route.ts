import { NextRequest, NextResponse } from "next/server";
import FashionTwoClothe from "../../../utility/data/fashiontwocloths";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoClothe);
}
