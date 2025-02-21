import { NextRequest, NextResponse } from "next/server";
import FashionAccoessories from "../../../utility/data/fashionaccessories";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(FashionAccoessories);
}
