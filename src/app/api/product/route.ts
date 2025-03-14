import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const titleSlug = searchParams.get('titleSlug');

  if (!titleSlug) {
    return NextResponse.json({ error: 'Title slug is required' }, { status: 400 });
  }

  // Read and parse the JSON files from the products directory
  const productsDir = path.join(process.cwd(), 'src/data/products');
  const files = fs.readdirSync(productsDir).filter(file => file.endsWith('.json'));

  const products = files.map((file) => {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });

  const product = products.find(item => item.titleSlug === titleSlug);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}