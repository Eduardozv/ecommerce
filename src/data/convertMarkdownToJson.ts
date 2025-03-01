import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const convertMarkdownToJson = (markdownDir: string, jsonDir: string) => {
  console.log(`Converting Markdown files from ${markdownDir} to JSON files in ${jsonDir}`);

  // Ensure the JSON directory exists
  if (!fs.existsSync(jsonDir)) {
    console.log(`Creating JSON directory: ${jsonDir}`);
    fs.mkdirSync(jsonDir, { recursive: true });
  }

  // Read all Markdown files from the directory
  const files = fs.readdirSync(markdownDir);
  console.log(`Found ${files.length} Markdown files`);

  files.forEach((file) => {
    try {
      console.log(`Processing file: ${file}`);
      const filePath = path.join(markdownDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      // Combine front matter and content
      const jsonData = {
        ...data,
        description: content.trim(),
      };

      // Write the JSON data to a new file
      const jsonFilePath = path.join(jsonDir, file.replace(/\.md$/, '.json'));
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
      console.log(`Converted ${file} to ${jsonFilePath}`);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });

  console.log(`Converted ${files.length} Markdown files to JSON.`);
};

// Define the directories
const markdownDirs = {
  products: path.join(process.cwd(), 'src/data/products'),
  categories: path.join(process.cwd(), 'src/data/categories'),
  subcategories: path.join(process.cwd(), 'src/data/subcategories'),
};

const jsonDirs = {
  products: path.join(process.cwd(), 'src/data/products'),
  categories: path.join(process.cwd(), 'src/data/categories'),
  subcategories: path.join(process.cwd(), 'src/data/subcategories'),
};

// Convert Markdown to JSON for each directory
Object.keys(markdownDirs).forEach((key) => {
  convertMarkdownToJson(markdownDirs[key], jsonDirs[key]);
});
