import { NextRequest, NextResponse } from "next/server";
import product from "../../../utility/data/productall";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(product);
}
