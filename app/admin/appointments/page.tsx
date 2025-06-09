"use client"

import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import ProtectedRoute from "@/components/protected-route"
import Link from "next/link"

export default function AppointmentsPage() {
  const { getHeadingClass, getBodyClass } = useTheme()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold ${getHeadingClass()}`}>Appointments</h1>
              <p className={`mt-2 text-muted-foreground ${getBodyClass()}`}>View and manage patient appointments at Medi Centre</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                asChild
                className={`flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
              >
                <Link href="/admin">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  <span>Back to Dashboard</span>
                </Link>
              </Button>
            </div>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className={`${getHeadingClass()}`}>Appointment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="material-symbols-outlined text-5xl text-muted-foreground/60 mb-4">calendar_month</span>
                <h3 className={`text-xl font-semibold mb-2 ${getHeadingClass()}`}>No Appointments Yet</h3>
                <p className={`text-muted-foreground max-w-md mb-6 ${getBodyClass()}`}>
                  This is a placeholder for the appointment management system. In a real application, you would see a
                  list of upcoming appointments here.
                </p>
                <Button className={`bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}>
                  <span className="material-symbols-outlined mr-2 text-sm">add</span>
                  Create New Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}
