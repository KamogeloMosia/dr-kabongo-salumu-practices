"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/context/theme-provider"
import { motion } from "framer-motion"
import Header from "@/components/header"
import { generateFAQ, FAQ } from "@/lib/ai-content"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadFAQ() {
      try {
        const faqData = await generateFAQ()
        setFaqs(faqData)
      } catch (err) {
        console.error("Error loading FAQ:", err)
        setError("Failed to load FAQ content")
      } finally {
        setLoading(false)
      }
    }

    loadFAQ()
  }, [])

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = []
    }
    acc[faq.category].push(faq)
    return acc
  }, {} as Record<string, FAQ[]>)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container max-w-screen-lg mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className={`mt-4 text-gray-600 ${getBodyClass()}`}>Loading FAQ...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container max-w-screen-lg mx-auto px-4 py-20">
          <div className="text-center">
            <p className={`text-red-600 ${getBodyClass()}`}>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container max-w-screen-lg mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className={`inline-block px-3 py-1 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold mb-3 md:mb-4 tracking-widest uppercase ${getBodyClass()}`}>
              FAQ
            </span>
            <h1 className={`text-2xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 tracking-tight leading-tight ${getHeadingClass()}`}>
              Frequently Asked Questions
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 max-w-xs md:max-w-2xl mx-auto leading-relaxed ${getBodyClass()}`}>
              Find answers to common questions about our medical practice, services, and policies
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-10 md:py-20">
        <div className="container max-w-screen-lg mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {Object.entries(groupedFaqs).map(([category, categoryFaqs], index) => (
              <motion.div key={category} className="mb-8 md:mb-12" variants={fadeIn}>
                <h2 className={`text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 text-left ${getHeadingClass()}`}>
                  {category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {categoryFaqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`} className="border-b border-gray-200">
                      <AccordionTrigger className={`text-left py-4 md:py-6 hover:no-underline ${getBodyClass()}`}>
                        <span className="text-sm md:text-base font-medium text-black pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 md:pb-6">
                        <p className={`text-sm md:text-base text-gray-600 leading-relaxed ${getBodyClass()}`}>
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 md:mt-16 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl max-w-md mx-auto">
              <h3 className={`text-lg md:text-xl font-bold text-black mb-3 md:mb-4 ${getHeadingClass()}`}>
                Still Have Questions?
              </h3>
              <p className={`text-sm md:text-base text-gray-600 mb-4 md:mb-6 ${getBodyClass()}`}>
                Can't find what you're looking for? Contact us directly for personalized assistance.
              </p>
              <div className="space-y-2 md:space-y-3">
                <p className={`text-sm md:text-base text-black font-medium ${getBodyClass()}`}>
                  📞 +27 83 587 5879
                </p>
                <p className={`text-sm md:text-base text-gray-600 ${getBodyClass()}`}>
                  📍 Medi Centre, 14 Central Avenue, Kempton Park
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 