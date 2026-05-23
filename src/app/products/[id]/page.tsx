import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { productRepository } from '@/lib/data/products';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = productRepository.getById(params.id);
  if (!product) return notFound();
  const related = productRepository.getRelated(product);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-3">
          {product.images.map((img) => (
            <div key={img} className="relative h-72 overflow-hidden rounded-lg">
              <Image src={img} alt={product.title} fill className="object-cover" />
            </div>
          ))}
        </div>
        <article>
          <p className="text-sm uppercase text-bronze">{product.category}</p>
          <h1 className="mt-2 text-4xl">{product.title}</h1>
          <p className="mt-4 text-2xl">{product.currency} {product.price.toLocaleString()}</p>
          <p className="mt-3 text-parchment/70">{product.description}</p>
          <ul className="mt-5 space-y-1 text-sm text-parchment/70">
            <li>Condition: {product.condition}</li>
            <li>Shipping: {product.shipping}</li>
            <li>Material: {product.material}</li>
            <li>Era: {product.era}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">{product.tags.map((tag) => <span className="rounded-full border border-bronze/40 px-3 py-1 text-xs" key={tag}>{tag}</span>)}</div>
          <a className="mt-8 inline-block rounded-md bg-bronze px-6 py-3 font-semibold text-black" href={product.ebayUrl} target="_blank" rel="noreferrer">Buy on eBay</a>
        </article>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl">Related Objects</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </main>
  );
}
