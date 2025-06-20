"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import { MobileMenu } from "./mobile-menu"
import { useAuth } from "@/context/auth-context"

export default function Header() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user } = useAuth()

  return (
    <>
      <header className="border-b border-border bg-card sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-lg font-bold text-foreground ${getHeadingClass()}`}>Dr Salumu</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
            >
              Contact
            </Link>
            {user && (
              <Link
                href="/admin"
                className={`text-sm font-medium hover:text-foreground/70 transition-colors ${getBodyClass()}`}
              >
                Admin
              </Link>
            )}
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden shadow-none" onClick={() => setMobileMenuOpen(true)}>
            <span className="material-symbols-outlined text-base" style={{ fontSize: '20px' }}>menu</span>
          </Button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
