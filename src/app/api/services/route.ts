import { NextRequest, NextResponse } from "next/server";
import Service from "../../../utility/data/services";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Service);
}
