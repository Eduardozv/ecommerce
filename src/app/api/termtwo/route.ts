import { NextRequest, NextResponse } from "next/server";
import TeamTwo from "../../../utility/data/termtwo";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(TeamTwo);
}
