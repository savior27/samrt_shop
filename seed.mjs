import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { products } from './lib/data/products.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with initial products...');
  for (const p of products) {
    await prisma.product.create({
      data: {
        name: p.name,
        category: p.category,
        price: p.price || "Contact Us",
        stock: p.stock || 10,
        shortDescription: p.description,
        fullDescription: p.description,
        image: p.image,
        featured: p.isFeatured || false,
        status: p.availability || 'In Stock',
      }
    });
  }
  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
