'use client'
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"
import { useState } from "react"
import type { ReactElement } from "react"

// Article type
interface Article {
  key: string
  icon: string
  title: string
  summary: string
  content: ReactElement
  readTime: string
}

const articles: Article[] = [
  {
    key: "heart-health",
    icon: "favorite",
    title: "Heart Health Basics",
    summary: "How to keep your heart healthy with simple lifestyle changes and regular check-ups.",
    readTime: "3 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
        <h2>Why Heart Health Matters</h2>
        <p>Your heart is the engine of your body. Keeping it healthy is key to a long, active life.</p>
        <h3>Tips for a Healthy Heart</h3>
        <ul>
          <li>Eat a balanced diet rich in fruits, vegetables, and whole grains.</li>
          <li>Exercise regularly—aim for at least 30 minutes most days.</li>
          <li>Avoid smoking and limit alcohol.</li>
          <li>Manage stress with relaxation techniques.</li>
          <li>Get regular check-ups with your doctor.</li>
        </ul>
        <h3>When to See a Doctor</h3>
        <p>If you experience chest pain, shortness of breath, or unusual fatigue, consult a healthcare professional promptly.</p>
      </div>
    ),
  },
  {
    key: "vaccination-facts",
    icon: "vaccines",
    title: "Vaccination Facts",
    summary: "Why vaccines matter for you and your family, and how they protect our community.",
    readTime: "2 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
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
    ),
  },
  {
    key: "mental-wellness",
    icon: "psychology",
    title: "Mental Wellness",
    summary: "Tips for managing stress, improving sleep, and supporting your mental health.",
    readTime: "2 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
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
    ),
  },
]

export default function BlogPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="text-center sm:text-left space-y-3 md:space-y-6 mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold mb-2 tracking-widest uppercase">Blog</span>
          <h1 className={`text-2xl md:text-4xl font-bold text-black text-left leading-relaxed ${getHeadingClass()}`}>Health Articles & Tips</h1>
          <p className={`text-sm md:text-base text-gray-600 max-w-md md:max-w-2xl mx-auto sm:mx-0 text-left leading-relaxed ${getBodyClass()}`}>Browse our latest articles on health, wellness, and medical topics.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {articles.map((article) => (
            <Link
              key={article.key}
              href={`/blog/${article.key}`}
              className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col text-left mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition hover:shadow-md"
              aria-label={`Read article: ${article.title}`}
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-3 self-center sm:self-start">{article.icon}</span>
              <h2 className={`font-semibold text-base md:text-lg mb-2 text-left leading-relaxed ${getHeadingClass()}`}>{article.title}</h2>
              <p className={`text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 text-left leading-relaxed ${getBodyClass()}`}>{article.summary}</p>
              <span className="text-primary text-xs font-medium mt-auto underline">Read More</span>
            </Link>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-12 mb-16 px-4 md:px-6">
          <h2 className="font-bold text-lg md:text-2xl mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-primary">help</span> Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <summary className="font-semibold text-sm md:text-base cursor-pointer">How do I book an appointment?</summary>
              <p className="mt-2 text-xs md:text-sm text-gray-700">You can call the practice directly or use the WhatsApp button on the site to start a conversation and book your appointment.</p>
            </details>
            <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <summary className="font-semibold text-sm md:text-base cursor-pointer">What medical aids do you accept?</summary>
              <p className="mt-2 text-xs md:text-sm text-gray-700">We accept most major South African medical aids. Please contact us to confirm if yours is accepted.</p>
            </details>
            <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <summary className="font-semibold text-sm md:text-base cursor-pointer">Can I get a repeat prescription?</summary>
              <p className="mt-2 text-xs md:text-sm text-gray-700">Yes, repeat prescriptions are available for ongoing treatments. Please contact the practice for details.</p>
            </details>
            <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <summary className="font-semibold text-sm md:text-base cursor-pointer">Do you offer emergency care?</summary>
              <p className="mt-2 text-xs md:text-sm text-gray-700">Yes, emergency care is available. For urgent cases, please call the emergency number listed on the contact page.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
} 