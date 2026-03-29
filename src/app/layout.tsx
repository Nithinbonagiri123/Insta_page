import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PS Edits | Professional Video Editing & Content Days",
  description:
    "Professional video editing for creators, startups, and businesses. Content Days, cinematic edits, and scroll-stopping content. 5 videos from €150.",
  openGraph: {
    title: "PS Edits | Professional Video Editing & Content Days",
    description:
      "Professional video editing for creators, startups, and businesses. Scroll-stopping content starts here.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#09090b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
