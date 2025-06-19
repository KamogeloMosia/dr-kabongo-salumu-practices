import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import { useState, useRef, useEffect, RefObject } from "react"

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
  const [showChatInput, setShowChatInput] = useState(false)
  const chatInputRef = useRef<HTMLDivElement>(null)

  // Close chat input when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (chatInputRef.current && !(chatInputRef.current as HTMLDivElement).contains(e.target as Node)) {
        setShowChatInput(false)
      }
    }
    if (showChatInput) {
      document.addEventListener("mousedown", handleClick)
    } else {
      document.removeEventListener("mousedown", handleClick)
    }
    return () => document.removeEventListener("mousedown", handleClick)
  }, [showChatInput])

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
        {/* Floating WhatsApp Button and Chat Input */}
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
          {showChatInput && (
            <div ref={chatInputRef} className="mb-3 flex flex-col items-end">
              <form className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 w-64 max-w-xs border border-gray-200" onSubmit={e => { e.preventDefault(); setShowChatInput(false); }}>
                <input
                  type="text"
                  className="flex-1 border-none outline-none text-sm px-0 bg-transparent"
                  placeholder="Ask a question..."
                  autoFocus
                />
                <button type="submit" className="text-primary">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          )}
          <button
            aria-label="Start WhatsApp Conversation"
            style={{
              background: '#25D366',
              borderRadius: '50%',
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onClick={() => setShowChatInput((v) => !v)}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.118-.563-.177-.8.177-.237.355-.918 1.155-1.127 1.392-.208.237-.415.266-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.208-.355-.022-.546.156-.723.16-.159.355-.415.533-.622.178-.208.237-.355.355-.592.118-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.208-.009-.444-.011-.68-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.27 3.428 1.447 3.666.178.237 2.5 3.82 6.05 5.207.846.291 1.505.464 2.021.593.849.203 1.624.174 2.237.106.682-.075 2.104-.859 2.402-1.691.297-.832.297-1.544.208-1.691-.089-.148-.326-.237-.68-.415z" fill="#fff"/>
            </svg>
          </button>
        </div>
        {/* Floating Chat Button */}
        <div id="floating-chat-root"></div>
      </body>
    </html>
  )
}
