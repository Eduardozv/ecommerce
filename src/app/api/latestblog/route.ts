import { NextRequest, NextResponse } from "next/server";
import LatestBlog from "../../../utility/data/latestblog";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(LatestBlog);
}
