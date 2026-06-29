import "./globals.css";
import "../styles/scroll.css";

import type { Metadata } from "next";
import Providers from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://shinovatechnologies.in"),

  title: {
    default: "Shinova Technologies",
    template: "%s | Shinova Technologies",
  },

  description:
    "Shinova Technologies is a software development company delivering innovative Web Development, Mobile App Development, AI Solutions, Cloud Services, UI/UX Design, Digital Transformation, and IT Consulting services.",

  applicationName: "Shinova Technologies",

  keywords: [
    "Shinova Technologies",
    "Software Development Company",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "AI Solutions",
    "Artificial Intelligence",
    "Cloud Services",
    "UI UX Design",
    "Digital Transformation",
    "IT Consulting",
    "Custom Software Development",
    "Technology Company India",
    "Next.js Development",
    "React Development",
    "Node.js Development",
    "Python Development",
    "FastAPI Development",
    "Business Website Development",
    "Enterprise Software Solutions",
  ],

  authors: [
    {
      name: "Shinova Technologies",
      url: "https://shinovatechnologies.in",
    },
  ],

  creator: "Shinova Technologies",
  publisher: "Shinova Technologies",

  category: "Technology",

  alternates: {
    canonical: "https://shinovatechnologies.in",
  },

  icons: {
    icon: "/images/fevicon.svg",
    shortcut: "/images/fevicon.svg",
    apple: "/images/fevicon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shinovatechnologies.in",
    siteName: "Shinova Technologies",

    title: "Shinova Technologies",

    description:
      "Innovating a Brighter Digital World. Professional Web Development, Mobile App Development, AI Solutions, Cloud Services, UI/UX Design and Digital Transformation.",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shinova Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shinova Technologies",

    description:
      "Innovating a Brighter Digital World.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    // Add these later after verification
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "",
    // yahoo: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
