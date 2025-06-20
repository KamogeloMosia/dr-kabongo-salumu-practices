"use client"

import Link from "next/link"
import { useTheme } from "@/context/theme-provider"

export default function MentalWellnessPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        <h1 className={`text-2xl md:text-4xl font-bold text-black mb-3 text-left ${getHeadingClass()}`}>Mental Wellness</h1>
        <p className={`text-sm md:text-lg text-gray-600 mb-4 max-w-2xl text-left ${getBodyClass()}`}>Tips for managing stress, improving sleep, and supporting your mental health.</p>
        <div className="prose max-w-2xl text-gray-800 mb-8 text-left">
          <h2>Why Mental Wellness Matters</h2>
          <p>Mental health is just as important as physical health. Taking care of your mind helps you live a happier, more balanced life.</p>
          <h3>Tips for Mental Wellness</h3>
          <ul>
            <li>Practice mindfulness or meditation daily.</li>
            <li>Get enough sleep and maintain a regular routine.</li>
            <li>Stay connected with friends and family.</li>
            <li>Exercise regularly to boost your mood.</li>
            <li>Don't hesitate to seek help from a professional if needed.</li>
          </ul>
          <h3>When to Seek Help</h3>
          <p>If you feel persistently sad, anxious, or overwhelmed, reach out to a mental health professional for support.</p>
        </div>
        <Link href="/blog" className="text-primary text-xs font-medium text-left">← Back to Blog</Link>
      </div>
    </div>
  )
} 