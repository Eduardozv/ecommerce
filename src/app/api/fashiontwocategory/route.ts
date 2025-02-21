import { NextRequest, NextResponse } from "next/server";
import FashionTwoCategory from "../../../utility/data/fashioncategory";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoCategory);
}
