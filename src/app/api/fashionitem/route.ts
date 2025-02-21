import { NextRequest, NextResponse } from "next/server";
import FashionItem from "../../../utility/data/fashionitem";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionItem);
}
