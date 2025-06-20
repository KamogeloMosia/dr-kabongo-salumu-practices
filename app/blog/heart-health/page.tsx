"use client"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"

export default function HeartHealthPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        <h1 className={`text-2xl md:text-4xl font-bold text-black mb-3 text-left ${getHeadingClass()}`}>Heart Health Basics</h1>
        <p className={`text-sm md:text-lg text-gray-600 mb-4 max-w-2xl text-left ${getBodyClass()}`}>Learn how to keep your heart healthy with simple lifestyle changes and regular check-ups.</p>
        <div className="prose max-w-2xl text-gray-800 mb-8 text-left">
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
        <Link href="/blog" className="text-primary text-xs font-medium text-left">← Back to Blog</Link>
      </div>
    </div>
  )
} 