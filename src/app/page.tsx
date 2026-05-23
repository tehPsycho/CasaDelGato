import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { productRepository } from '@/lib/data/products';

export default function HomePage() {
  const products = productRepository.getAll();
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const collections = ['Victorian Grandeur', 'Brass & Patina', 'Old-World Illumination'];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-bronze">Curated Antique Finds</p>
        <h1 className="mt-4 max-w-2xl text-5xl leading-tight">An Editorial Collection of Timeless Objects</h1>
        <p className="mt-4 max-w-2xl text-parchment/70">Casa Del Gato presents furniture, mirrors, clocks, lamps, and collectibles selected for character and provenance.</p>
        <Link href="/products" className="mt-8 inline-block rounded-md bg-bronze px-6 py-3 font-medium text-black">Browse Collection</Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl">Featured Collections</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {collections.map((c) => <div key={c} className="rounded-lg border border-bronze/30 p-6 text-lg">{c}</div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl">Featured Products</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </main>
  );
}
