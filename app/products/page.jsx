import { Suspense } from 'react';
import { getProducts } from '../admin/actions';
import ProductsClient from './ProductsClient';

export default async function Products() {
  const products = await getProducts();
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading products...</div>}>
      <ProductsClient initialProducts={products} />
    </Suspense>
  );
}
