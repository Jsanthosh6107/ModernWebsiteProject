import { homeLayout } from "@/data/homeLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "SEO Optimized Modern Websites At Industry Standards",
  description: "Upgrade to a modern website for performance, accessibility, and growth",
};

export default function Home() {
  const canonicalUrl = "https://modernwebsites.vercel.app"; // Replace with your actual URL

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <PagelayoutRenderer layout={homeLayout} />
    </>
  );
}
