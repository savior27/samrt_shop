import { getProducts } from '../../admin/actions';
import ProductDetailsClient from './ProductDetailsClient';
import { notFound } from 'next/navigation';

export default async function ProductDetails({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const products = await getProducts();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return notFound();
  }

  // Related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailsClient product={product} relatedProducts={relatedProducts} />;
}
