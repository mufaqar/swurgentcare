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

  export const appointment = `query AppointmentPage {
    page(id: "80", idType: DATABASE_ID) {
      seo {
        title
        metaKeywords
        metaDesc
        fullHead
      }
    }
  }`;

  export const Health_Vault = `query HealthVaultPage {
    page(id: "68", idType: DATABASE_ID) {
      seo {
        title
        metaKeywords
        metaDesc
        fullHead
      }
      content
    }
  }`;

  export const Providers = `query Providers {
    page(id: "76", idType: DATABASE_ID) {
      seo {
        title
        metaKeywords
        metaDesc
        fullHead
      }
    }
  }`;