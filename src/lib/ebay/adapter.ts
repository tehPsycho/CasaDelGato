import { Product } from '@/types/product';

export interface EbaySyncAdapter {
  syncListings(): Promise<Product[]>;
}

export class PlaceholderEbaySyncService implements EbaySyncAdapter {
  async syncListings(): Promise<Product[]> {
    // TODO: Implement OAuth token flow once eBay developer account is approved.
    // TODO: Pull listings via Browse/Inventory APIs and map into normalized Product schema.
    // TODO: Merge remote updates into local store with conflict-safe upserts.
    return [];
  }
}
