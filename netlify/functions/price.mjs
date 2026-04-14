/**
 * Netlify serverless function — returns the localized Play Store price for BusyHours.
 * Netlify automatically sets the x-nf-country header to the visitor's country code,
 * so the Play Store page is fetched with the correct gl= (geolocation) parameter.
 */

const APP_ID = 'com.busyhours';
const FALLBACK = '$6.99';

export const handler = async (event) => {
  // Netlify injects visitor country automatically
  const country = (event.headers['x-nf-country'] ?? 'US').toUpperCase();

  // Map country → locale for Play Store
  const localeMap = {
    IN: { gl: 'IN', hl: 'en' },
    GB: { gl: 'GB', hl: 'en' },
    AU: { gl: 'AU', hl: 'en' },
    CA: { gl: 'CA', hl: 'en' },
    DE: { gl: 'DE', hl: 'de' },
    FR: { gl: 'FR', hl: 'fr' },
    JP: { gl: 'JP', hl: 'ja' },
    BR: { gl: 'BR', hl: 'pt' },
  };
  const { gl, hl } = localeMap[country] ?? { gl: 'US', hl: 'en' };

  try {
    const url = `https://play.google.com/store/apps/details?id=${APP_ID}&hl=${hl}&gl=${gl}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
        'Accept-Language': `${hl},en;q=0.9`,
      },
    });

    if (!res.ok) throw new Error(`Play Store responded ${res.status}`);

    const html = await res.text();

    // Play Store embeds schema.org microdata — very stable
    const match =
      html.match(/itemprop="price"\s+content="([^"]+)"/) ??
      html.match(/content="([^"]+)"\s+itemprop="price"/);

    const price = match?.[1] ?? FALLBACK;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // cache 1 hour
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ price }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: FALLBACK }),
    };
  }
};
