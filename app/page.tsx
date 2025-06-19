"use client"

import { useTheme } from "@/context/theme-provider"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/header"
import Image from "next/image"

export default function HomePage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Background images for the slideshow
  const backgroundImages = [
    "/images/Medical research-pana.png",
    "/images/Retroviruses-pana.png",
    "/images/Hospital wheelchair-amico.png",
    "/images/Retroviruses-cuate.png",
    "/images/Medical care-pana.png",
    "/images/Nursing home-pana.png",
    "/images/Medicine-rafiki.png",
    "/images/Doctors-pana.png",
  ]

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Animation variants
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

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
        ></div>
        {/* Dark Overlay - increase opacity for better text visibility */}
        <div className="absolute inset-0 bg-black/75"></div>
        {/* Hero Content */}
        <motion.div style={{ opacity, scale }} className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <motion.div className="max-w-2xl md:max-w-4xl" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div className="mb-4 md:mb-6" variants={fadeIn}>
              <span
                className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white mb-4 ${getBodyClass()}`}
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
              >
                General Practitioner • Kempton Park
              </span>
            </motion.div>
            <motion.h1
              className={`text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 md:mb-6 ${getHeadingClass()}`}
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
              variants={fadeIn}
            >
              Dr. Kabongo Salumu
            </motion.h1>
            <motion.p
              className={`text-base md:text-xl text-white/90 max-w-xs md:max-w-2xl mb-6 md:mb-8 leading-relaxed line-clamp-2 md:line-clamp-none ${getBodyClass()}`}
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
              variants={fadeIn}
            >
              20+ years of dedicated medical care in Kempton Park
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4" variants={fadeIn}>
              <Button
                asChild
                className={`w-full sm:w-auto px-4 py-2 border-2 border-primary bg-primary text-primary-foreground font-medium rounded-full hover:bg-white hover:text-black hover:border-black transition-all text-sm ${getBodyClass()}`}
              >
                <Link href="/contact">
                  Book Appointment
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:scale-110 transition-transform">
                    calendar_month
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-20 bg-white">
        <div className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10 md:mb-16">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Image
                  src="/images/Medical research-pana.png"
                  alt="About Dr. Kabongo Salumu"
                  width={300}
                  height={400}
                  className="w-full h-auto mx-auto"
                  priority
                />
              </div>
              <div className="flex-1">
                <span
                  className={`inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 mb-2 md:mb-4 tracking-widest uppercase ${getBodyClass()}`}
                >
                  ABOUT
                </span>
                <h2
                  className={`text-2xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 tracking-tight leading-tight ${getHeadingClass()}`}
                >
                  About Dr. Kabongo Salumu
                </h2>
                <p className={`text-base md:text-lg text-gray-600 max-w-xs md:max-w-3xl leading-relaxed line-clamp-3 md:line-clamp-none ${getBodyClass()}`}>
                  Exceptional healthcare with compassion, expertise, and a commitment to your well-being.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div className="space-y-8" variants={fadeIn}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-4 ${getHeadingClass()}`}>Professional Journey</h3>
                  <p className={`text-gray-600 leading-relaxed mb-4 ${getBodyClass()}`}>
                    Dr. Kabongo Salumu has been serving the Johannesburg and Kempton Park communities for over 20 years,
                    bringing a wealth of knowledge and experience to general practice medicine. His journey began with
                    obtaining his medical degree through international studies and has evolved into a practice built on
                    trust, expertise, and genuine care for each patient.
                  </p>
                  <p className={`text-gray-600 leading-relaxed ${getBodyClass()}`}>
                    In addition to his general practice, Dr. Salumu also dedicates time to emergency care,
                    providing critical care and emergency medical services to those in urgent need.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-8" variants={fadeIn}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-4 ${getHeadingClass()}`}>Medical Philosophy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-full mt-1">
                        <span className="material-symbols-outlined text-gray-600">group</span>
                      </div>
                      <div>
                        <p className={`font-medium text-black ${getBodyClass()}`}>Patient-Centered Care</p>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          Every patient deserves personalized care that addresses their unique needs and concerns
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-full mt-1">
                        <span className="material-symbols-outlined text-gray-600">verified</span>
                      </div>
                      <div>
                        <p className={`font-medium text-black ${getBodyClass()}`}>Evidence-Based Practice</p>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          Committed to staying current with the latest medical research and treatment protocols
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-full mt-1">
                        <span className="material-symbols-outlined text-gray-600">monitoring</span>
                      </div>
                      <div>
                        <p className={`font-medium text-black ${getBodyClass()}`}>Comprehensive Care</p>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          From preventive care to emergency treatment, providing complete healthcare solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={fadeIn}>
              {/* Example Card: 20+ Years */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">calendar_month</span>
                <h4 className={`font-bold text-base mb-1 ${getHeadingClass()}`}>20+ Years</h4>
                <p className={`text-gray-600 text-xs ${getBodyClass()}`}>Experience since 2001</p>
              </div>
              {/* Example Card: International Training */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">stethoscope</span>
                <h4 className={`font-bold text-base mb-1 ${getHeadingClass()}`}>International Training</h4>
                <p className={`text-gray-600 text-xs ${getBodyClass()}`}>Global medical degree</p>
              </div>
              {/* Example Card: Emergency Care */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-200 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">emergency</span>
                <h4 className={`font-bold text-base mb-1 ${getHeadingClass()}`}>Emergency Care</h4>
                <p className={`text-gray-600 text-xs ${getBodyClass()}`}>24/7 medical help</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className={`font-bold text-xl mb-4 ${getHeadingClass()}`}>Practice Locations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>
                        Primary Location
                      </h4>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">location_on</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          Medi Centre, 14 Central Avenue, Kempton Park 1619, Gauteng, South Africa
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">call</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>+27 83 587 5879</p>
                      </div>
                      <p className={`text-gray-500 text-xs mt-2 ${getBodyClass()}`}>General Practice & Emergency Care</p>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Alternative Location</h4>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">location_on</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          Medi Centre, 14 Central Avenue, Kempton Park 1619
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">call</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>+27 83 587 5879</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className={`font-bold text-xl mb-4 ${getHeadingClass()}`}>Services Overview</h3>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
                    {/* Acute Care */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">healing</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Acute Care</span>
                    </div>
                    {/* Chronic Disease */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">verified</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Chronic Disease</span>
                    </div>
                    {/* Preventive Care */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">schedule</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Preventive Care</span>
                    </div>
                    {/* Emergency Care */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">emergency</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Emergency</span>
                    </div>
                    {/* Family Medicine */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">group</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Family Medicine</span>
                    </div>
                    {/* Minor Procedures */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary mb-1 text-2xl">medical_services</span>
                      <span className={`font-medium text-xs text-gray-700 ${getBodyClass()}`}>Minor Procedures</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-12" variants={fadeIn}>
              <Button
                asChild
                className={`w-full sm:w-auto px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all text-sm group ${getBodyClass()}`}
              >
                <Link href="/contact" className="flex items-center">
                  Contact Dr. Salumu
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:scale-110 transition-transform">
                    call
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="mb-16" variants={fadeIn}>
              <span
                className={`inline-block px-4 py-2 bg-black rounded-full text-xs font-bold text-white mb-4 tracking-widest uppercase ${getBodyClass()}`}
              >
                SERVICES
              </span>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight leading-tight ${getHeadingClass()}`}
              >
                Comprehensive Medical Care
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl leading-relaxed ${getBodyClass()}`}>
                From routine check-ups to emergency care, providing complete healthcare solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">healing</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Acute Care Management
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  Immediate treatment for sudden illnesses, infections, and injuries with prompt diagnosis and care.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• Fever and flu treatment</li>
                  <li>• Wound care and minor injuries</li>
                  <li>• Respiratory infections</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">verified</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Chronic Disease Management
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  Ongoing care and monitoring for long-term conditions with personalized treatment plans.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• Diabetes management</li>
                  <li>• Hypertension control</li>
                  <li>• Regular monitoring and follow-ups</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">schedule</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Preventive Care
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  Regular health screenings and preventive measures to maintain optimal health and early detection.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• Annual health check-ups</li>
                  <li>• Blood pressure and sugar screening</li>
                  <li>• Vaccinations and immunizations</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">medical_services</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Minor Procedures
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  In-office procedures and treatments for various conditions requiring immediate attention.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• Wound suturing and dressing</li>
                  <li>• Minor skin procedures</li>
                  <li>• ECG testing</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">group</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Family Medicine
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  Comprehensive healthcare for patients of all ages, from pediatric to geriatric care.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• Pediatric consultations</li>
                  <li>• Adult health management</li>
                  <li>• Elderly care services</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 p-4 rounded-full mb-6 w-fit group-hover:bg-gray-200 transition-colors">
                  <span className="material-symbols-outlined text-gray-600">emergency</span>
                </div>
                <h3 className={`font-bold text-lg tracking-tight leading-tight mb-3 ${getHeadingClass()}`}>
                  Emergency Care
                </h3>
                <p className={`text-gray-600 leading-relaxed text-sm mb-4 ${getBodyClass()}`}>
                  Emergency medical services for urgent medical situations and emergencies.
                </p>
                <ul className={`text-gray-500 text-xs space-y-1 ${getBodyClass()}`}>
                  <li>• 24/7 emergency response</li>
                  <li>• Trauma care</li>
                  <li>• Critical condition stabilization</li>
                </ul>
              </motion.div>
            </div>

            <motion.div className="mt-12" variants={fadeIn}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 max-w-2xl">
                <p className={`text-gray-600 text-sm mb-4 ${getBodyClass()}`}>
                  <strong>Note:</strong> This list provides an overview of general services. Please contact Dr. Salumu's
                  office directly to confirm specific services and availability.
                </p>
                <Button
                  asChild
                  className={`w-full sm:w-auto px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all text-sm group ${getBodyClass()}`}
                >
                  <Link href="/contact" className="flex items-center">
                    Contact for Services
                    <span className="material-symbols-outlined ml-2 text-sm group-hover:scale-110 transition-transform">
                      call
                    </span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="py-10 md:py-20 bg-gray-100">
        <div className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-12">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold mb-2 tracking-widest uppercase">Blog</span>
            <h2 className={`text-2xl md:text-4xl font-bold text-black ${getHeadingClass()}`}>Health Articles & Tips</h2>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto ${getBodyClass()}`}>Explore our latest articles on health, wellness, and medical topics.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-6">
            {/* Blog post previews (static for now) */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col">
              <span className="material-symbols-outlined text-primary text-3xl mb-2 self-center">favorite</span>
              <h3 className={`font-semibold text-lg mb-1 ${getHeadingClass()}`}>Heart Health Basics</h3>
              <p className={`text-xs text-gray-600 mb-2 line-clamp-2 ${getBodyClass()}`}>Learn how to keep your heart healthy with simple lifestyle changes and regular check-ups.</p>
              <Link href="/blog/heart-health" className="text-primary text-xs font-medium mt-auto">Read More</Link>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col">
              <span className="material-symbols-outlined text-primary text-3xl mb-2 self-center">vaccines</span>
              <h3 className={`font-semibold text-lg mb-1 ${getHeadingClass()}`}>Vaccination Facts</h3>
              <p className={`text-xs text-gray-600 mb-2 line-clamp-2 ${getBodyClass()}`}>Why vaccines matter for you and your family, and how they protect our community.</p>
              <Link href="/blog/vaccination-facts" className="text-primary text-xs font-medium mt-auto">Read More</Link>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col">
              <span className="material-symbols-outlined text-primary text-3xl mb-2 self-center">psychology</span>
              <h3 className={`font-semibold text-lg mb-1 ${getHeadingClass()}`}>Mental Wellness</h3>
              <p className={`text-xs text-gray-600 mb-2 line-clamp-2 ${getBodyClass()}`}>Tips for managing stress, improving sleep, and supporting your mental health.</p>
              <Link href="/blog/mental-wellness" className="text-primary text-xs font-medium mt-auto">Read More</Link>
            </div>
          </div>
          <div className="text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white">
        <div className="container max-w-screen-lg md:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="mb-16" variants={fadeIn}>
              <span
                className={`inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 mb-4 tracking-widest uppercase ${getBodyClass()}`}
              >
                CONTACT
              </span>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight leading-tight ${getHeadingClass()}`}
              >
                Get In Touch
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl leading-relaxed ${getBodyClass()}`}>
                Schedule your appointment or contact us for any medical inquiries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div className="space-y-8" variants={fadeIn}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-6 ${getHeadingClass()}`}>Primary Practice Location</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Medical Practice</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <span className="material-symbols-outlined text-gray-600 mt-1 flex-shrink-0">
                            location_on
                          </span>
                          <div>
                            <p className={`text-gray-700 ${getBodyClass()}`}>Medi Centre</p>
                            <p className={`text-gray-700 ${getBodyClass()}`}>14 Central Avenue</p>
                            <p className={`text-gray-700 ${getBodyClass()}`}>Kempton Park, 1619</p>
                            <p className={`text-gray-700 ${getBodyClass()}`}>Gauteng, South Africa</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="material-symbols-outlined text-gray-600 flex-shrink-0">call</span>
                          <p className={`text-gray-700 font-medium ${getBodyClass()}`}>+27 83 587 5879</p>
                        </div>
                      </div>
                      <p className={`text-gray-600 text-sm mt-3 font-medium ${getBodyClass()}`}>
                        General Practice & Emergency Care
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-6 ${getHeadingClass()}`}>Alternative Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <span className="material-symbols-outlined text-gray-600 mt-1 flex-shrink-0">location_on</span>
                      <div>
                        <p className={`text-gray-700 ${getBodyClass()}`}>Medi Centre</p>
                        <p className={`text-gray-700 ${getBodyClass()}`}>14 Central Avenue</p>
                        <p className={`text-gray-700 ${getBodyClass()}`}>Kempton Park, 1619</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-gray-600 flex-shrink-0">call</span>
                      <p className={`text-gray-700 font-medium ${getBodyClass()}`}>+27 83 587 5879</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-8" variants={fadeIn}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-6 ${getHeadingClass()}`}>Emergency Contacts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Medical Centre</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="material-symbols-outlined text-gray-600 flex-shrink-0">call</span>
                          <div>
                            <p className={`text-gray-700 ${getBodyClass()}`}>General: +27 11 922 1000</p>
                            <p className={`text-gray-700 ${getBodyClass()}`}>Emergency: +27 11 922 1172</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className={`font-semibold text-gray-800 mb-2 ${getBodyClass()}`}>Medical Emergencies</h4>
                      <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                        For life-threatening emergencies, call <strong>10177</strong> for ambulance or{" "}
                        <strong>10111</strong> for police immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                  <h3 className={`font-bold text-xl mb-4 ${getHeadingClass()}`}>Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-gray-700 ${getBodyClass()}`}>Monday - Friday</span>
                      <span className={`text-gray-700 font-medium ${getBodyClass()}`}>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gray-700 ${getBodyClass()}`}>Saturday</span>
                      <span className={`text-gray-700 font-medium ${getBodyClass()}`}>8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gray-700 ${getBodyClass()}`}>Sunday</span>
                      <span className={`text-gray-700 font-medium ${getBodyClass()}`}>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}