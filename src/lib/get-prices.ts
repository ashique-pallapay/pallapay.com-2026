export async function getPrices() {
  const PHP_API_BASE = (process.env.PHP_API_BASE || '').replace(/\/$/, '');

  const tryUrls: string[] = [];
  if (PHP_API_BASE) {
    tryUrls.push(
      `${PHP_API_BASE}/prices`,
      `${PHP_API_BASE}/index.php/prices`,
      `${PHP_API_BASE}/index.php/api/prices`,
      `${PHP_API_BASE}/api/prices`,
    );
  }

  // common hosts
  tryUrls.push(
    'https://app.pallapay.com/prices',
    'https://www.pallapay.com/prices',
    'https://www.pallapay.com/index.php/prices',
    'https://dashboard.pallapay.com/prices',
  );

  for (const url of tryUrls) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) continue;
      const data = await res.json();
      return data ?? {};
    } catch (err) {
      // continue to next URL
    }
  }

  // Fallback to CoinGecko
  try {
    const ids = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'shiba-inu', 'usd-coin'];
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(',')}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      { cache: 'no-store' },
    );
    if (!res.ok) return {};
    const data = await res.json();
    const result: Record<string, any> = {};
    data.forEach((c: any) => {
      const symbol = (c.symbol || '').toUpperCase();
      result[symbol] = {
        coin_id: c.id,
        coin_symbol: symbol,
        usd_price: String(c.current_price ?? 0),
        icon_url: c.image ?? '',
        one_day_change_percentage: c.price_change_percentage_24h ?? 0,
        last_updated_at: c.last_updated ?? '',
        last_updated_human: c.last_updated ? new Date(c.last_updated).toLocaleString() : '',
      };
    });
    return result;
  } catch (err) {
    return {};
  }
}
