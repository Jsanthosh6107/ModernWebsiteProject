import { contactLayout } from "@/data/contactLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "Contact us now for Website Consultation and Advice",
  description: "Reach out to us at Jackson Tech Agency through email, form, or phone",
};

export default function Contact() {
  const canonicalUrl = "https://jacksontechagency.com/contact";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <PagelayoutRenderer layout={contactLayout} />
    </>
  );
}
