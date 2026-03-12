import { NextResponse } from "next/server";

interface CoinData {
  id: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
}

interface FormattedPrice {
  coin_id: string;
  coin_symbol: string;
  usd_price: string;
  icon_url: string;
  one_day_change_percentage: number;
  last_updated_at: string;
  last_updated_human: string;
}

// Define tracked cryptocurrencies with their CoinGecko IDs
const trackedCoins: { [key: string]: string } = {
  bitcoin: "BTC",
  ethereum: "ETH",
  tether: "USDT",
  binancecoin: "BNB",
  "shiba-inu": "SHIB",
  dogecoin: "DOGE",
  "avalanche-2": "AVAX",
  ripple: "XRP",
  litecoin: "LTC",
  tron: "TRON",
};

// In-memory cache with timestamp
let priceCache: { [key: string]: FormattedPrice } | null = null;
let lastUpdated: number = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

async function fetchAndFormatPrices() {
  try {
    const coinIds = Object.keys(trackedCoins).join(",");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&price_change_percentage=24h`,
      { next: { revalidate: 600 } }, // ISR: revalidate every 10 minutes
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API failed with status ${response.status}`);
    }

    const data: CoinData[] = await response.json();
    const now = new Date();

    const formattedPrices: { [key: string]: FormattedPrice } = {};

    data.forEach((coin) => {
      const symbol = trackedCoins[coin.id];
      if (symbol) {
        formattedPrices[symbol] = {
          coin_id: coin.id,
          coin_symbol: symbol,
          usd_price: coin.current_price.toString(),
          icon_url: coin.image,
          one_day_change_percentage: coin.price_change_percentage_24h || 0,
          last_updated_at: now.toISOString(),
          last_updated_human: getHumanReadableTime(now),
        };
      }
    });

    // Update cache
    priceCache = formattedPrices;
    lastUpdated = Date.now();

    return formattedPrices;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    // Return cached data if available, even if stale
    if (priceCache) {
      return priceCache;
    }
    throw error;
  }
}

function getHumanReadableTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

export async function GET() {
  try {
    // Check if cache is fresh
    const isCacheFresh =
      priceCache && Date.now() - lastUpdated < CACHE_DURATION;

    let prices: { [key: string]: FormattedPrice };

    if (isCacheFresh && priceCache) {
      console.log("Returning cached prices");
      prices = priceCache;
    } else {
      console.log("Fetching fresh prices from CoinGecko API");
      prices = await fetchAndFormatPrices();
    }

    return NextResponse.json(prices, {
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
      },
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch cryptocurrency prices" },
      { status: 500 },
    );
  }
}
