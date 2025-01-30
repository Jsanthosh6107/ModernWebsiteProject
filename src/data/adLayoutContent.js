import { StockIcon, WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const adLayout = [
    {
        type: "Hero", 
        data: {
            heroTitle: "🚀 Get a High-Converting Website for $500!",
            heroDescription: "Your website should attract leads and sales 24/7. If it’s slow or outdated, it’s costing you money."
        },
    },
    {
        type: "Shelf",
        data: {
          headers: ["More Sales", "Better SEO", "Higher Conversions"],
          text: [
            "📊 SEO-optimized websites get 1,000%+ more traffic than those using basic builders like Wix, Squarespace, and WordPress. If your site isn’t ranking, your competition is stealing your leads.",
            "📊 57% of people won’t recommend your business if your site isn’t mobile-friendly. Don’t let outdated design cost you customers!",
            "📊 High-performing websites convert 200-400% more visitors into customers. A slow or poorly designed site is leaving money on the table!",
          ],
        },
    },
    {
        type: "ImageText",
        data: {
          imageInfo: {
            src: "/images/StandOut.jpg",
            alt: "Standing Out in a Crowd",
            width: 800,
            height: 500,
          },
          textContent: [
            "💡 You don’t need to spend thousands to get a powerful, high-converting website.",
            "We’re offering the same premium quality for just $500 instead of $3,000!",
            "⚡ Don’t let your website hold you back. Get a site that works as hard as you do—for a fraction of the price!",
          ],
          inverted: false,
        },
    },
    {
        type: "Footer",
        data: {
          buttonText: "Book Your Free Website Audit",
          callToAction: "Spots Are Limited!",
          additionalText: "Click below to start converting more customers today!",
          links: [
            {text: "Facebook", url: "https://www.facebook.com"},
            {text: "Instagram", url: "https://www.instagram.com"},
            {text: "LinkedIn", url: "https://www.linkedin.com"},
          ],
          copyright: "Jackson Tech Agency. All Rights Reserved."
        }
    },
]
