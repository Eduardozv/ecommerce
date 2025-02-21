import { NextRequest, NextResponse } from "next/server";
import FashionTwoAccessorise from "../../../utility/data/fashiontwoaccessorise";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoAccessorise);
}
