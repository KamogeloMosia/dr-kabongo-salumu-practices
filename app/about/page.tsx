"use client"

import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Award, BookOpen, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

export default function AboutPage() {
  const { getHeadingClass, getBodyClass } = useTheme()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-16">
            <Badge variant="outline" className={`text-black border-black ${getBodyClass()}`}>
              Board Certified General Practitioner
            </Badge>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight text-center sm:text-left ${getHeadingClass()}`}>
              About Dr. Kabongo Salumu
            </h1>
            <p className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0 leading-relaxed text-left ${getBodyClass()}`}>
              Dr. Kabongo Salumu is a board-certified general practitioner with over 20 years of experience at Medi Centre in Kempton Park. He provides trusted, compassionate care for families and individuals of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto order-first lg:order-first">
              <Image
                src="/images/Hospital wheelchair-amico.png"
                alt="Dr. Kabongo Salumu"
                width={300}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="space-y-3 md:space-y-6 text-center lg:text-left">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-black text-center sm:text-left ${getHeadingClass()}`}>Experience & Philosophy</h2>
              <p className={`text-gray-600 leading-relaxed text-left ${getBodyClass()}`}>
                Dr. Salumu has served the Kempton Park community for over two decades at Medi Centre. He believes in patient-centered, evidence-based care and treats every patient with respect and empathy.
              </p>
              <p className={`text-gray-600 leading-relaxed text-left ${getBodyClass()}`}>
                He also works in emergency care services, providing urgent medical attention when needed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black text-left ${getHeadingClass()}`}>Patient-Centered</h3>
                    <p className={`text-gray-600 text-left ${getBodyClass()}`}>
                      Personalized care for every patient.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black text-left ${getHeadingClass()}`}>Evidence-Based</h3>
                    <p className={`text-gray-600 text-left ${getBodyClass()}`}>
                      Up-to-date, proven treatments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`font-semibold text-black text-left ${getHeadingClass()}`}>Family-Focused</h3>
                    <p className={`text-gray-600 text-left ${getBodyClass()}`}>
                      Care for all ages, from children to seniors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-12">
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-black ${getHeadingClass()}`}>Education & Credentials</h2>
            <p className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto ${getBodyClass()}`}>A strong educational foundation and ongoing commitment to professional development.</p>
            <div className="flex justify-center my-4">
              <Image
                src="/images/Retroviruses-cuate.png"
                alt="Credentials"
                width={300}
                height={220}
                className="rounded-lg shadow-md w-full max-w-xs h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <BookOpen className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Medical School</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  <strong>University of Kinshasa</strong>
                  <br />
                  Doctor of Medicine (M.D.)
                  <br />
                  Graduated, 1998
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Award className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Internship</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  <strong>Kinshasa General Hospital</strong>
                  <br />
                  General Practice Internship
                  <br />
                  Completed, 1999
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Shield className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Board Certification</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  <strong>Health Professions Council of South Africa</strong>
                  <br />
                  Registered as a General Practitioner since 2001
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Users className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Professional Memberships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  South African Medical Association
                  <br />
                  General Practitioners Council
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Clock className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Continuing Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  Attends regular medical conferences
                  <br />
                  Updates on the latest medical advancements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${getHeadingClass()}`}>
                  <Heart className="h-5 w-5 text-black flex-shrink-0" />
                  <span>Special Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-gray-600 ${getBodyClass()}`}>
                  General Family Medicine
                  <br />
                  Emergency Medicine
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 md:space-y-6">
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-black text-center sm:text-left ${getHeadingClass()}`}>Beyond Medicine</h2>
            <p className={`text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-left ${getBodyClass()}`}>Outside the practice, Dr. Salumu enjoys family time, reading, and community events.</p>
            <div className="pt-4 md:pt-6">
              <Button
                asChild
                size="lg"
                className={`bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto ${getBodyClass()}`}
              >
                <Link href="/contact">Schedule Your Appointment</Link>
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
                <Heart className="h-6 w-6 text-white" />
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
              <p className={`text-gray-400 text-sm ${getBodyClass()}`}>Medi Centre: 011-922-1000</p>
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
