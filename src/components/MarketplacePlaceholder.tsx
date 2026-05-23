'use client';

import { useState } from 'react';

const ebayStoreUrl = 'https://www.ebay.com/str/casadelgatoantiques';

export function MarketplacePlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="mx-auto mt-6 max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-bronze/30 bg-black/30 p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-bronze/90">Marketplace</p>
          <h2 className="mt-3 text-3xl">Casa Del Gato Marketplace (Under Construction)</h2>
          <p className="mt-3 max-w-3xl text-parchment/75">
            The full online marketplace is being prepared. For now, use our direct eBay store link to browse the active listings.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="h-36 rounded-xl border border-bronze/30 bg-parchment/5 blur-[1.5px]"
                aria-hidden="true"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-8 rounded-md bg-bronze px-6 py-3 font-medium text-black"
          >
            Open Store Link
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6">
          <div className="w-full max-w-md rounded-2xl border border-bronze/40 bg-[#111] p-6 shadow-xl">
            <h3 className="text-2xl">Visit Our eBay Store</h3>
            <p className="mt-3 text-parchment/80">
              You&apos;ll be redirected to our official Casa Del Gato Antiques eBay storefront.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={ebayStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-bronze px-4 py-2 font-medium text-black"
              >
                Go to eBay
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-bronze/50 px-4 py-2 text-parchment"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
