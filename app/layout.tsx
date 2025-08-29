import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Utkarsh Singh - Software Developer",
  description:
    "Portfolio website of Utkarsh Singh, a passionate software developer specializing in full-stack development and digital solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="GPWRnz-Hj26lMCz8si_tNyCQ4uJb_8sbKCQYS2qUMK0" />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}