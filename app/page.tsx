import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Osama Khaled | Frontend & Wordpress Developer",
  description:
    "Portfolio of Osama Khaled – Frontend & Wordpress Developer building modern web interfaces and interactive experiences.",

  openGraph: {
    title: "Osama Khaled Portfolio",
    description: "Frontend & Wordpress Developer Portfolio",
    url: "https://osamakhaled-portfolio.vercel.app",
    siteName: "Osama Khaled Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
