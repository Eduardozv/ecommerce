import { NextRequest, NextResponse } from "next/server";
import FashionTwoBlog from "../../../utility/data/fashiontwoblog";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoBlog);
}
