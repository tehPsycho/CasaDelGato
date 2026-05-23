'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { filterProducts } from '@/lib/filter';
import { Product } from '@/types/product';

export function ProductsExplorer({ products }: { products: Product[] }) {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [material, setMaterial] = useState('');
  const [era, setEra] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(() => filterProducts(products, { q, category, condition, material, era, minPrice: minPrice ? Number(minPrice) : undefined, maxPrice: maxPrice ? Number(maxPrice) : undefined }), [products, q, category, condition, material, era, minPrice, maxPrice]);
  const unique = (k: keyof Product) => [...new Set(products.map((p) => String(p[k])))];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl">The Collection</h1>
      <div className="mt-6 grid gap-3 rounded-lg border border-bronze/30 p-4 md:grid-cols-4">
        <input className="bg-zinc-900 p-2" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="bg-zinc-900 p-2" value={category} onChange={(e) => setCategory(e.target.value)}><option value="">Category</option>{unique('category').map((v) => <option key={v}>{v}</option>)}</select>
        <select className="bg-zinc-900 p-2" value={condition} onChange={(e) => setCondition(e.target.value)}><option value="">Condition</option>{unique('condition').map((v) => <option key={v}>{v}</option>)}</select>
        <select className="bg-zinc-900 p-2" value={material} onChange={(e) => setMaterial(e.target.value)}><option value="">Material</option>{unique('material').map((v) => <option key={v}>{v}</option>)}</select>
        <select className="bg-zinc-900 p-2" value={era} onChange={(e) => setEra(e.target.value)}><option value="">Era/Style</option>{unique('era').map((v) => <option key={v}>{v}</option>)}</select>
        <input className="bg-zinc-900 p-2" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input className="bg-zinc-900 p-2" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <p className="mt-4 text-sm text-parchment/60">Showing {filtered.length} of {products.length} items</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </main>
  );
}
