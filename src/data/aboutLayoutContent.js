import { WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const aboutLayout = [
      {
        type: "ImageTextTwo",
        data: {
          PixelImage: {
            src: "/images/JacksonTN.jpg",
            alt: "Image of Jackson TN",
            width: 800,
            height: 500,
          }, 
          Title: "Local Expertise, Real Results",
          Description: 
            "We started with one goal in mind: bring high-performing, affordable websites to businesses right here in Jackson. In a market flooded with overseas services and outdated approaches, we stand apart by putting your success first. Give us the chance to prove it, and we’ll deliver a website that not only looks great but drives real customers—locally and beyond.",
          ButtonText: "Contact Us",
        }
      },
      {
        type: "Tiles",
        data: {
          tiles: [
            {
              svg: <AccessibleIcon />,
              title: "Focused on You",
              description:
                "We’re committed to understanding your goals, challenges, and vision. Think of us as an extension of your team, dedicated to helping you succeed online.",
            },
            {
              svg: <PurchaseMobileSalesIcon />,
              title: "Cutting-Edge Technology",
              description:
                "Stay ahead of the curve with modern design and development practices that keep your website fresh, fast, and on top of the competition.",
            },
            {
              svg: <GiftSalesIcon />,
              title: "Unbeatable Value",
              description:
                "High-end tech doesn’t have to break the bank. Our competitive pricing gives you the best of both worlds—premium quality at a fraction of the usual cost.",
            },
          ],
        },
      },
      {
        type: "ImageText",
        data: {
          imageInfo: {
            src: "/images/PositiveStocks.jpg",
            alt: "Growing Stocks",
            width: 800,
            height: 500,
          },
          textContent: [
            "Want proof we can deliver?",
            "Send us your business details or current website link. We'll identify key improvements at no charge—no strings attached.",
            "We’ll even create a custom sample or mock-up to show exactly how we can elevate your online presence. Just reach out to get started!",
          ],
          inverted: false,
        },
      },
      {
        type: "Quotes",
        data: {
          quoteList: [
            {
              quote: "Store windows are like landing pages on the website.",
              name: "Angela Ahrendts"
            },
            {
              quote: "Websites promote you 24/7: No employee will do that.",
              name: "Paul Cookson"
            },
            {
              quote: "Website without visitors is like a ship lost in the horizon.",
              name: "Dr. Christopher Dayagdag"
            },
            {
              quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away",
              name: "Antonie De-Saint Exupery"
            }
          ]
        }
      },
      {
        type: "Numbers",
        data: {
          numbersList: [
            { topNumber: 140, topSymbol: "%" , bottomString: "Increased Engagement" },
            { topNumber: 3, topSymbol: "x" , bottomString: "More Conversions" },
            { topNumber: 70, topSymbol: "%" , bottomString: "Higher User Satisfaction" },
            { topNumber: 38, topSymbol: "%" , bottomString: "Bounce Less" },
          ]
        }
      },
      {
        type: "Footer",
        data: {
          buttonText: "Interested?",
          callToAction: "Let's Talk.",
          links: [
            {text: "Facebook", url: "https://www.facebook.com/jacksontechagency/"},
            {text: "Instagram", url: "https://www.facebook.com/jacksontechagency/"},
            {text: "LinkedIn", url: "https://www.facebook.com/jacksontechagency/"},
          ],
          copyright: "Jackson Tech Media"
        }
      },
]