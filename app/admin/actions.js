"use server";

import prisma from '../../prisma/db';
import { revalidatePath } from 'next/cache';

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

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price,
        stock,
        shortDescription,
        fullDescription,
        image: "/images/products/placeholder.jpg",
        featured,
        status,
      },
    });

    console.log("Product created:", product);

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');

    return {
      success: true,
      message: 'Product added successfully.'
    };

  } catch (error) {
    console.error('CREATE PRODUCT ERROR:', error);

    return {
      success: false,
      message: error.message
    };
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

    await prisma.product.update({
      where: { id },
      data: {
        name,
        category,
        price,
        stock,
        shortDescription,
        fullDescription,
        featured,
        status,
      },
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath(`/product/${id}`);
    revalidatePath('/');

    return {
      success: true,
      message: 'Product updated successfully.'
    };

  } catch (error) {
    console.error('UPDATE PRODUCT ERROR:', error);

    return {
      success: false,
      message: error.message
    };
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

    return {
      success: true,
      message: 'Product deleted successfully.'
    };

  } catch (error) {
    console.error('DELETE PRODUCT ERROR:', error);

    return {
      success: false,
      message: error.message
    };
  }
}


export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return products;

  } catch (error) {
    console.error('GET PRODUCTS ERROR:', error);

    return [];
  }
}