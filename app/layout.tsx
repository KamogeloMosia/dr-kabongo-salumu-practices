import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { AuthProvider } from "@/context/auth-context"

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
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/27835875879?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            background: '#25D366',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
          aria-label="Start WhatsApp Conversation"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.37258 3 4 8.37258 4 15C4 17.3892 4.8038 19.6108 6.22222 21.4444L3 29L10.5556 25.7778C12.3892 27.1962 14.6108 28 17 28C23.6274 28 29 22.6274 29 16C29 9.37258 23.6274 3 16 3Z" fill="white"/>
            <path d="M16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C14.0109 27 12.1242 26.4372 10.5556 25.4444L10.2222 25.2222L5 27L6.77778 21.7778L6.55556 21.4444C5.56277 19.8758 5 17.9891 5 16C5 9.92487 9.92487 5 16 5ZM16 3C9.37258 3 4 8.37258 4 15C4 17.3892 4.8038 19.6108 6.22222 21.4444L3 29L10.5556 25.7778C12.3892 27.1962 14.6108 28 17 28C23.6274 28 29 22.6274 29 16C29 9.37258 23.6274 3 16 3Z" fill="#25D366"/>
          </svg>
        </a>
        {/* Floating Chat Button */}
        <div id="floating-chat-root"></div>
      </body>
    </html>
  )
}
