import Head from "next/head";

export default function HeadSection({ seo }) {
  return (
    <Head>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.metaDesc} />
      <meta property="og:description" content={seo?.metaDesc} />
      <meta property="og:title" content={seo?.title} />
      <meta name="keywords" content={seo?.metaKeywords}></meta>
    </Head>
  );
}
