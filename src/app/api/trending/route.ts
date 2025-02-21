import { NextRequest, NextResponse } from "next/server";
import Trending from "../../../utility/data/trending";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Trending);
}
