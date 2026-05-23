import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-bronze/30 bg-zinc-900/50 p-4">
      <div className="relative mb-3 h-56 overflow-hidden rounded-lg">
        <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
      </div>
      <p className="text-xs uppercase tracking-wide text-parchment/60">{product.category}</p>
      <h3 className="mt-1 text-lg">{product.title}</h3>
      <p className="mt-2 text-bronze">{product.currency} {product.price.toLocaleString()}</p>
      <p className="text-sm text-parchment/70">{product.condition} · {product.shipping}</p>
      <div className="mt-4 flex gap-2">
        <Link href={`/products/${product.id}`} className="rounded-md border border-bronze/40 px-3 py-2 text-sm">Details</Link>
        <a href={product.ebayUrl} target="_blank" className="rounded-md bg-bronze px-3 py-2 text-sm text-black">View on eBay</a>
      </div>
    </article>
  );
}
