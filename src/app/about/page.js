import { aboutLayout } from "@/data/aboutLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "The Team Behind The Best SEO Optimized Websites",
  description: "How we saw the Jackson TN online landscape and brought our skills in sales to fix it",
};

export default function About() {
  const canonicalUrl = "https://jacksontechagency.com/about";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <PagelayoutRenderer layout={aboutLayout} />
    </>
  );
}
