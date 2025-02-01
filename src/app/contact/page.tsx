import { contactLayout } from "@/data/contactLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "Contact us now for Website Consultation and Advice",
  description: "Reach out to us at Jackson Tech Agency through email, form, or phone",
  alternates: {
    canonical: 'https://jacksontechagency.com/contact',
  }
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <PagelayoutRenderer layout={contactLayout} />
    </>
  );
}
