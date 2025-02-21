import { NextRequest, NextResponse } from "next/server";
import FashionClothes from "../../../utility/data/fashionclothe";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionClothes);
}
