import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const subcategoriesDir = path.join(process.cwd(), 'src/data/subcategories');
    const files = fs.readdirSync(subcategoriesDir).filter(file => file.endsWith('.json'));

    const subcategories = files.map((file) => {
      const filePath = path.join(subcategoriesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    return NextResponse.json(subcategories);
  } catch (error) {
    console.error('Error reading subcategories files:', error);
    return NextResponse.json({ error: 'Failed to load subcategories' }, { status: 500 });
  }
}