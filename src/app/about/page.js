import { aboutLayout } from "@/data/aboutLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "The Team Behind The Best SEO Optimized Websites",
  description: "How we saw the Jackson TN online landscape and brought our skills in sales to fix it",
  alternates: {
    canonical: 'https://jacksontechagency.com/about',
  }
};

export default function About() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <PagelayoutRenderer layout={aboutLayout} />
    </>
  );
}
