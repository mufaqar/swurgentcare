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

export const homePage = `query homePage {
    page(id: "10", idType: DATABASE_ID) {
      seo {
        metaKeywords
        metaDesc
        fullHead
        title
      }
    }
  }
  `;
export const testimonials = `query homePage {
    testimonials {
      nodes {
        content
        title
      }
    }
  }`;

export const helpAndFaq = `query helpAndFaq {
    page(id: "78", idType: DATABASE_ID) {
      seo {
        title
        metaKeywords
        metaDesc
        fullHead
      }
      faq {
        faqs {
          answer
          question
        }
      }
    }
  }`;
