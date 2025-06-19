"use client"

import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Heart, Shield, Users, Clock, Calendar, Activity, Baby, Eye, Syringe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

export default function ServicesPage() {
  const { getHeadingClass, getBodyClass } = useTheme()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center space-y-3 md:space-y-6 mb-6 md:mb-16">
            <Badge variant="outline" className={`text-black border-black ${getBodyClass()}`}>
              Comprehensive Healthcare Services at Medi Centre
            </Badge>
            <h1 className={`text-2xl md:text-4xl font-bold text-black leading-tight ${getHeadingClass()}`}>
              Our Services
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto leading-relaxed line-clamp-3 md:line-clamp-none ${getBodyClass()}`}>
              Comprehensive care for all ages at Medi Centre, 14 Central Avenue, Kempton Park 1619. See our main services below.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center space-y-2 md:space-y-4 mb-4 md:mb-12">
            <h2 className={`text-lg md:text-3xl font-bold text-black text-center sm:text-left ${getHeadingClass()}`}>Primary Care</h2>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto sm:mx-0 text-left line-clamp-2 md:line-clamp-none ${getBodyClass()}`}>
              General check-ups, chronic care, and preventive medicine.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Stethoscope className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Acute Care</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Treatment for sudden illnesses and injuries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Heart className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Chronic Disease</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Diabetes, hypertension, and other long-term conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Clock className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Prevention & Screening</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Check-ups, vaccines, and early detection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Shield className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Minor Procedures</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Mole removal, biopsies, wound care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Syringe className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Women's Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Exams, family planning, reproductive care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Activity className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Men's Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Screenings and care for men's health needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center space-y-2 md:space-y-4 mb-4 md:mb-12">
            <h2 className={`text-lg md:text-3xl font-bold text-black text-center sm:text-left ${getHeadingClass()}`}>Specialized Care</h2>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto sm:mx-0 text-left line-clamp-2 md:line-clamp-none ${getBodyClass()}`}>
              Pediatric, urgent, emergency, and travel medicine.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Users className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Pediatrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Care for children and teens.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Baby className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Urgent Care</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Same-day visits for minor issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Heart className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Emergency Care</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  24/7 emergency care available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Activity className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Sports Medicine</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Sports injury treatment and prevention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Eye className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Minor Procedures</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Biopsies, joint injections, wound care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Shield className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Travel Medicine</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Travel vaccines and advice.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center space-y-2 md:space-y-4 mb-4 md:mb-12">
            <h2 className={`text-lg md:text-3xl font-bold text-black ${getHeadingClass()}`}>Service Pricing</h2>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto ${getBodyClass()}`}>
              Transparent pricing for our healthcare services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Adult Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black mb-2">R600</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Comprehensive consultation for adult patients including examination and treatment plan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Children's Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black mb-2">R500</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Specialized consultation for children under 18 years including pediatric care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Follow-up Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black mb-2">R400</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Follow-up consultations for ongoing treatment and monitoring of existing conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Pregnancy Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black mb-2">R700</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Comprehensive prenatal care including examinations and pregnancy monitoring.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Slimming Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black mb-2">6 Week Program</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Comprehensive weight management program including consultation, diet plan, and monitoring.
                </CardDescription>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className={`mt-3 border-primary text-primary hover:bg-accent ${getBodyClass()}`}
                >
                  <Link href="/contact">Contact for Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 text-center">
              <CardHeader>
                <CardTitle className={`text-lg md:text-xl ${getHeadingClass()}`}>Skin Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-black mb-2">R1,400</div>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Professional skin treatments including dermatological procedures and cosmetic care.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-4 md:mt-8">
            <p className={`text-xs md:text-sm text-gray-500 ${getBodyClass()}`}>
              * Prices are subject to change. Medical aid schemes accepted. Please contact us for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="space-y-2 md:space-y-6 text-center lg:text-left">
              <h2 className={`text-lg md:text-3xl font-bold text-black ${getHeadingClass()}`}>
                Wellness & Prevention Programs
              </h2>
              <p className={`text-gray-600 leading-relaxed text-sm md:text-base ${getBodyClass()}`}>
                We believe in proactive healthcare that focuses on preventing illness and promoting overall wellness.
                Our comprehensive wellness programs are designed to help you maintain optimal health throughout your
                life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black ${getHeadingClass()}`}>Nutrition Counseling</h3>
                    <p className={`text-gray-600 ${getBodyClass()}`}>
                      Personalized dietary guidance and meal planning for optimal health.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Activity className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black ${getHeadingClass()}`}>Exercise Planning</h3>
                    <p className={`text-gray-600 ${getBodyClass()}`}>
                      Customized fitness programs based on your health status and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black ${getHeadingClass()}`}>Stress Management</h3>
                    <p className={`text-gray-600 ${getBodyClass()}`}>
                      Techniques and strategies for managing stress and improving mental health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/images/Retroviruses-pana.png"
                alt="Wellness Programs"
                width={500}
                height={400}
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className={`text-2xl md:text-3xl font-bold text-black ${getHeadingClass()}`}>Ready to Get Started?</h2>
            <p className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto ${getBodyClass()}`}>
              Schedule your appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className={`bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={`border-primary text-primary hover:bg-accent ${getBodyClass()}`}
              >
                <Link href="/contact">
                  <Clock className="mr-2 h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3">
            <div className="mb-4 sm:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <Stethoscope className="h-6 w-6 text-white" />
                <span className={`text-lg font-bold ${getHeadingClass()}`}>Dr. Kabongo Salumu</span>
              </div>
              <p className={`text-gray-400 text-sm ${getBodyClass()}`}>Compassionate care for over 20 years.</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className={`font-semibold mb-2 text-base ${getHeadingClass()}`}>Quick Links</h3>
              <ul className={`space-y-1 text-gray-400 text-sm ${getBodyClass()}`}>
                <li><Link href="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary-foreground/80 transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-primary-foreground/80 transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 text-base ${getHeadingClass()}`}>Emergency</h3>
              <p className={`text-gray-400 mb-1 text-sm ${getBodyClass()}`}>For emergencies, call 112 or go to your nearest ER.</p>
              <p className={`text-gray-400 text-sm ${getBodyClass()}`}>After-hours: 011 922 1172</p>
            </div>
          </div>
          <div className={`border-t border-primary-foreground/20 mt-6 pt-6 text-center text-gray-400 text-xs ${getBodyClass()}`}>
            <p>&copy; {new Date().getFullYear()} Dr. Kabongo Salumu General Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
