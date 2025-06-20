"use client"

import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function MentalWellnessPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-2xl md:text-4xl font-bold text-black mb-4 text-left ${getHeadingClass()}`}>
              Mental Wellness: Building Resilience in Daily Life
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 mb-6 max-w-3xl text-left ${getBodyClass()}`}>
              Explore practical strategies for maintaining mental health, managing stress, and building emotional resilience in today's fast-paced world.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>By Dr. Kabongo Salumu</span>
              <span>•</span>
              <span>January 10, 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className={`prose max-w-none text-gray-800 leading-relaxed ${getBodyClass()}`}>
            <p className="text-lg mb-6">
              Mental wellness is just as important as physical health, yet it's often overlooked. In our busy lives, taking time to care for our mental health is essential for overall well-being and quality of life.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Understanding Mental Wellness</h2>
            <p className="mb-6">
              Mental wellness encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing how we handle stress, relate to others, and make choices.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Common Mental Health Challenges</h2>
            <p className="mb-4">Many people experience mental health challenges at some point:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Anxiety:</strong> Excessive worry and fear</li>
              <li><strong>Depression:</strong> Persistent sadness and loss of interest</li>
              <li><strong>Stress:</strong> Overwhelm from daily pressures</li>
              <li><strong>Sleep problems:</strong> Difficulty falling or staying asleep</li>
              <li><strong>Burnout:</strong> Physical and emotional exhaustion</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Building Mental Resilience</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>1. Practice Self-Care</h3>
            <p className="mb-3">Make time for activities that bring you joy:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Engage in hobbies you enjoy</li>
              <li>Spend time in nature</li>
              <li>Practice mindfulness or meditation</li>
              <li>Take regular breaks from work</li>
              <li>Prioritize adequate sleep</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>2. Maintain Social Connections</h3>
            <p className="mb-3">Strong relationships support mental health:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Stay connected with family and friends</li>
              <li>Join community groups or clubs</li>
              <li>Volunteer in your community</li>
              <li>Seek support when needed</li>
              <li>Be there for others</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>3. Develop Healthy Coping Skills</h3>
            <p className="mb-3">Learn to manage stress effectively:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Deep breathing exercises</li>
              <li>Progressive muscle relaxation</li>
              <li>Journaling your thoughts and feelings</li>
              <li>Physical exercise</li>
              <li>Creative expression (art, music, writing)</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>4. Establish Healthy Routines</h3>
            <p className="mb-3">Consistency helps maintain mental balance:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Regular sleep schedule</li>
              <li>Balanced meals at regular times</li>
              <li>Daily physical activity</li>
              <li>Time for relaxation</li>
              <li>Limiting screen time</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>When to Seek Professional Help</h2>
            <p className="mb-4">Consider professional support if you experience:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Persistent sadness or anxiety</li>
              <li>Difficulty functioning at work or home</li>
              <li>Changes in sleep or appetite</li>
              <li>Thoughts of self-harm</li>
              <li>Substance use to cope</li>
              <li>Withdrawal from activities you once enjoyed</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Breaking the Stigma</h2>
            <p className="mb-4">Mental health challenges are common and treatable:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Talk openly about mental health</li>
              <li>Educate yourself and others</li>
              <li>Support those struggling</li>
              <li>Seek help without shame</li>
              <li>Remember: asking for help is a sign of strength</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Resources for Support</h2>
            <p className="mb-4">If you're struggling, help is available:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Speak with your healthcare provider</li>
              <li>Contact mental health professionals</li>
              <li>Reach out to support groups</li>
              <li>Use crisis helplines if needed</li>
              <li>Talk to trusted friends or family</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className={`text-lg font-medium text-black mb-2 ${getHeadingClass()}`}>
                Remember
              </p>
              <p className={`text-gray-700 ${getBodyClass()}`}>
                Mental wellness is a journey, not a destination. Be patient with yourself and celebrate small progress. Your mental health matters, and taking care of it is one of the most important things you can do for yourself and those around you.
              </p>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-primary text-sm font-medium hover:underline">← Back to Blog</Link>
          </footer>
        </article>
      </div>
    </div>
  )
} 