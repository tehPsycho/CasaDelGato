#!/usr/bin/env python3
"""Sync eBay listings into local JSON for a curated storefront portal."""

from __future__ import annotations

import argparse
import base64
import json
import os
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Any, Dict, List

import requests

TOKEN_URL = "https://api.ebay.com/identity/v1/oauth2/token"
BROWSE_URL = "https://api.ebay.com/buy/browse/v1/item_summary/search"
OUTPUT_PATH = Path("data/listings.json")


@dataclass
class Listing:
    item_id: str
    title: str
    category: str
    price: str
    currency: str
    condition: str
    image_url: str
    item_web_url: str


def get_access_token(client_id: str, client_secret: str) -> str:
    raw = f"{client_id}:{client_secret}".encode("utf-8")
    basic = base64.b64encode(raw).decode("utf-8")

    headers = {
        "Authorization": f"Basic {basic}",
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {
        "grant_type": "client_credentials",
        "scope": "https://api.ebay.com/oauth/api_scope",
    }

    response = requests.post(TOKEN_URL, headers=headers, data=data, timeout=30)
    response.raise_for_status()
    return response.json()["access_token"]


def search_listings(token: str, query: str, limit: int) -> List[Dict[str, Any]]:
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    params = {
        "q": query,
        "limit": limit,
    }

    response = requests.get(BROWSE_URL, headers=headers, params=params, timeout=30)
    response.raise_for_status()
    payload = response.json()
    return payload.get("itemSummaries", [])


def normalize(items: List[Dict[str, Any]]) -> List[Listing]:
    listings: List[Listing] = []
    for item in items:
        price = item.get("price", {})
        image = item.get("image", {})
        category = item.get("categories", [{}])

        listings.append(
            Listing(
                item_id=item.get("itemId", ""),
                title=item.get("title", ""),
                category=category[0].get("categoryName", "Uncategorized") if category else "Uncategorized",
                price=price.get("value", "0"),
                currency=price.get("currency", "USD"),
                condition=item.get("condition", "Unknown"),
                image_url=image.get("imageUrl", ""),
                item_web_url=item.get("itemWebUrl", ""),
            )
        )
    return listings


def write_output(listings: List[Listing], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    data = {
        "count": len(listings),
        "items": [asdict(listing) for listing in listings],
    }
    output_path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync eBay listings into local JSON")
    parser.add_argument("--query", required=True, help="Search query for your store items")
    parser.add_argument("--limit", type=int, default=50, help="How many listings to fetch")
    args = parser.parse_args()

    client_id = os.getenv("EBAY_CLIENT_ID")
    client_secret = os.getenv("EBAY_CLIENT_SECRET")

    if not client_id or not client_secret:
        raise SystemExit("Missing EBAY_CLIENT_ID or EBAY_CLIENT_SECRET environment variables")

    token = get_access_token(client_id, client_secret)
    items = search_listings(token, args.query, args.limit)
    listings = normalize(items)
    write_output(listings, OUTPUT_PATH)

    print(f"Saved {len(listings)} listings to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
