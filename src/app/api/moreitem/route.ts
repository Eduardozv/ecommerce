import { NextRequest, NextResponse } from "next/server";
import MoreItem from "../../../utility/data/moreitem";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(MoreItem);
}
