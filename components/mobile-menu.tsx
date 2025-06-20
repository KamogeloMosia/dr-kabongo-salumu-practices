"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth-context"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { getHeadingClass, getBodyClass } = useTheme()
  const pathname = usePathname()
  const { user } = useAuth()

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Slide-in Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-4/5 max-w-xs bg-card shadow-xl flex flex-col h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className={`font-bold text-lg ${getHeadingClass()}`}>Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-foreground">
            <span className="material-symbols-outlined">close</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto flex flex-col p-4 space-y-2">
          <Link
            href="/"
            className={`p-3 text-base rounded-md transition-colors ${pathname === "/" ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`p-3 text-base rounded-md transition-colors ${pathname === "/about" ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`p-3 text-base rounded-md transition-colors ${pathname.startsWith("/blog") ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className={`p-3 text-base rounded-md transition-colors ${pathname === "/faq" ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            FAQ
          </Link>
          <Link
            href="/services"
            className={`p-3 text-base rounded-md transition-colors ${pathname === "/services" ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`p-3 text-base rounded-md transition-colors ${pathname === "/contact" ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
            onClick={onClose}
          >
            Contact
          </Link>
          {user && (
            <Link
              href="/admin"
              className={`p-3 text-base rounded-md transition-colors ${pathname.startsWith("/admin") ? "font-semibold bg-accent" : "hover:bg-accent"} ${getBodyClass()}`}
              onClick={onClose}
            >
              Admin
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}
