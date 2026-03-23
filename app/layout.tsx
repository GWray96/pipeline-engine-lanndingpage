import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Pipeline Engine — B2B Lead Generation Systems",
  description:
    "I build your complete B2B lead generation system in 90 days — then fuel it every month so qualified calls land in your calendar without you touching it.",
  openGraph: {
    title: "The Pipeline Engine — B2B Lead Generation Systems",
    description:
      "Done-for-you B2B lead generation. Built in 90 days. Fuelled every month. Yours to keep.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
