import { ProductsExplorer } from './products-explorer';
import { productRepository } from '@/lib/data/products';

export default function ProductsPage() {
  const products = productRepository.getAll();
  return <ProductsExplorer products={products} />;
}
