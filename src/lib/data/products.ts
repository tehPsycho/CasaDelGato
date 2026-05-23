import products from '@/../data/mock-listings.json';
import { Product } from '@/types/product';

export interface ProductRepository {
  getAll(): Product[];
  getById(id: string): Product | null;
  getRelated(product: Product, limit?: number): Product[];
}

export class MockProductRepository implements ProductRepository {
  private items = products as Product[];

  getAll(): Product[] {
    return this.items;
  }

  getById(id: string): Product | null {
    return this.items.find((p) => p.id === id) ?? null;
  }

  getRelated(product: Product, limit = 4): Product[] {
    return this.items
      .filter((p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t))))
      .slice(0, limit);
  }
}

export const productRepository: ProductRepository = new MockProductRepository();
