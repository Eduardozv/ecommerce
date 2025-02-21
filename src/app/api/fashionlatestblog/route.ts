import { NextRequest, NextResponse } from "next/server";
import FashionBlog from "../../../utility/data/fashionblog";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionBlog);
}
