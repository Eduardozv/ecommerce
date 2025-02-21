import { NextRequest, NextResponse } from "next/server";
import Fashioncategory from "../../../utility/data/sidebarcategory";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Fashioncategory);
}
