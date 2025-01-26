import { StockIcon, WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CardRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const homeLayout = [
    {
        type: "Hero", 
        data: {
            heroTitle: "Modernize Your Website And Stand Out",
            heroDescription: "Present the best version of your business and appeal to all customers"
        },
    },
    {
        type: "Shelf",
        data: {
          headers: ["Modernize", "Accessibility", "Growth"],
          text: [
            "Modernizing your website is crucial in this era of technology. Too many websites are out of date, and often hinder the clients experience in the process.",
            "Accessibility is crucial in this day and age, and it's important to have a website capable of usability to all who need it.",
            "A website is a cornerstone for any online growth, so starting with the most relevant website is the fastrack to becoming known in your space.",
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
            alt: "Image of Standing Out",
            width: 800,
            height: 500,
          },
          textContent: [
            "Your website will always be your best form of advertising",
            "It serves as a landing point for your clients, while also being the call to action to finalize a sale",
            "With the best website on the market, you can be sure you stand out online.",
          ],
          inverted: false,
        },
      },
      {
        type: "Tiles",
        data: {
          tilesHeader: "Branding . Growth . Attention",
          tilesTitle: "How to use the worlds best form of advertising",
          tiles: [
            { svg: <WebsiteAttentionIcon />, title: "Get Attention", description: "A modern website is the best way to get attention online, and is the virtual business representing who you are."},
            { svg: <AccessibleIcon />, title: "Easily Accessible", description: "A modern website makes your business accessible to all, and allows everyone to find your product."},
            { svg: <GiftSalesIcon />, title: "Hyper Optimized", description: "Modern websites are optimized for the customer, reducing loading speeds and being more secure."},
            { svg: <HotSalesIcon />, title: "Sales In Mind", description: "A good website is optimized to lead the client to a sale, which should be the primary purpose."},
            { svg: <PurchaseMobileSalesIcon />, title: "Reputable Branding", description: "Serving as your business online, a website is often the first way your customer discovers you."},
            { svg: <CardRemoveIcon />, title: "Client First", description: "A modern website is designed to make the client experience optimal, ensuring a good first impression."},
          ]
        },
      },
      {
        type: "ImageTextTwo",
        data: {
          ITTitle: "No Reason To Wait",
          ITSubTitle: "Lead your competition & top your industry right now",
          SVGImage: <ShopSalesIcon />,
          /*PixelImage: {
            src: "/images/StandOut.jpg",
            alt: "Image of Standing Out",
            width: 800,
            height: 500,
          }, This can be used as a hero if set up correctly*/ 
          Title: "Fast Process, Quick Setup, Results Speak For Themselves",
          Description: "A modern website tailored for the current online space will always dominate the market. In an enviroment that's dictated by attention, it's crucial you stand out as the first and place your stake. Establishing or upgrading to a modern website is the only step needed to ensure your company has the best stake it can in the online market.",
          ButtonText: "Our Services",
        }
      },
      {
        type: "Comparison",
        data: {
          headerOne: "Before",
          headerTwo: "After",
          listOne: [
            "Your business doesn't recieve online attention",
            "Your exposure is limited",
            "You rely on less efficient marketing",
            "You're out of place in a modern ecosystem"
          ],
          listTwo: [
            "You start attracting valuable attention to your business",
            "You recieve the maximum exposure your company should get",
            "Your business benefits from an efficient marketing landing point",
            "You stand out from other businesses and show relevance"
          ]
        }
      },
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
            {text: "Facebook", url: "https://www.google.com"},
            {text: "Instagram", url: "https://www.google.com"},
            {text: "LinkedIn", url: "https://www.google.com"},
          ],
          copyright: "Media"
        }
      },
]