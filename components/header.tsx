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
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-foreground text-sm">stethoscope</span>
            </div>
            <span className={`text-lg font-bold text-foreground ${getHeadingClass()}`}>Dr. Kabongo Salumu</span>
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
            <Button
              asChild
              className={`bg-primary text-primary-foreground hover:bg-primary/80 text-sm px-4 py-2 ${getBodyClass()}`}
            >
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="material-symbols-outlined">menu</span>
          </Button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
