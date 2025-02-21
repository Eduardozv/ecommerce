import { NextRequest, NextResponse } from "next/server";
import accessorise from "../../../utility/data/accessorise";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(accessorise);
}
