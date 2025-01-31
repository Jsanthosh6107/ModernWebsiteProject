import { WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const homeLayout = [
      {
        type: "Hero", 
        data: {
            heroTitle: "Get a $3,000 Website for Just $500",
            heroDescription: "Industry-standard sites at a fraction of the cost. Get found on Google. Designed to convert."
        },
    },
    {
        type: "Shelf",
        data: {
          headers: ["More Sales", "Better SEO", "Higher Conversions"],
          text: [
            "SEO-optimized websites get 1,000%+ more traffic than those using basic builders like Wix, Squarespace, and WordPress. If your site isn’t ranking, your competition is stealing your leads.",
            "57% of people won’t recommend your business if your site isn’t mobile-friendly. Don’t let outdated design cost you customers!",
            "High-performing websites convert 200-400% more visitors into customers. A slow or poorly designed site is leaving money on the table!",
          ],
        },
      },
      {
        type: "CompanyGallery",
        data: {
          images: [
            { src: "/images/HCAllOverTheWorld.png", alt: "Hot Chocolate All Over The World", width: 500, height: 500 },
            { src: "/images/SamsPressureWashing.png", alt: "Sams Pressure Washing", width: 500, height: 500 },
            { src: "/images/SSSGodsLove.png", alt: "SSS Gods Love", width: 500, height: 500 },
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
            "You don’t need to spend thousands to get a powerful, high-converting website.",
            "We’re offering the same premium quality for just $500 instead of $3,000!",
            "Don’t let your website hold you back. Get a site that works as hard as you do—for a fraction of the price!",
          ],
          inverted: false,
        },
    },
      {
        type: "Tiles",
        data: {
          tilesHeader: "Exposure . Conversions . Attention",
          tilesTitle: "There's a million reasons to upgrade your website",
          tiles: [
            { svg: <WebsiteAttentionIcon />, title: "Sales While Asleep", description: "We'll put your website at the top of google, so even when you sleep you'll be getting customers."},
            { svg: <AccessibleIcon />, title: "Optimized to sell", description: "We've perfected our websites so they maximize sales. With the perfect user experience, you'll see incredible results. "},
            { svg: <GiftSalesIcon />, title: "Best in Jackson", description: "You won't find anyone else in Jackson like us, selling the highest tech with the lowest prices, we have the best of both worlds"},
            { svg: <HotSalesIcon />, title: "Revenue First, Looks Second", description: "We care about conversions first, your website will be prioritized to sell, not to look pretty. Don't worry though, we're perfectly capable of doing both!"},
            { svg: <PurchaseMobileSalesIcon />, title: "Reputable Branding", description: "Our websites are tailored to create trust and loyalty to your brand, ensuring your customers pick you every time."},
            { svg: <CartRemoveIcon />, title: "No More Expenses", description: "With our websites made from scratch, you won't need to pay fees to Wordpress or Wix, it's all yours!"},
          ]
        },
      },
      {
        type: "ImageTextTwo",
        data: {
          ITTitle: "Why Trust us?",
          ITSubTitle: "Isn't $500 too good to be true?",
          SVGImage: <ShopSalesIcon />,
          /*PixelImage: {
            src: "/images/StandOut.jpg",
            alt: "Image of Standing Out",
            width: 800,
            height: 500,
          }, This can be used as a hero if set up correctly*/ 
          Title: "Why We're The Best Opportunity You'll Ever Discover",
          Description: "We've seen the Jackson market, and we're appalled. We found websites that are so poorly created and extravagantly charged with monthtly bills so ludicrous it made our wallets cry, we had to enter the market. With websites created to sell, technology that'll be relevant for years to come, and performance to get you customers right off google, we're confident you'll find no one else like us",
          ButtonText: "Contact Us",
        }
      },
      {
        type: "Comparison",
        data: {
          headerOne: "DIY Websites",
          headerTwo: "Our Websites",
          listOne: [
            "Invisible to google",
            "Poorly optimized, low conversions",
            "Slow and a bottleneck to sales",
            "Convoluted and negative to your brand"
          ],
          listTwo: [
            "Top of Google",
            "Best technology on the market",
            "Your strongest selling factor online",
            "Positive to your brand and loyalty"
          ]
        }
      },
      /*
      {
        type: "Cards",
        data: {
          subTitle: "Portfolio",
          title: "See the Difference We Make",
          description: "Discover how our modern web solutions can transform businesses, helping them reach new heights in customer engagement and digital growth.",
          cards: [
            {
              cardSubtitle: "Modern Design | SEO Optimization | E-Commerce",
              cardTitle: "TechNova Co.",
              cardDescription: "Revamped their outdated website into a sleek, user-friendly platform, resulting in increased customer engagement and online sales.",
              cardStatistics: [
                { cardNumber: "75%", cardNumberText: "Increase in User Engagement" },
                { cardNumber: "60%", cardNumberText: "Boost in Online Sales" },
                { cardNumber: "95%", cardNumberText: "Improved Page Load Time" }
              ],
              cardButton: "See More",
              cardButtonURL: "#",
              imageInfo: {
                src: "/images/TechLaptop.jpg",
                alt: "Image of Modern Website Design",
                width: 800,
                height: 500,
                priority: true
              }
            },
            {
              cardSubtitle: "Branding | Responsive Design | SEO",
              cardTitle: "Cafe Delight",
              cardDescription: "Created a responsive, visually stunning website for a local cafe, attracting more foot traffic and increasing brand recognition.",
              cardStatistics: [
                { cardNumber: "80%", cardNumberText: "Increase in Online Orders" },
                { cardNumber: "50%", cardNumberText: "Growth in Brand Awareness" },
                { cardNumber: "70%", cardNumberText: "Increase in Mobile Visitors" }
              ],
              cardButton: "See More",
              cardButtonURL: "#",
              imageInfo: {
                src: "/images/CozyCafe.jpg",
                alt: "Image of Cafe Website",
                width: 800,
                height: 500
              }
            },
            {
              cardSubtitle: "Custom CMS | SEO | Analytics",
              cardTitle: "GreenScape Landscaping",
              cardDescription: "Built a custom content management system that empowers GreenScape to update their portfolio and services on the go.",
              cardStatistics: [
                { cardNumber: "65%", cardNumberText: "Increase in Leads" },
                { cardNumber: "90%", cardNumberText: "Improved Client Satisfaction" },
                { cardNumber: "80%", cardNumberText: "Growth in Search Rankings" }
              ],
              cardButton: "See More",
              cardButtonURL: "#",
              imageInfo: {
                src: "/images/LandscapingMachine.jpg",
                alt: "Image of Landscaping Website",
                width: 800,
                height: 500
              }
            },
            {
              cardSubtitle: "Redesign | SMM | Email Marketing",
              cardTitle: "Fitness Hub",
              cardDescription: "Transformed their online presence with an engaging website redesign and integrated social media marketing to boost memberships.",
              cardStatistics: [
                { cardNumber: "85%", cardNumberText: "Increase in Website Visits" },
                { cardNumber: "40%", cardNumberText: "Growth in Memberships" },
                { cardNumber: "75%", cardNumberText: "Improved Social Media Reach" }
              ],
              cardButton: "See More",
              cardButtonURL: "#",
              imageInfo: {
                src: "/images/ModernGym.jpg",
                alt: "Image of Fitness Website",
                width: 800,
                height: 500
              }
            }
          ]
        }
      },    
      {
        type: "Quotes",
        data: {
          quoteList: [
            {
              quote: "Design is not just what it looks like and feels like. Design is how it works.",
              name: "Steve Jobs",
              business: "Apple Inc."
            },
            {
              quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
              name: "Antoine de Saint-Exupéry",
              business: "Author and Aviator"
            },
            {
              quote: "Good design is as little design as possible.",
              name: "Dieter Rams",
              business: "Industrial Designer"
            },
            {
              quote: "The details are not the details. They make the design.",
              name: "Charles Eames",
              business: "Designer and Architect"
            }
          ]
        }
      },
      */   
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