"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function LoginPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const success = await login(username, password)
      if (success) {
        router.push("/admin")
      } else {
        setError("Invalid username or password")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold ${getHeadingClass()}`}>Admin Login</h1>
            <p className={`mt-2 text-muted-foreground ${getBodyClass()}`}>
              Please sign in to access the admin dashboard
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-md border border-border p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className={`block text-sm font-medium text-foreground mb-1 ${getBodyClass()}`}
                >
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full border-input focus:border-ring focus:ring-ring"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium text-foreground mb-1 ${getBodyClass()}`}
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-input focus:border-ring focus:ring-ring"
                  placeholder="Enter your password"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className={`w-full bg-primary hover:bg-primary/80 text-primary-foreground ${getBodyClass()}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>

              <div className="mt-4 text-center">
                <p className={`text-sm text-muted-foreground ${getBodyClass()}`}>
                  For demo purposes, use:
                  <br />
                  Username: <strong>admin</strong>
                  <br />
                  Password: <strong>password</strong>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
