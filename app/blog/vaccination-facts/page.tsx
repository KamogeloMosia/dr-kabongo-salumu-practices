import Link from "next/link"
import { useTheme } from "@/context/theme-provider"

export default function VaccinationFactsPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        <h1 className={`text-2xl md:text-4xl font-bold text-black mb-3 text-left ${getHeadingClass()}`}>Vaccination Facts</h1>
        <p className={`text-sm md:text-lg text-gray-600 mb-4 max-w-2xl text-left ${getBodyClass()}`}>Why vaccines matter for you and your family, and how they protect our community.</p>
        <div className="prose max-w-2xl text-gray-800 mb-8 text-left">
          <h2>What Are Vaccines?</h2>
          <p>Vaccines help your body build immunity to diseases without getting sick first. They are safe, effective, and save lives.</p>
          <h3>Key Facts</h3>
          <ul>
            <li>Vaccines protect you and those around you.</li>
            <li>They are thoroughly tested for safety.</li>
            <li>Side effects are usually mild and temporary.</li>
            <li>Staying up to date with vaccines is important for all ages.</li>
          </ul>
          <h3>Common Questions</h3>
          <p>If you have questions about vaccines, talk to your healthcare provider for personalized advice.</p>
        </div>
        <Link href="/blog" className="text-primary text-xs font-medium text-left">← Back to Blog</Link>
      </div>
    </div>
  )
} 