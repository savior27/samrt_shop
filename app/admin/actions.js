"use server";

import prisma from '../../prisma/db';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

export async function createProduct(formData) {
  try {
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const stock = parseInt(formData.get('stock'));
    const shortDescription = formData.get('shortDescription');
    const fullDescription = formData.get('fullDescription');
    const featured = formData.get('featured') === 'on';
    const status = formData.get('status');
    const imageFile = formData.get('image');

    let imagePath = '/images/products/placeholder.jpg';

    if (imageFile && imageFile.name) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads');
      
      try {
        await fs.access(uploadDir);
      } catch {
        await fs.mkdir(uploadDir, { recursive: true });
      }
      
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      imagePath = `/uploads/${filename}`;
    }

    await prisma.product.create({
      data: {
        name,
        category,
        price,
        stock,
        shortDescription,
        fullDescription,
        image: imagePath,
        featured,
        status,
      },
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');
    return { success: true, message: 'Product added successfully.' };
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, message: 'Failed to add product.' };
  }
}

export async function updateProduct(id, formData) {
  try {
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const stock = parseInt(formData.get('stock'));
    const shortDescription = formData.get('shortDescription');
    const fullDescription = formData.get('fullDescription');
    const featured = formData.get('featured') === 'on';
    const status = formData.get('status');
    const imageFile = formData.get('image');

    const updateData = {
      name,
      category,
      price,
      stock,
      shortDescription,
      fullDescription,
      featured,
      status,
    };

    if (imageFile && imageFile.name) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads');
      
      try {
        await fs.access(uploadDir);
      } catch {
        await fs.mkdir(uploadDir, { recursive: true });
      }
      
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      updateData.image = `/uploads/${filename}`;
    }

    await prisma.product.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath(`/product/${id}`);
    revalidatePath('/');
    return { success: true, message: 'Product updated successfully.' };
  } catch (error) {
    console.error('Error updating product:', error);
    return { success: false, message: 'Failed to update product.' };
  }
}

export async function deleteProduct(id) {
  try {
    await prisma.product.delete({
      where: { id },
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');
    return { success: true, message: 'Product deleted successfully.' };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, message: 'Failed to delete product.' };
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
