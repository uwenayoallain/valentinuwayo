import type { Metadata } from "next";
import clsx from "clsx";
import NavLinks from "./components/links";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Valentin uwayo | Data Analyst",
  description:
    "Experienced data professional with 3+ years in data management, analysis, and visualization. Proficient in MS Excel, SQL, Python, and Tableau. Skilled in translating complex data into understandable insights and collaborating with cross-functional teams for informed business decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body
        className={clsx(
          GeistSans.className,
          " antialiased background text-gray-950"
        )}>
        <NavLinks />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
