export type ProductCondition = 'Used' | 'Refurbished' | 'For parts' | 'New old stock';

export interface Product {
  id: string;
  ebayItemId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  condition: ProductCondition;
  shipping: string;
  material: string;
  era: string;
  ebayUrl: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
