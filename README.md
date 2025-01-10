## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

How the website works:
  -Each page segment is in a component
  -Components are meant to be dynamic and reusable
  -Finished Components are added to PageLayoutRenderer.jsx
  -PageLayoutRenderer finds and adds the data from the data folder to build the page.
  -The page is built in homeLayoutContent, subsequent pages can be added with another LayoutContent page.
  -page.js is the actual page.
  -SVG's are uploaded via index.js
  