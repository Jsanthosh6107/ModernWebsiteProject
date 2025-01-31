import { WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const aboutLayout = [
      {
        type: "ImageTextTwo",
        data: {
          PixelImage: {
            src: "/images/NashvilleTN.jpg",
            alt: "Image of Nashville TN",
            width: 800,
            height: 500,
          }, 
          Title: "We're Local, And We're In The Market For Results",
          Description: "Entering the market, we saw substandard websites, overly high prices, and businesses that were based in entirely different countries. We're here to change that. Based directly in Jackson, our goal is to show this city what a real website looks like, and if you'll give us the chance, we'll spin up one of the best websites your industry has ever seen, while bringing you customers from every part of Jackson and beyond.",
          ButtonText: "Contact Us",
        }
      },
      {
        type: "Tiles",
        data: {
          tiles: [
            { svg: <AccessibleIcon />, title: "We Care About You", description: "Unlike other Agencies, we're new to the market, and have a desire to prove ourselves. We'll go above and beyond to see your website on top."},
            { svg: <PurchaseMobileSalesIcon />, title: "Latest Tech", description: "Due to our relevancy to the field, you'll have the newest tech ensuring you're always ahead of your competition in attention and style."},
            { svg: <GiftSalesIcon />, title: "Best in Jackson", description: "You won't find anyone else in Jackson like us, selling the highest tech with the lowest prices, we have the best of both worlds"},
          ]
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