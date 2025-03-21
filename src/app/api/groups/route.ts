import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const groupsDir = path.join(process.cwd(), 'src/data/groups');
    const files = fs.readdirSync(groupsDir).filter(file => file.endsWith('.json'));

    const groups = files.map((file) => {
      const filePath = path.join(groupsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    return NextResponse.json(groups);
  } catch (error) {
    console.error('Error reading groups files:', error);
    return NextResponse.json({ error: 'Failed to load groups' }, { status: 500 });
  }
}