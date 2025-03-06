import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const productsDir = path.join(process.cwd(), 'src/data/products');
    const files = fs.readdirSync(productsDir).filter(file => file.endsWith('.json'));

    const products = files.map((file) => {
      const filePath = path.join(productsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading products files:', error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
