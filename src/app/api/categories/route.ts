import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  console.log('POST /api/categories');
  try {
    const categoriesDir = path.join(process.cwd(), 'src/data/categories');
    const files = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.json'));

    const categories = files.map((file) => {
      const filePath = path.join(categoriesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    console.log('Categories:', categories);
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error reading categories files:', error);
    return NextResponse.json({ error: 'Failed to load categories' }, { status: 500 });
  }
}