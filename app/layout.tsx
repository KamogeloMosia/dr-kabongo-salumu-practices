import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import FloatingChat from "@/components/FloatingChat"
import StructuredData from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Kabongo Salumu - General Practitioner",
  description: "Comprehensive healthcare services with over 20 years of experience in Kempton Park",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Kabongo Salumu" />
        <meta name="keywords" content="doctor, general practitioner, Kempton Park, healthcare, medical, family medicine, South Africa, Dr Salumu" />
        <meta name="google-site-verification" content="AhDPk57l6lJP4R7ke1itVZ6xwDODHmOZuAPO3qJJQ5M" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Kabongo Salumu - General Practitioner" />
        <meta property="og:description" content="Comprehensive healthcare services with over 20 years of experience in Kempton Park" />
        <meta property="og:image" content="/images/doctor-icon.svg" />
        <meta property="og:url" content="https://www.drsalumu.xyz/" />
        <meta property="og:site_name" content="Dr. Kabongo Salumu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Kabongo Salumu - General Practitioner" />
        <meta name="twitter:description" content="Comprehensive healthcare services with over 20 years of experience in Kempton Park" />
        <meta name="twitter:image" content="/images/doctor-icon.svg" />
        <link rel="canonical" href="https://www.drsalumu.xyz/" />
        <link rel="icon" href="/images/medical-symbol.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dr Salumu" />
        <meta name="application-name" content="Dr Salumu" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
        {/* Floating WhatsApp Button and Chat Input */}
        <FloatingChat />
        {/* Floating Chat Button */}
        <div id="floating-chat-root"></div>
      </body>
    </html>
  )
}
