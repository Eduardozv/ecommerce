import { NextRequest, NextResponse } from "next/server";
import Wishlist from "../../../utility/data/wishlist";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Wishlist);
}
