import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

// Function to sort the data based on the sort option
function sortData(filteredData: any[], sortOption: string) {
  switch (sortOption) {
    case "1":
      // Sort by Position (implement custom logic if necessary)
      return filteredData;
    case "2":
      // Sort by Relevance (implement custom logic if necessary)
      return filteredData;
    case "3":
      // Sort by Name, A to Z
      return [...filteredData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    case "4":
      // Sort by Name, Z to A
      return [...filteredData].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    case "5":
      // Sort by Price, low to high
      return [...filteredData].sort((a, b) => a.newPrice - b.newPrice);
    case "6":
      // Sort by Price, high to low
      return [...filteredData].sort((a, b) => b.newPrice - a.newPrice);
    default:
      return filteredData;
  }
}

export async function POST(req: NextRequest) {
  console.log('START fetch products');

  const { searchTerm = '', sortOption = '1', page = 1, limit = 10, selectedCategory = [] } = await req.json();

  const currentPage = parseInt(page as string, 10);
  const itemsPerPage = parseInt(limit as string, 10);

  // Read and parse the JSON files from the products directory
  const productsDir = path.join(process.cwd(), 'src/data/products');
  const files = fs.readdirSync(productsDir).filter(file => file.endsWith('.json'));

  console.log('productsDir', productsDir);

  const products = files.map((file) => {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });

  let filteredData = products.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategory.includes(item.category)
    );
  }

  const sortedData = sortData(filteredData, sortOption);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return NextResponse.json({
    data: paginatedData,
    totalItems: sortedData.length,
    currentPage,
    totalPages: Math.ceil(sortedData.length / itemsPerPage),
  });
}