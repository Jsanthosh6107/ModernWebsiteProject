import { WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const homeLayout = [
      {
        type: "Hero", 
        data: {
            heroTitle: "Get a $3,000 Website for Just $500",
            heroDescription: "Rank on Google, capture leads 24/7, and blow past your competition with a site built to sell."
        },
    },
    {
        type: "Shelf",
        data: {
          headers: ["More Sales", "Better SEO", "Higher Conversions"],
          text: [
            "Search optimized websites get 1,000%+ more traffic than those using basic builders like Wix, Squarespace, and WordPress. If your site isn’t ranking, your competition is stealing your leads.",
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
            "Don’t let your website hold you back. We promise results, contact us and we'll deliver!",
          ],
          inverted: false,
        },
    },
    {
      type: "Tiles",
      data: {
        tilesHeader: "Exposure. Conversions. Attention.",
        tilesTitle: "Countless Reasons to Upgrade Your Website",
        tiles: [
          {
            svg: <WebsiteAttentionIcon />,
            title: "Sales Around the Clock",
            description: 
              "Rank higher on Google so you attract leads and customers 24/7—no extra effort required.",
          },
          {
            svg: <AccessibleIcon />,
            title: "Optimized for Conversions",
            description: 
              "Every element is built to turn visitors into paying customers through a seamless user experience.",
          },
          {
            svg: <GiftSalesIcon />,
            title: "Jackson’s Best Value",
            description: 
              "Advanced technology meets affordable pricing—get maximum impact without breaking the bank.",
          },
          {
            svg: <HotSalesIcon />,
            title: "Revenue-Driven Design",
            description: 
              "Looks matter, but sales matter more. Our sites focus on bringing you real returns first and foremost.",
          },
          {
            svg: <PurchaseMobileSalesIcon />,
            title: "Strengthen Your Brand",
            description: 
              "Earn trust and loyalty with a professional presence that positions you as the top choice in your market.",
          },
          {
            svg: <CartRemoveIcon />,
            title: "No Hidden Fees—Ever",
            description: 
              "Own your site outright. We build from scratch, so you skip pricey subscriptions and retain full control.",
          },
        ],
      },
    },
      {
        type: "ImageTextTwo",
        data: {
          ITTitle: "Why Trust Us?",
          ITSubTitle: "Isn’t $500 too good to be true?",
          SVGImage: <ShopSalesIcon />,
          /*PixelImage: {
            src: "/images/StandOut.jpg",
            alt: "Image of Standing Out",
            width: 800,
            height: 500,
          }, This can be used as a hero if set up correctly*/ 
          Title: "We’re Redefining What's Possible in Jackson",
          Description: 
            "We noticed too many local businesses stuck with outdated, overpriced websites—often weighed down by steep monthly fees. Our solution? High-conversion design, cutting-edge tech, and top-tier performance at a fraction of the standard cost. We believe every business deserves a website that actually drives revenue, without the usual bloated price tags.",
          ButtonText: "Contact Us",
        }
      },
      {
        type: "Comparison",
        data: {
          headerOne: "DIY Websites",
          headerTwo: "Our Websites",
          listOne: [
            "Barely visible on Google",
            "Poorly optimized, low conversions",
            "Slows down your sales funnel",
            "Reflects poorly on your brand image",
          ],
          listTwo: [
            "Strategically built to rank",
            "Optimized for maximum conversions",
            "Fast, reliable, and scalable",
            "Enhances brand trust and credibility",
          ],
        },
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