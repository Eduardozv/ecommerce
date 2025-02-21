import { NextRequest, NextResponse } from "next/server";
import FashionSelling from "../../../utility/data/fashionselling";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionSelling);
}
