import { NextRequest, NextResponse } from "next/server";
import Category from "../../../utility/data/category";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Category);
}
