const BASE_URL = 'https://www.dtgarimagoel.com';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact/`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
