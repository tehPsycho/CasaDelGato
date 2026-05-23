import { Product } from '@/types/product';

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  material?: string;
  era?: string;
  q?: string;
}

export function filterProducts(items: Product[], filters: ProductFilters) {
  return items.filter((p) => {
    const queryMatch = !filters.q || `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(filters.q.toLowerCase());
    const categoryMatch = !filters.category || p.category === filters.category;
    const conditionMatch = !filters.condition || p.condition === filters.condition;
    const materialMatch = !filters.material || p.material === filters.material;
    const eraMatch = !filters.era || p.era === filters.era;
    const minMatch = filters.minPrice === undefined || p.price >= filters.minPrice;
    const maxMatch = filters.maxPrice === undefined || p.price <= filters.maxPrice;

    return queryMatch && categoryMatch && conditionMatch && materialMatch && eraMatch && minMatch && maxMatch;
  });
}
