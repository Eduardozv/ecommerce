import { NextRequest, NextResponse } from "next/server";
import Team from "../../../utility/data/team";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Team);
}
