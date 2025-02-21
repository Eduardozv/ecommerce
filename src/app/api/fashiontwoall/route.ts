import { NextRequest, NextResponse } from "next/server";
import FashionTwoAll from "../../../utility/data/fashiontwoall";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionTwoAll);
}
