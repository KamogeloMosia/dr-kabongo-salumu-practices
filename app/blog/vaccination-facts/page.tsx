"use client"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function VaccinationFactsPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container max-w-screen-md mx-auto px-4 md:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block">← Back to Blog</Link>
        <h1 className={`text-xl md:text-2xl font-bold text-black mb-4 ${getHeadingClass()}`}>Vaccination Facts</h1>
        <p className={`text-base md:text-lg text-gray-700 mb-6 max-w-2xl ${getBodyClass()}`}>Why vaccines matter for you and your family, and how they protect our community.</p>
        <div className="prose max-w-2xl text-gray-800 mb-8 text-base md:text-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">What Are Vaccines?</h2>
          <p>Vaccines help your body build immunity to diseases without getting sick first. They are safe, effective, and save lives.</p>
          <h3 className="text-base md:text-lg font-semibold mt-4 mb-2">Key Facts</h3>
          <ul>
            <li>Vaccines protect you and those around you.</li>
            <li>They are thoroughly tested for safety.</li>
            <li>Side effects are usually mild and temporary.</li>
            <li>Staying up to date with vaccines is important for all ages.</li>
          </ul>
          <h3 className="text-base md:text-lg font-semibold mt-4 mb-2">Common Questions</h3>
          <p>If you have questions about vaccines, talk to your healthcare provider for personalized advice.</p>
        </div>
        <Link href="/blog" className="text-primary text-xs font-medium">← Back to Blog</Link>
      </div>
    </div>
  )
} 