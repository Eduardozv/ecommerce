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
    sortOption = '3',
    page = 1,
    limit = 10,
    titleSlug = '',
  } = await req.json();

  // Log all the parameters received
  console.log('Catalogs - Received parameters:', {
    searchTerm, 
    sortOption,
    page,
    limit,
    titleSlug
  });

  const currentPage = parseInt(page as string, 10);
  const itemsPerPage = parseInt(limit as string, 10);

  // Read and parse the JSON files from the catalogs directory
  const catalogsDir = path.join(process.cwd(), 'src/data/catalogs');
  const files = fs.readdirSync(catalogsDir).filter(file => file.endsWith('.json'));

  const catalogs = files.map((file) => {
    const filePath = path.join(catalogsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Add titleSlug to each blog
    return {
      ...data,
      titleSlug: data.title.toLowerCase().replace(/ /g, '-'),
    };
  });

  let filteredData = catalogs.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

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