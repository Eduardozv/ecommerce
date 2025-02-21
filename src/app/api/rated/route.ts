import { NextRequest, NextResponse } from "next/server";
import Rated from "../../../utility/data/rated";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Rated);
}
