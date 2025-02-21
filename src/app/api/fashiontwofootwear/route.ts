import { NextRequest, NextResponse } from "next/server";
import FashionTwoFootwear from "../../../utility/data/fashiontwofootwear";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoFootwear);
}
