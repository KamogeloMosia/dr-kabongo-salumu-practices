"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import {
  Inter,
  Roboto,
  Open_Sans,
  Lato,
  Poppins,
  Montserrat,
  Source_Sans_3,
  Nunito_Sans,
  Work_Sans,
  Playfair_Display,
  Merriweather,
  Crimson_Text,
  DM_Sans,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Outfit,
  Manrope,
} from "next/font/google"

// Font configurations
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-lato" })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" })
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans" })
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})
const crimson = Crimson_Text({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-crimson" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const fontOptions = {
  inter: { name: "Inter", class: inter.className, variable: inter.variable, category: "sans-serif" },
  roboto: { name: "Roboto", class: roboto.className, variable: roboto.variable, category: "sans-serif" },
  "open-sans": { name: "Open Sans", class: openSans.className, variable: openSans.variable, category: "sans-serif" },
  lato: { name: "Lato", class: lato.className, variable: lato.variable, category: "sans-serif" },
  poppins: { name: "Poppins", class: poppins.className, variable: poppins.variable, category: "sans-serif" },
  montserrat: {
    name: "Montserrat",
    class: montserrat.className,
    variable: montserrat.variable,
    category: "sans-serif",
  },
  "source-sans": {
    name: "Source Sans 3",
    class: sourceSans.className,
    variable: sourceSans.variable,
    category: "sans-serif",
  },
  "nunito-sans": {
    name: "Nunito Sans",
    class: nunitoSans.className,
    variable: nunitoSans.variable,
    category: "sans-serif",
  },
  "work-sans": { name: "Work Sans", class: workSans.className, variable: workSans.variable, category: "sans-serif" },
  "dm-sans": { name: "DM Sans", class: dmSans.className, variable: dmSans.variable, category: "sans-serif" },
  "space-grotesk": {
    name: "Space Grotesk",
    class: spaceGrotesk.className,
    variable: spaceGrotesk.variable,
    category: "sans-serif",
  },
  "plus-jakarta": {
    name: "Plus Jakarta Sans",
    class: plusJakarta.className,
    variable: plusJakarta.variable,
    category: "sans-serif",
  },
  outfit: { name: "Outfit", class: outfit.className, variable: outfit.variable, category: "sans-serif" },
  manrope: { name: "Manrope", class: manrope.className, variable: manrope.variable, category: "sans-serif" },
  playfair: { name: "Playfair Display", class: playfair.className, variable: playfair.variable, category: "serif" },
  merriweather: {
    name: "Merriweather",
    class: merriweather.className,
    variable: merriweather.variable,
    category: "serif",
  },
  crimson: { name: "Crimson Text", class: crimson.className, variable: crimson.variable, category: "serif" },
}

type FontKey = keyof typeof fontOptions

export interface ThemeColors {
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  border: string
  input: string
  ring: string
}

export const defaultThemeColors: ThemeColors = {
  primary: "#111827", // gray-900
  primaryForeground: "#F9FAFB", // gray-50
  secondary: "#F3F4F6", // gray-100
  secondaryForeground: "#111827", // gray-900
  muted: "#F9FAFB", // gray-50
  mutedForeground: "#6B7280", // gray-500
  accent: "#F3F4F6", // gray-100
  accentForeground: "#111827", // gray-900
  destructive: "#DC2626", // red-600
  destructiveForeground: "#F9FAFB", // gray-50
  background: "#FFFFFF", // white
  foreground: "#1F2937", // gray-800
  card: "#FFFFFF", // white
  cardForeground: "#1F2937", // gray-800
  popover: "#FFFFFF", // white
  popoverForeground: "#1F2937", // gray-800
  border: "#E5E7EB", // gray-200
  input: "#E5E7EB", // gray-200
  ring: "#111827", // gray-900
}

interface ThemeContextType {
  headingFont: FontKey
  bodyFont: FontKey
  setHeadingFont: (font: FontKey) => void
  setBodyFont: (font: FontKey) => void
  getHeadingClass: () => string
  getBodyClass: () => string
  themeColors: ThemeColors
  setThemeColors: (colors: Partial<ThemeColors>) => void
  resetThemeColors: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function hexToHslString(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return "0 0% 0%"

  const r = Number.parseInt(result[1], 16) / 255
  const g = Number.parseInt(result[2], 16) / 255
  const b = Number.parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h = 0,
    s: number,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [headingFont, setHeadingFontState] = useState<FontKey>("outfit")
  const [bodyFont, setBodyFontState] = useState<FontKey>("dm-sans")
  const [themeColors, setThemeColorsState] = useState<ThemeColors>(defaultThemeColors)

  useEffect(() => {
    const savedHeadingFont = localStorage.getItem("headingFont") as FontKey
    const savedBodyFont = localStorage.getItem("bodyFont") as FontKey
    const savedThemeColors = localStorage.getItem("themeColors")

    if (savedHeadingFont && fontOptions[savedHeadingFont]) {
      setHeadingFontState(savedHeadingFont)
    }
    if (savedBodyFont && fontOptions[savedBodyFont]) {
      setBodyFontState(savedBodyFont)
    }
    if (savedThemeColors) {
      try {
        const parsedColors = JSON.parse(savedThemeColors)
        // Ensure all keys from defaultThemeColors are present
        const completeColors = { ...defaultThemeColors, ...parsedColors }
        setThemeColorsState(completeColors)
      } catch (e) {
        console.error("Failed to parse saved theme colors", e)
        localStorage.removeItem("themeColors")
      }
    }
  }, [])

  const setHeadingFont = useCallback((font: FontKey) => {
    setHeadingFontState(font)
    localStorage.setItem("headingFont", font)
  }, [])

  const setBodyFont = useCallback((font: FontKey) => {
    setBodyFontState(font)
    localStorage.setItem("bodyFont", font)
  }, [])

  const getHeadingClass = useCallback(() => fontOptions[headingFont]?.class || fontOptions.inter.class, [headingFont])
  const getBodyClass = useCallback(() => fontOptions[bodyFont]?.class || fontOptions.inter.class, [bodyFont])

  const setThemeColors = useCallback((newColors: Partial<ThemeColors>) => {
    setThemeColorsState((prevColors) => {
      const updatedColors = { ...prevColors, ...newColors }
      localStorage.setItem("themeColors", JSON.stringify(updatedColors))
      return updatedColors
    })
  }, [])

  const resetThemeColors = useCallback(() => {
    setThemeColorsState(defaultThemeColors)
    localStorage.setItem("themeColors", JSON.stringify(defaultThemeColors))
  }, [])

  useEffect(() => {
    const root = document.documentElement
    Object.values(fontOptions).forEach((font) => {
      if (font && font.class && typeof font.class === "string" && font.variable) {
        root.style.setProperty(font.variable, font.class.split(" ")[0])
      }
    })

    const currentHeadingFontData = fontOptions[headingFont]
    const currentBodyFontData = fontOptions[bodyFont]
    const allClassesToRemove = Object.values(fontOptions)
      .map((f) => (f && f.class && typeof f.class === "string" ? f.class.split(" ")[0] : null))
      .filter(Boolean) as string[]
    if (allClassesToRemove.length > 0) {
      document.body.classList.remove(...allClassesToRemove)
    }
    if (currentHeadingFontData && currentHeadingFontData.class && typeof currentHeadingFontData.class === "string") {
      document.body.classList.add(currentHeadingFontData.class.split(" ")[0])
    }
    if (currentBodyFontData && currentBodyFontData.class && typeof currentBodyFontData.class === "string") {
      document.body.classList.add(currentBodyFontData.class.split(" ")[0])
    }

    // Apply all theme colors as CSS variables
    root.style.setProperty("--background", hexToHslString(themeColors.background))
    root.style.setProperty("--foreground", hexToHslString(themeColors.foreground))
    root.style.setProperty("--card", hexToHslString(themeColors.card))
    root.style.setProperty("--card-foreground", hexToHslString(themeColors.cardForeground))
    root.style.setProperty("--popover", hexToHslString(themeColors.popover))
    root.style.setProperty("--popover-foreground", hexToHslString(themeColors.popoverForeground))
    root.style.setProperty("--primary", hexToHslString(themeColors.primary))
    root.style.setProperty("--primary-foreground", hexToHslString(themeColors.primaryForeground))
    root.style.setProperty("--secondary", hexToHslString(themeColors.secondary))
    root.style.setProperty("--secondary-foreground", hexToHslString(themeColors.secondaryForeground))
    root.style.setProperty("--muted", hexToHslString(themeColors.muted))
    root.style.setProperty("--muted-foreground", hexToHslString(themeColors.mutedForeground))
    root.style.setProperty("--accent", hexToHslString(themeColors.accent))
    root.style.setProperty("--accent-foreground", hexToHslString(themeColors.accentForeground))
    root.style.setProperty("--destructive", hexToHslString(themeColors.destructive))
    root.style.setProperty("--destructive-foreground", hexToHslString(themeColors.destructiveForeground))
    root.style.setProperty("--border", hexToHslString(themeColors.border))
    root.style.setProperty("--input", hexToHslString(themeColors.input))
    root.style.setProperty("--ring", hexToHslString(themeColors.ring))
  }, [headingFont, bodyFont, themeColors])

  return (
    <ThemeContext.Provider
      value={{
        headingFont,
        bodyFont,
        setHeadingFont,
        setBodyFont,
        getHeadingClass,
        getBodyClass,
        themeColors,
        setThemeColors,
        resetThemeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
