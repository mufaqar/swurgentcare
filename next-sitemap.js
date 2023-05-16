const fs = require('fs');

const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');
const client = new ApolloClient({
  uri: 'https://admin.swurgentcare.net/graphql',
  cache: new InMemoryCache(),
});

const SITE_URL = 'https://swurgentcare.com';

async function generateSitemap() {
  const query = `query GetAllServices {
    services(first: 50) {
      nodes {
        id
        servicesFields {
          featureImage {
            mediaItemUrl
          }
          icon {
            mediaItemUrl
          }
        }
        content
        title
        slug
        seo {
          metaDesc
          metaKeywords
          title
        }
      }
    }
  }`;

  const GET_SERVICES = gql`
    ${query}
  `;

  const response = await client.query({
    query: GET_SERVICES,
  });
  const all_services = response?.data?.services?.nodes;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://swurgentcare.com</loc><lastmod>2023-05-04T14:13:23.588Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
         <url><loc>https://swurgentcare.com/about</loc><lastmod>2023-05-04T14:13:23.589Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
         <url><loc>https://swurgentcare.com/appointments</loc><lastmod>2023-05-04T14:13:23.589Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
     
      ${all_services
        .map(
          (item) => `
         
        <url>
          <loc>${SITE_URL}/${item.slug}</loc>
          <lastmod>11:51</lastmod>
          <priority>0.70</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
