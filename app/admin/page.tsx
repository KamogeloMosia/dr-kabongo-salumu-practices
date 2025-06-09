"use client"

import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import ProtectedRoute from "@/components/protected-route"

export default function AdminDashboard() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold ${getHeadingClass()}`}>Admin Dashboard</h1>
              <p className={`mt-2 text-muted-foreground ${getBodyClass()}`}>
                Welcome back, <span className="font-medium">{user?.username}</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                onClick={handleLogout}
                variant="outline"
                className={`flex items-center space-x-2 border-primary text-primary hover:bg-accent ${getBodyClass()}`}
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                <span>Sign Out</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow border-border">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                  <span className="material-symbols-outlined">settings</span>
                  <span>Site Settings</span>
                </CardTitle>
                <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                  Manage website content, contact information, and Medi Centre settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className={`w-full bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                >
                  <Link href="/admin/settings">Manage Settings</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-border">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                  <span className="material-symbols-outlined">calendar_month</span>
                  <span>Appointments</span>
                </CardTitle>
                <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                  View and manage patient appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className={`w-full bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                >
                  <Link href="/admin/appointments">Manage Appointments</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-border">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                  <span className="material-symbols-outlined">payments</span>
                  <span>Pricing</span>
                </CardTitle>
                <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                  Update service pricing and descriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className={`w-full bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                >
                  <Link href="/admin/pricing">Manage Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-border bg-card">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-foreground ${getHeadingClass()}`}>
                  <span className="material-symbols-outlined">palette</span>
                  <span>Theme Settings</span>
                </CardTitle>
                <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                  Customize website colors and appearance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className={`w-full bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                >
                  <Link href="/admin/theme">Customize Theme</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
