"use client"

import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Calendar, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

export default function ContactPage() {
  const { getHeadingClass, getBodyClass } = useTheme()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center space-y-3 md:space-y-6 mb-6 md:mb-16">
            <Badge variant="outline" className={`text-black border-black ${getBodyClass()}`}>
              Get In Touch
            </Badge>
            <h1 className={`text-2xl md:text-4xl font-bold text-black leading-tight ${getHeadingClass()}`}>
              Contact Our General Practice
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-3xl mx-auto leading-relaxed line-clamp-3 md:line-clamp-none ${getBodyClass()}`}>
              Ready to schedule an appointment or have questions about our services? We're here to help you with all
              your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12">
            {/* Contact Details */}
            <div className="space-y-4 md:space-y-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 text-base md:text-xl ${getHeadingClass()}`}>
                    <MapPin className="h-5 w-5 text-black flex-shrink-0" />
                    <span>Office Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Address</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>
                      Medi Centre, 14 Central Avenue, Kempton Park 1619, Gauteng, South Africa
                    </p>
                  </div>
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Directions</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>Located at Medi Centre on Central Avenue in Kempton Park.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 text-base md:text-xl ${getHeadingClass()}`}>
                    <Phone className="h-5 w-5 text-black flex-shrink-0" />
                    <span>Phone Numbers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Main Office</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>+27 83 587 5879</p>
                  </div>
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Medical Centre General</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>+27 11 922 1000</p>
                  </div>
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Emergency Department</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>+27 11 922 1172</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 text-base md:text-xl ${getHeadingClass()}`}>
                    <Mail className="h-5 w-5 text-black flex-shrink-0" />
                    <span>Email & Online</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>General Inquiries</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>info@drkabongosalumu.co.za</p>
                  </div>
                  <div>
                    <p className={`font-medium text-black ${getHeadingClass()}`}>Practice Location</p>
                    <p className={`text-gray-600 ${getBodyClass()}`}>Medi Centre, 14 Central Avenue, Kempton Park 1619</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="space-y-3 md:space-y-6">
              <h2 className={`text-xl md:text-3xl font-bold text-black ${getHeadingClass()}`}>
                Office Hours & Policies
              </h2>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 text-base md:text-xl ${getHeadingClass()}`}>
                    <Clock className="h-5 w-5 text-black flex-shrink-0" />
                    <span>Regular Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`space-y-2 ${getBodyClass()}`}>
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className={`text-xl font-semibold text-black ${getHeadingClass()}`}>Important Information</h3>
                <ul className={`space-y-2 text-gray-600 ${getBodyClass()}`}>
                  <li>• Please arrive 15 minutes early for your appointment</li>
                  <li>• Bring your medical aid card and a valid ID</li>
                  <li>• 24-hour notice required for appointment cancellations</li>
                </ul>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <Image
                src="/images/Retroviruses-cuate.png"
                alt="Office Reception"
                width={500}
                height={400}
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center space-y-3 md:space-y-6">
            <h2 className={`text-xl md:text-3xl font-bold text-black ${getHeadingClass()}`}>Emergency Information</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className={`text-xl font-semibold text-red-800 ${getHeadingClass()}`}>Medical Emergencies</h3>
                    <p className={`text-red-700 ${getBodyClass()}`}>
                      For life-threatening emergencies, call <strong>10177</strong> for an ambulance or{" "}
                      <strong>10111</strong> for the police immediately or go to your nearest emergency room.
                    </p>
                    <div className="border-t border-red-200 pt-4">
                      <p className={`text-red-700 ${getBodyClass()}`}>
                        <strong>Emergency Unit:</strong> 011-922-1172
                        <br />
                        Available 24/7 for emergency medical needs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Stethoscope className="h-6 w-6 text-white" />
                <span className={`text-lg font-bold ${getHeadingClass()}`}>Dr. Kabongo Salumu</span>
              </div>
              <p className={`text-gray-400 ${getBodyClass()}`}>
                Providing compassionate, comprehensive general practice care for over 20 years.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${getHeadingClass()}`}>Quick Links</h3>
              <ul className={`space-y-2 text-gray-400 ${getBodyClass()}`}>
                <li>
                  <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-foreground/80 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${getHeadingClass()}`}>Emergency</h3>
              <p className={`text-gray-400 mb-2 ${getBodyClass()}`}>
                For medical emergencies, call 10177 for an ambulance or 10111 for the police or go to your nearest
                emergency room.
              </p>
              <p className={`text-gray-400 ${getBodyClass()}`}>Emergency Unit: 011-922-1172</p>
            </div>
          </div>
          <div
            className={`border-t border-primary-foreground/20 mt-8 pt-8 text-center text-gray-400 ${getBodyClass()}`}
          >
            <p>&copy; {new Date().getFullYear()} Dr. Kabongo Salumu General Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
