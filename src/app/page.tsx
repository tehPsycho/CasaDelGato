import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { productRepository } from '@/lib/data/products';

const learningGuides = [
  {
    title: 'How to Identify Antiques',
    description:
      'Learn to date pieces by materials, construction methods, patina, and signs of age so you can separate true antiques from reproductions.'
  },
  {
    title: 'Art Periods at a Glance',
    description:
      'A warm, practical guide to key design eras—from Victorian and Arts & Crafts to Art Deco and Mid-Century—so every piece has historical context.'
  },
  {
    title: 'Maker & Workman Stamps',
    description:
      'Understand hallmarks and workshop marks on silverplate, pewter/tin, pottery, and wood to better trace origin, quality, and likely age.'
  }
];

export default function HomePage() {
  const products = productRepository.getAll();
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-bronze">Casa Del Gato Antiques</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight">A Warm, Cozy Home for Antique Stories & Finds</h1>
        <p className="mt-4 max-w-3xl text-parchment/80">
          Named for Uncle Matt&apos;s lifelong nickname, <span className="italic">Catman</span>, Casa Del Gato is a place to browse
          meaningful antiques while learning how to identify and appreciate them.
        </p>
        <p className="mt-4 max-w-3xl text-parchment/70">
          Listing an extensive collection of vintage silverplated flatware, Depression Glass, McKoy, Bauer, Luray and other art pottery,
          plus a myriad of other odds and ends picked up along the way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/products" className="inline-block rounded-md bg-bronze px-6 py-3 font-medium text-black">Browse Collection</Link>
          <a href="#antique-learning" className="inline-block rounded-md border border-bronze/50 px-6 py-3 font-medium text-parchment hover:border-bronze">Explore Learning Guides</a>
        </div>
      </section>

      <section id="antique-learning" className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-sm uppercase tracking-[0.22em] text-bronze/90">Antique Learning Library</p>
        <h2 className="mt-3 text-3xl">Build Confidence as You Collect</h2>
        <p className="mt-3 max-w-3xl text-parchment/70">
          We&apos;re building a practical reference section to help collectors, decorators, and curious browsers understand the pieces they bring home.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningGuides.map((guide) => (
            <article key={guide.title} className="rounded-xl border border-bronze/30 bg-black/20 p-6">
              <h3 className="text-xl text-parchment">{guide.title}</h3>
              <p className="mt-2 text-parchment/75">{guide.description}</p>
            </article>
          ))}
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
