import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Utkarsh Singh | Full Stack Web Developer (React, Next.js)",
  description:
    "Official portfolio of Utkarsh Singh – Full Stack Software Developer skilled in Next.js, React, and modern web technologies. Visit this portfolio to explore projects, resume, and contact details.",
  keywords: [
    "Utkarsh Singh portfolio",
    "Utkarsh Singh web developer",
    "Utkarsh Singh software developer",
    "Next.js developer",
    "React developer",
    "Full Stack Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Utkarsh Singh", url: "https://utkarsh.info" }],
  creator: "Utkarsh Singh",
  publisher: "Utkarsh Singh",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Utkarsh Singh | Software Developer Portfolio",
    description:
      "Discover the portfolio of Utkarsh Singh – Full Stack Software Developer specializing in modern web technologies. Visit https://utkarsh.info",
    url: "https://utkarsh.info",
    siteName: "Utkarsh Singh Portfolio",
    images: [
      {
        url: "https://utkarsh.info/preview.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Singh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Singh | Software Developer Portfolio",
    description:
      "Portfolio of Utkarsh Singh – Full Stack Software Developer skilled in React, Next.js, and digital solutions. Visit https://utkarsh.info",
    images: ["https://utkarsh.info/preview.png"],
    creator: "@Utkarsh52762698", 
  },
  metadataBase: new URL("https://utkarsh.info"),
  alternates: {
    canonical: "https://utkarsh.info",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="GPWRnz-Hj26lMCz8si_tNyCQ4uJb_8sbKCQYS2qUMK0"
        />

        {/* Structured Data (JSON-LD for personal portfolio) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Utkarsh Singh",
              url: "https://utkarsh.info",
              sameAs: [
                "https://github.com/realutkarshh",
                "https://linkedin.com/in/utkarsh-singh",
                "https://twitter.com/yourtwitterhandle",
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open Source",
              },
              image: "https://utkarsh.info/utkarsh-profile.jpg",
              description:
                "Utkarsh Singh is a passionate Full Stack Developer skilled in Next.js, React, and modern web technologies. Visit https://utkarsh.info to explore projects and contact details.",
            }),
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
