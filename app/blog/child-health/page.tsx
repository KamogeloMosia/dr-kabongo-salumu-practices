"use client"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function ChildHealthPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-2xl md:text-4xl font-bold text-black mb-4 text-left ${getHeadingClass()}`}>
              Child Health: Essential Care for Growing Families
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 mb-6 max-w-3xl text-left ${getBodyClass()}`}>
              Comprehensive guide to child health, from newborn care to adolescent development, including nutrition, safety, and when to seek medical attention.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>By Dr. Kabongo Salumu</span>
              <span>•</span>
              <span>January 20, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className={`prose max-w-none text-gray-800 leading-relaxed ${getBodyClass()}`}>
            <p className="text-lg mb-6">
              Raising healthy children is one of life's most important responsibilities. Understanding child health basics helps parents make informed decisions and provide the best care for their children.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Newborn Care (0-3 months)</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Feeding</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Breastfeeding:</strong> Recommended exclusively for first 6 months</li>
              <li><strong>Formula feeding:</strong> Safe alternative if breastfeeding isn't possible</li>
              <li><strong>Feeding frequency:</strong> Every 2-3 hours, including at night</li>
              <li><strong>Signs of adequate feeding:</strong> 6+ wet diapers daily, steady weight gain</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Sleep</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Safe sleep practices:</strong> Back to sleep, firm mattress, no soft bedding</li>
              <li><strong>Sleep patterns:</strong> 14-17 hours daily, waking every 2-4 hours</li>
              <li><strong>Room sharing:</strong> Recommended for first 6 months</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Development Milestones</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>1 month:</strong> Lifts head briefly, follows objects with eyes</li>
              <li><strong>2 months:</strong> Smiles, makes cooing sounds</li>
              <li><strong>3 months:</strong> Holds head steady, reaches for objects</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Infant Care (4-12 months)</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Nutrition</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>4-6 months:</strong> Introduce solid foods gradually</li>
              <li><strong>First foods:</strong> Iron-fortified cereals, pureed fruits/vegetables</li>
              <li><strong>6-12 months:</strong> Variety of foods, avoid honey and cow's milk</li>
              <li><strong>Breastfeeding:</strong> Continue alongside solid foods</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Safety</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Baby-proofing:</strong> Secure furniture, cover outlets, lock cabinets</li>
              <li><strong>Car seats:</strong> Rear-facing until at least 2 years</li>
              <li><strong>Supervision:</strong> Never leave alone in bath or high places</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Toddler Years (1-3 years)</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Nutrition</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Balanced meals:</strong> Fruits, vegetables, proteins, whole grains</li>
              <li><strong>Portion sizes:</strong> 1 tablespoon per year of age</li>
              <li><strong>Healthy snacks:</strong> Limit processed foods and sugary drinks</li>
              <li><strong>Mealtime:</strong> Establish routines, eat together as family</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Development</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Language:</strong> Rapid vocabulary growth</li>
              <li><strong>Motor skills:</strong> Running, climbing, drawing</li>
              <li><strong>Social skills:</strong> Parallel play, sharing (with guidance)</li>
              <li><strong>Independence:</strong> "Me do it" phase</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>When to Seek Medical Attention</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Emergency Situations</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Difficulty breathing</li>
              <li>Severe injury or bleeding</li>
              <li>Unconsciousness</li>
              <li>Seizures</li>
              <li>Severe allergic reactions</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Urgent Care Needed</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>High fever (especially in infants)</li>
              <li>Persistent vomiting or diarrhea</li>
              <li>Dehydration signs</li>
              <li>Severe pain</li>
              <li>Unusual behavior changes</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Building Healthy Habits</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Nutrition</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Family meals when possible</li>
              <li>Healthy food choices</li>
              <li>Proper portion sizes</li>
              <li>Limited sugary drinks and snacks</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Physical Activity</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Daily exercise</li>
              <li>Outdoor play</li>
              <li>Sports participation</li>
              <li>Active family activities</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Sleep</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Consistent bedtime routine</li>
              <li>Adequate sleep duration</li>
              <li>Screen-free time before bed</li>
              <li>Comfortable sleep environment</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className={`text-lg font-medium text-black mb-2 ${getHeadingClass()}`}>
                Remember
              </p>
              <p className={`text-gray-700 ${getBodyClass()}`}>
                Every child develops at their own pace. Trust your instincts as a parent, and don't hesitate to ask your healthcare provider questions. Your child's health and well-being are worth the attention and care you provide.
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