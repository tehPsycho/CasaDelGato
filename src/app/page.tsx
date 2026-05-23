import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { productRepository } from '@/lib/data/products';
import { MarketplacePlaceholder } from '@/components/MarketplacePlaceholder';

const learningGuides = [
  {
    title: 'How to Identify Antiques',
    description:
      'Learn to date pieces by material, joinery, wear patterns, and construction clues so you can separate period originals from reproductions.'
  },
  {
    title: 'Art Periods Made Practical',
    description:
      'From Victorian and Arts & Crafts to Art Deco and Mid-Century, we translate design history into quick visual cues you can use while shopping.'
  },
  {
    title: 'Maker, Hallmark & Workman Stamps',
    description:
      'Decode marks on silverplate, pewter/tin, pottery, and wood to trace workshop origin, likely date ranges, and quality standards.'
  }
];

const focusCollections = [
  'Vintage silverplated flatware',
  'Depression glass',
  'McKoy, Bauer, and Luray pottery',
  'Handpicked odds and ends with character'
];

export default function HomePage() {
  const products = productRepository.getAll();
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <main>
      <section className="hero-glow mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-bronze">Casa Del Gato Antiques</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">Warm, Cozy Antique Collecting with a Catman Story</h1>
        <p className="mt-5 max-w-3xl text-lg text-parchment/80">
          Casa Del Gato is a playful nod to Uncle Matt&apos;s lifelong nickname: <span className="italic">Catman</span>.
          This shop is designed to feel like a welcoming study—part storefront, part learning corner, and fully centered on antique context.
        </p>
        <p className="mt-4 max-w-3xl text-parchment/75">
          We&apos;re pausing full eBay integration for now so we can build out a better browsing experience, theme, and educational content throughout the site.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/products" className="inline-block rounded-md bg-bronze px-6 py-3 font-medium text-black hover:bg-[#d0ab78]">
            Browse Collection
          </Link>
          <a
            href="#antique-learning"
            className="inline-block rounded-md border border-bronze/50 px-6 py-3 font-medium text-parchment hover:border-bronze"
          >
            Explore Learning Guides
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-2">
        <div className="rounded-2xl border border-bronze/30 bg-black/25 p-7">
          <p className="text-sm uppercase tracking-[0.22em] text-bronze/90">What We Specialize In</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {focusCollections.map((item) => (
              <li key={item} className="rounded-lg border border-bronze/20 bg-parchment/5 px-4 py-3 text-parchment/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="antique-learning" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm uppercase tracking-[0.22em] text-bronze/90">Antique Learning Library</p>
        <h2 className="mt-3 text-3xl">Build Confidence as You Collect</h2>
        <p className="mt-3 max-w-3xl text-parchment/70">
          This section is dedicated to identifying antiques, classifying art periods, and reading maker stamps across silver, tin, pottery, and wood.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningGuides.map((guide) => (
            <article key={guide.title} className="rounded-xl border border-bronze/30 bg-black/25 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <h3 className="text-xl text-parchment">{guide.title}</h3>
              <p className="mt-2 text-parchment/75">{guide.description}</p>
            </article>
          ))}
        </div>
      </section>

      <MarketplacePlaceholder />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl">Featured Products</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
