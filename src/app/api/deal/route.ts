import { NextRequest, NextResponse } from "next/server";
import Deal from "../../../utility/data/deal";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Deal);
}
