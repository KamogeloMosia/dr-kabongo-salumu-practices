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
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <motion.div style={{ opacity, scale }} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div className="mb-6" variants={fadeIn}>
              <span
                className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 ${getBodyClass()}`}
              >
                General Practitioner • Kempton Park
              </span>
            </motion.div>
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 ${getHeadingClass()}`}
              variants={fadeIn}
            >
              Dr. Kabongo Salumu
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed ${getBodyClass()}`}
              variants={fadeIn}
            >
              Over 20 years of dedicated medical care at Arwyp Medical Centre
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeIn}>
              <Button
                asChild
                className={`px-6 py-3 border-2 border-primary bg-primary text-primary-foreground font-medium rounded-full hover:bg-white hover:text-black hover:border-black transition-all text-sm shadow-lg ${getBodyClass()}`}
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
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Image
                  src="/images/Medical research-pana.png"
                  alt="About Dr. Kabongo Salumu"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md w-full max-w-xs h-auto object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <span
                  className={`inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 mb-4 tracking-widest uppercase ${getBodyClass()}`}
                >
                  ABOUT
                </span>
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight leading-tight ${getHeadingClass()}`}
                >
                  About Dr. Kabongo Salumu
                </h2>
                <p className={`text-lg text-gray-600 max-w-3xl leading-relaxed ${getBodyClass()}`}>
                  Dedicated to providing exceptional healthcare with compassion, expertise, and a commitment to your
                  well-being
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
                    In addition to his general practice, Dr. Salumu also dedicates time to the Casualty Unit of Arwyp
                    Medical Centre, providing critical care and emergency medical services to those in urgent need.
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

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" variants={fadeIn}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-full w-fit mb-4">
                  <span className="material-symbols-outlined text-gray-600">calendar_month</span>
                </div>
                <h4 className={`font-bold text-lg mb-2 ${getHeadingClass()}`}>20+ Years</h4>
                <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                  Experience in general practice medicine since 2001
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-full w-fit mb-4">
                  <span className="material-symbols-outlined text-gray-600">stethoscope</span>
                </div>
                <h4 className={`font-bold text-lg mb-2 ${getHeadingClass()}`}>International Training</h4>
                <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                  Medical degree obtained through international studies
                </p>
              </div>

              <motion.div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-full w-fit mb-4">
                  <span className="material-symbols-outlined text-gray-600">emergency</span>
                </div>
                <h4 className={`font-bold text-lg mb-2 ${getHeadingClass()}`}>Emergency Care</h4>
                <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                  Casualty unit expertise at Arwyp Medical Centre
                </p>
              </motion.div>
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
                        Primary Location - Arwyp Medical Centre
                      </h4>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">location_on</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          20 Pine Avenue, Kempton Park, 1619, Gauteng, South Africa
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">call</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>+27 83 587 5879</p>
                      </div>
                      <p className={`text-gray-500 text-xs mt-2 ${getBodyClass()}`}>Casualty Unit & General Practice</p>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Alternative Location</h4>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="material-symbols-outlined text-gray-500 mt-1 flex-shrink-0">location_on</span>
                        <p className={`text-gray-600 text-sm ${getBodyClass()}`}>
                          14 Central Avenue, Kempton Park Central
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
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Acute Care</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Chronic Disease</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Preventive Care</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Emergency Care</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Family Medicine</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className={`text-sm font-medium text-gray-700 ${getBodyClass()}`}>Minor Procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-12" variants={fadeIn}>
              <Button
                asChild
                className={`px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all transform hover:scale-105 shadow-lg text-sm group ${getBodyClass()}`}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  Casualty unit services at Arwyp Medical Centre for urgent medical situations and emergencies.
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
                  className={`px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all group text-sm ${getBodyClass()}`}
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
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Arwyp Medical Centre</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <span className="material-symbols-outlined text-gray-600 mt-1 flex-shrink-0">
                            location_on
                          </span>
                          <div>
                            <p className={`text-gray-700 ${getBodyClass()}`}>20 Pine Avenue</p>
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
                        Casualty Unit & General Practice
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
                        <p className={`text-gray-700 ${getBodyClass()}`}>14 Central Avenue</p>
                        <p className={`text-gray-700 ${getBodyClass()}`}>Kempton Park Central</p>
                        <p className={`text-gray-700 ${getBodyClass()}`}>Kempton Park</p>
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
                      <h4 className={`font-semibold text-black mb-2 ${getBodyClass()}`}>Arwyp Medical Centre</h4>
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