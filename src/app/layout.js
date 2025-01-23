import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { BackgroundWaves} from "@/components/svgs";

export const metadata = {
  title: 'Modern Website',
  description: 'Upgrade to a modern website for performance, accessibility, and growth',
  openGraph: {
    title: 'Modern Website',
    description: 'Upgrade to a modern website for performance, accessibility, and growth',
    url: 'https://modernwebsites.vercel.app',
    siteName: 'ModernWebsites',
    images: [
      {
        url: 'https://modernwebsites.vercel.app/images/Logo.png',
        width: 800,
        height: 600,
        alt: 'Modern Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Website',
    description: 'Welcome to My Website, the best place to learn and grow!',
    images: ['https://modernwebsites.vercel.app/images/Logo.png'],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Modern Website",
  "url": "https://modernwebsites.vercel.app",
  "logo": 'https://modernwebsites.vercel.app/images/Logo.png',
  "sameAs": [
    "https://www.facebook.com/modernwebsites",
    "https://www.twitter.com/modernwebsites"
  ]
};


export const navbarData = [
  {
    data: {
      navList: [
        { text: "home", url: "/" },
        { text: "about", url: "/#" },
        { text: "services", url: "/#" },
        { text: "portfolio", url: "/#" },
        { text: "clients", url: "/#" },
      ],
    },
  },
];

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="google-site-verification" content="RzZSnijK1k1CAbyHtofAzzO3YVufxy61eI5hbyYrWFc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <BackgroundWaves />
        <Navbar navList={navbarData[0].data.navList} />
        {children}
      </body>
    </html>
  );
}
