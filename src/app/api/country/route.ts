import { NextRequest, NextResponse } from "next/server";
import Country from "../../../utility/json/countries.json";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json(Country);
}
