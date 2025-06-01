"use client"

import { useState, useEffect } from "react"
import { useTheme, type ThemeColors, defaultThemeColors } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import ProtectedRoute from "@/components/protected-route"
import Link from "next/link"

const themeColorFields: Array<{ id: keyof ThemeColors; label: string; description?: string }> = [
  { id: "background", label: "Background", description: "Main page background color." },
  { id: "foreground", label: "Foreground", description: "Default text color." },
  { id: "primary", label: "Primary", description: "Primary action elements (buttons, links)." },
  { id: "primaryForeground", label: "Primary Text", description: "Text on primary elements." },
  { id: "secondary", label: "Secondary", description: "Secondary action elements." },
  { id: "secondaryForeground", label: "Secondary Text", description: "Text on secondary elements." },
  { id: "accent", label: "Accent", description: "Hover states, subtle highlights." },
  { id: "accentForeground", label: "Accent Text", description: "Text on accent elements." },
  { id: "muted", label: "Muted", description: "Muted backgrounds or elements." },
  { id: "mutedForeground", label: "Muted Text", description: "Subtle text color." },
  { id: "card", label: "Card Background", description: "Background for card components." },
  { id: "cardForeground", label: "Card Text", description: "Text color within cards." },
  { id: "popover", label: "Popover Background", description: "Background for popovers, dropdowns." },
  { id: "popoverForeground", label: "Popover Text", description: "Text color within popovers." },
  { id: "border", label: "Border Color", description: "Default border color for elements." },
  { id: "input", label: "Input Border", description: "Border color for input fields." },
  { id: "ring", label: "Focus Ring", description: "Color for focus indicators." },
  { id: "destructive", label: "Destructive", description: "Destructive actions (e.g., delete buttons)." },
  { id: "destructiveForeground", label: "Destructive Text", description: "Text on destructive elements." },
]

export default function ThemeSettingsPage() {
  const { getHeadingClass, getBodyClass, themeColors, setThemeColors, resetThemeColors } = useTheme()
  const [localColors, setLocalColors] = useState<ThemeColors>(themeColors)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Ensure localColors is fully populated even if themeColors from context is partial initially
    setLocalColors((prev) => ({ ...defaultThemeColors, ...themeColors, ...prev }))
  }, [themeColors])

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setLocalColors((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    setThemeColors(localColors)
    setIsEditing(false)
    alert("Theme colors saved!")
  }

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all theme colors to default?")) {
      resetThemeColors()
      setLocalColors(defaultThemeColors)
      setIsEditing(false)
      alert("Theme colors reset to default!")
    }
  }

  const handleCancel = () => {
    setLocalColors(themeColors)
    setIsEditing(false)
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className={`text-3xl font-bold text-foreground ${getHeadingClass()}`}>Theme Settings</h1>
                <p className={`mt-2 text-muted-foreground ${getBodyClass()}`}>Customize your website's color scheme.</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className={`bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                  >
                    <span className="material-symbols-outlined text-sm mr-2">edit</span>
                    Edit Colors
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleSave}
                      className={`bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                    >
                      <span className="material-symbols-outlined text-sm mr-2">save</span>
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className={`border-primary text-primary hover:bg-accent ${getBodyClass()}`}
                    >
                      <span className="material-symbols-outlined text-sm mr-2">cancel</span>
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className={`text-foreground ${getHeadingClass()}`}>Color Palette</CardTitle>
                <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                  Enter HEX color codes (e.g., #RRGGBB). Changes will be applied globally.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {themeColorFields.map((field) => (
                    <div key={field.id} className="space-y-1">
                      <Label htmlFor={field.id} className={`text-foreground font-medium ${getBodyClass()}`}>
                        {field.label}
                      </Label>
                      {field.description && (
                        <p className={`text-xs text-muted-foreground ${getBodyClass()}`}>{field.description}</p>
                      )}
                      <div className="flex items-center space-x-2 pt-1">
                        <Input
                          type="color"
                          id={`${field.id}-picker`}
                          value={localColors[field.id] || defaultThemeColors[field.id]}
                          onChange={(e) => handleColorChange(field.id, e.target.value)}
                          className="p-0 h-10 w-12 border-input rounded-md"
                          disabled={!isEditing}
                        />
                        <Input
                          type="text"
                          id={field.id}
                          value={localColors[field.id] || defaultThemeColors[field.id]}
                          onChange={(e) => handleColorChange(field.id, e.target.value)}
                          className={`border-input bg-background text-foreground focus:ring-ring ${getBodyClass()}`}
                          disabled={!isEditing}
                          pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                          title="Enter a valid HEX color code, e.g., #RRGGBB"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {isEditing && (
                  <div className="pt-6 border-t border-border mt-8">
                    <Button onClick={handleReset} variant="destructive" className={getBodyClass()}>
                      <span className="material-symbols-outlined text-sm mr-2">restart_alt</span>
                      Reset to Default Colors
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className={`border-primary text-primary hover:bg-accent ${getBodyClass()}`}
              >
                <Link href="/admin" className="flex items-center">
                  <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
                  Back to Admin Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  )
}
