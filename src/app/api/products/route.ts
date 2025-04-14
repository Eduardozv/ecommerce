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
      // Sort by Date, Newest to Oldest
      return [...filteredData].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
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

  const {
    searchTerm = '',
    sortOption = '1',
    page = 1,
    limit = 10,
    selectedGroup = [],
    selectedCategory = [],
    selectedSubCategory = [],
    status = '',
    titleSlug = '',
  } = await req.json();

  // Log all the parameters received
  console.log('Received parameters:', {
    searchTerm, 
    sortOption,
    page,
    limit,
    selectedGroup,
    selectedCategory,
    selectedSubCategory,
    status,
    titleSlug
  });

  const currentPage = parseInt(page as string, 10);
  const itemsPerPage = parseInt(limit as string, 10);

  // Read and parse the JSON files from the products directory
  const productsDir = path.join(process.cwd(), 'src/data/products');
  const files = fs.readdirSync(productsDir).filter(file => file.endsWith('.json'));

  const products = files.map((file) => {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Add titleSlug to each product
    return {
      ...data,
      titleSlug: data.title.toLowerCase().replace(/ /g, '-'),
    };
  });

  let filteredData = products.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategory.includes(item.category)
    );
  }

  if (selectedSubCategory.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedSubCategory.includes(item.subcategory)
    );
  }

  // Filtrar por status si está presente
  if (status) {
    filteredData = filteredData.filter((item) => item.status === status);
  }

  // Filtrar por titleSlug si está presente
  if (titleSlug) {
    filteredData = filteredData.filter((item) => item.titleSlug === titleSlug);
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