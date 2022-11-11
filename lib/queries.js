export const GetAllServices = `query GetAllServices {
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
