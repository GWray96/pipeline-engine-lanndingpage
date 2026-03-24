import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Pipeline Engine — B2B Lead Generation Systems",
    template: "%s | The Pipeline Engine",
  },
  description:
    "Done-for-you B2B lead generation. I build your complete pipeline system in 90 days, then fuel it every month so qualified calls land in your calendar without you lifting a finger.",
  openGraph: {
    title: "The Pipeline Engine — B2B Lead Generation Systems",
    description:
      "Done-for-you B2B lead generation. Built in 90 days. Fuelled every month. Yours to keep.",
    type: "website",
    url: "https://thepipelineengine.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pipeline Engine — B2B Lead Generation Systems",
    description: "Done-for-you B2B lead generation. Built in 90 days. Fuelled every month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-bg-base text-text-primary">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
