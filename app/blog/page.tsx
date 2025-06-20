"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/context/theme-provider"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Link from "next/link"
import { generateMedicalArticles, Article } from "@/lib/ai-content"

export default function BlogPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticles() {
      try {
        const articleData = await generateMedicalArticles()
        setArticles(articleData)
      } catch (err) {
        console.error("Error loading articles:", err)
        setError("Failed to load articles")
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

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
        staggerChildren: 0.2,
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
            <p className={`mt-4 text-gray-600 ${getBodyClass()}`}>Loading articles...</p>
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
              Blog
            </span>
            <h1 className={`text-2xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 tracking-tight leading-tight ${getHeadingClass()}`}>
              Health Articles & Tips
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 max-w-xs md:max-w-2xl mx-auto leading-relaxed ${getBodyClass()}`}>
              Stay informed with the latest health information and wellness tips relevant to South Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-10 md:py-20">
        <div className="container max-w-screen-lg mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 md:mb-6">
                  <span className={`inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium ${getBodyClass()}`}>
                    {article.category}
                  </span>
                  <span className={`text-xs text-gray-500 ml-2 ${getBodyClass()}`}>
                    {article.date}
                  </span>
                </div>
                
                <h2 className={`text-lg md:text-xl font-bold text-black mb-3 md:mb-4 leading-tight ${getHeadingClass()}`}>
                  {article.title}
                </h2>
                
                <p className={`text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed line-clamp-4 ${getBodyClass()}`}>
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs text-gray-500 ${getBodyClass()}`}>
                    {article.content.split(' ').length} words
                  </span>
                  <Link 
                    href={`/blog/article/${index}`}
                    className={`text-primary text-sm font-medium hover:underline ${getBodyClass()}`}
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Additional Blog Categories */}
          <motion.div
            className="mt-12 md:mt-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className={`text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-left ${getHeadingClass()}`}>
              Health Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Heart Health", icon: "favorite", href: "/blog/heart-health" },
                { title: "Mental Wellness", icon: "psychology", href: "/blog/mental-wellness" },
                { title: "Vaccinations", icon: "vaccines", href: "/blog/vaccination-facts" },
                { title: "Child Health", icon: "child_care", href: "/blog/child-health" }
              ].map((topic, index) => (
                <Link
                  key={index}
                  href={topic.href}
                  className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:bg-gray-100 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl mb-2 md:mb-3 block">
                    {topic.icon}
                  </span>
                  <h3 className={`text-sm md:text-base font-medium text-black ${getBodyClass()}`}>
                    {topic.title}
                  </h3>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-12 md:mt-16 bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h3 className={`text-lg md:text-xl font-bold text-black mb-3 md:mb-4 ${getHeadingClass()}`}>
              Stay Updated
            </h3>
            <p className={`text-sm md:text-base text-gray-600 mb-4 md:mb-6 ${getBodyClass()}`}>
              Get the latest health tips and medical news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/80 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 