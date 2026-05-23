import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Casa Del Gato | Curated Antiques',
  description: 'Curated antique and vintage storefront with direct purchase links to eBay listings.',
  openGraph: {
    title: 'Casa Del Gato',
    description: 'Curated antique and vintage storefront with direct purchase links to eBay listings.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-bronze/30 bg-black/30">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl tracking-[0.2em] uppercase">Casa Del Gato</Link>
            <Link href="/products" className="text-sm uppercase text-parchment/80 hover:text-parchment">Collection</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
