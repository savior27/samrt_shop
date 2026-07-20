import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';
import { products } from './lib/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

async function walk(dir) {
  let results = [];
  try {
    const list = await fs.readdir(dir);
    for (let file of list) {
      file = path.join(dir, file);
      const stat = await fs.stat(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(await walk(file));
      } else {
        results.push(file);
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') console.error('Error walking directory', dir, error);
  }
  return results;
}

async function main() {
  console.log('Fetching products from database...');
  const dbProducts = await prisma.product.findMany();
  
  const inUsePaths = new Set();
  
  // From DB
  dbProducts.forEach(p => {
    if (p.image) inUsePaths.add(p.image);
  });
  
  // From static products (seed data)
  products.forEach(p => {
    if (p.image) inUsePaths.add(p.image);
  });
  
  // Also HomeClient uses this image statically
  inUsePaths.add('/images/products/all.jpg');
  
  // Allow placeholder
  inUsePaths.add('/images/products/placeholder.jpg');

  console.log(`Found ${inUsePaths.size} unique image paths in use.`);

  const publicDir = path.join(__dirname, 'public');
  
  // Collect all files in public/images and public/uploads
  const imagesDir = path.join(publicDir, 'images');
  const uploadsDir = path.join(publicDir, 'uploads');
  
  const allImageFiles = await walk(imagesDir);
  const allUploadFiles = await walk(uploadsDir);
  const allFiles = [...allImageFiles, ...allUploadFiles];
  
  let deletedCount = 0;

  for (const file of allFiles) {
    // Normalize path for comparison. file is absolute.
    // We want the relative path from public/, starting with /
    const relativePath = '/' + path.relative(publicDir, file).replace(/\\/g, '/');
    
    if (!inUsePaths.has(relativePath)) {
      console.log(`Deleting unused file: ${relativePath}`);
      await fs.unlink(file);
      deletedCount++;
    }
  }
  
  console.log(`Cleanup complete. Deleted ${deletedCount} unused files.`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
