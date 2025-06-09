"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/context/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import ProtectedRoute from "@/components/protected-route"

interface SiteSettings {
  doctorName: string
  practiceDescription: string
  heroTitle: string
  heroSubtitle: string
  aboutDescription: string
  address: string
  mainPhone: string
  email: string
  emergencyPhone: string
  officeHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  socialMedia: {
    facebook: string
    twitter: string
    linkedin: string
  }
  pricing: {
    adultConsultation: { price: string; description: string }
    childrenConsultation: { price: string; description: string }
    followUp: { price: string; description: string }
    pregnancy: { price: string; description: string }
    slimmingTreatment: { price: string; description: string }
    skinTreatments: { price: string; description: string }
  }
}

export default function SettingsPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [activeTab, setActiveTab] = useState("general")
  const [isEditing, setIsEditing] = useState(false)
  const [settings, setSettings] = useState<SiteSettings>({
    doctorName: "Dr. Kabongo Salumu",
    practiceDescription: "Providing compassionate, comprehensive general practice care for over 20 years.",
    heroTitle: "Your Trusted General Practitioner in Kempton Park",
    heroSubtitle:
      "Comprehensive healthcare services for you and your family with over 20 years of experience in general practice medicine.",
    aboutDescription:
      "Dr. Kabongo Salumu has been serving the Johannesburg and Kempton Park communities for over 20 years, bringing a wealth of knowledge and experience to general practice medicine.",
    address: "Medi Centre, 14 Central Avenue, Kempton Park 1619, Gauteng, South Africa",
    mainPhone: "+27 83 587 5879",
    email: "info@drkabongosalumu.co.za",
    emergencyPhone: "+27 11 922 1172",
    officeHours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "8:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    socialMedia: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    pricing: {
      adultConsultation: {
        price: "600",
        description: "Comprehensive consultation for adult patients including examination and treatment plan.",
      },
      childrenConsultation: {
        price: "500",
        description: "Specialized consultation for children under 18 years including pediatric care.",
      },
      followUp: {
        price: "400",
        description: "Follow-up consultations for ongoing treatment and monitoring of existing conditions.",
      },
      pregnancy: {
        price: "700",
        description: "Comprehensive prenatal care including examinations and pregnancy monitoring.",
      },
      slimmingTreatment: {
        price: "Contact for Pricing",
        description: "Comprehensive weight management program including consultation, diet plan, and monitoring.",
      },
      skinTreatments: {
        price: "1,400",
        description: "Professional skin treatments including dermatological procedures and cosmetic care.",
      },
    },
  })

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("siteSettings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem("siteSettings", JSON.stringify(settings))
    setIsEditing(false)
    alert("Settings saved successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedInputChange = (parent: string, field: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof SiteSettings] as any),
        [field]: typeof value === "object" ? value : value,
      },
    }))
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className={`text-3xl font-bold ${getHeadingClass()}`}>Site Settings</h1>
                <p className={`mt-2 text-muted-foreground ${getBodyClass()}`}>
                  Manage your website content, contact information, and site settings
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center space-x-2 ${isEditing ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/80"} ${getBodyClass()}`}
                  variant={isEditing ? "outline" : "default"}
                >
                  <span className="material-symbols-outlined text-sm">{isEditing ? "cancel" : "edit"}</span>
                  <span>{isEditing ? "Cancel Editing" : "Edit Mode"}</span>
                </Button>
                {isEditing && (
                  <Button
                    onClick={handleSave}
                    className={`flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/80 ${getBodyClass()}`}
                  >
                    <span className="material-symbols-outlined text-sm">save</span>
                    <span>Save Changes</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Settings */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 mb-8 bg-accent">
                <TabsTrigger
                  value="general"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">public</span>
                  <span className="hidden sm:inline">General</span>
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span className="hidden sm:inline">Contact</span>
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">edit_note</span>
                  <span className="hidden sm:inline">Content</span>
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">payments</span>
                  <span className="hidden sm:inline">Pricing</span>
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">palette</span>
                  <span className="hidden sm:inline">Design</span>
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span className="hidden sm:inline">Admin</span>
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="material-symbols-outlined text-sm">database</span>
                  <span className="hidden sm:inline">Data</span>
                </TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">person</span>
                      <span>General Information</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Basic information about the practice and doctor.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="doctorName" className={getBodyClass()}>
                        Doctor Name
                      </Label>
                      <Input
                        id="doctorName"
                        value={settings.doctorName}
                        onChange={(e) => handleInputChange("doctorName", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="practiceDescription" className={getBodyClass()}>
                        Practice Description
                      </Label>
                      <Textarea
                        id="practiceDescription"
                        value={settings.practiceDescription}
                        onChange={(e) => handleInputChange("practiceDescription", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="heroTitle" className={getBodyClass()}>
                        Homepage Hero Title
                      </Label>
                      <Input
                        id="heroTitle"
                        value={settings.heroTitle}
                        onChange={(e) => handleInputChange("heroTitle", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="heroSubtitle" className={getBodyClass()}>
                        Homepage Hero Subtitle
                      </Label>
                      <Textarea
                        id="heroSubtitle"
                        value={settings.heroSubtitle}
                        onChange={(e) => handleInputChange("heroSubtitle", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Contact Settings */}
              <TabsContent value="contact" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">call</span>
                      <span>Contact Information</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Update contact details displayed throughout the site.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="mainPhone" className={getBodyClass()}>
                        Main Phone Number
                      </Label>
                      <Input
                        id="mainPhone"
                        value={settings.mainPhone}
                        onChange={(e) => handleInputChange("mainPhone", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className={getBodyClass()}>
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        value={settings.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address" className={getBodyClass()}>
                        Practice Address
                      </Label>
                      <Textarea
                        id="address"
                        value={settings.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone" className={getBodyClass()}>
                        Emergency Phone
                      </Label>
                      <Input
                        id="emergencyPhone"
                        value={settings.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">schedule</span>
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(settings.officeHours).map(([day, hours]) => (
                      <div key={day}>
                        <Label htmlFor={day} className={`capitalize ${getBodyClass()}`}>
                          {day}
                        </Label>
                        <Input
                          id={day}
                          value={hours}
                          onChange={(e) => handleNestedInputChange("officeHours", day, e.target.value)}
                          disabled={!isEditing}
                          className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Settings */}
              <TabsContent value="content" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">edit_note</span>
                      <span>Page Content</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Edit the main content sections of your website.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="aboutDescription" className={getBodyClass()}>
                        About Page Description
                      </Label>
                      <Textarea
                        id="aboutDescription"
                        value={settings.aboutDescription}
                        onChange={(e) => handleInputChange("aboutDescription", e.target.value)}
                        disabled={!isEditing}
                        className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pricing Settings */}
              <TabsContent value="pricing" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">payments</span>
                      <span>Service Pricing</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Manage pricing for all medical services offered.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(settings.pricing).map(([service, details]) => (
                      <div key={service} className="border rounded-lg p-4 space-y-3">
                        <h3 className={`font-medium capitalize ${getHeadingClass()}`}>
                          {service.replace(/([A-Z])/g, " $1").trim()}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`${service}-price`} className={getBodyClass()}>
                              Price (R)
                            </Label>
                            <Input
                              id={`${service}-price`}
                              value={details.price}
                              onChange={(e) =>
                                handleNestedInputChange("pricing", service, { ...details, price: e.target.value })
                              }
                              disabled={!isEditing}
                              className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                              placeholder="e.g., 600 or Contact for Pricing"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`${service}-description`} className={getBodyClass()}>
                              Description
                            </Label>
                            <Textarea
                              id={`${service}-description`}
                              value={details.description}
                              onChange={(e) =>
                                handleNestedInputChange("pricing", service, { ...details, description: e.target.value })
                              }
                              disabled={!isEditing}
                              className={`${getBodyClass()} border-input bg-background text-foreground focus:border-ring focus:ring-ring`}
                              rows={2}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Design Settings */}
              <TabsContent value="design" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">palette</span>
                      <span>Design & Appearance</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Customize the visual appearance of your website.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className={`font-medium mb-2 ${getHeadingClass()}`}>Font Customizer</h3>
                      <p className={`text-sm text-gray-600 mb-4 ${getBodyClass()}`}>
                        Use the floating font button (bottom-right) to customize website fonts.
                      </p>
                      <Button
                        onClick={() => {
                          const fontButton = document.querySelector("[data-font-customizer]") as HTMLElement
                          if (fontButton) fontButton.click()
                        }}
                        variant="outline"
                        className={`${getBodyClass()} border-primary text-primary hover:bg-accent`}
                      >
                        Open Font Customizer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Admin Panel */}
              <TabsContent value="admin" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">shield</span>
                      <span>Admin Panel</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Administrative functions and site management tools.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className={`p-6 h-auto flex flex-col items-center space-y-2 border-border hover:bg-accent ${getBodyClass()}`}
                      >
                        <span className="material-symbols-outlined text-2xl">visibility</span>
                        <span>Preview Changes</span>
                        <span className="text-xs text-black/50">See how changes look live</span>
                      </Button>
                      <Button
                        variant="outline"
                        className={`p-6 h-auto flex flex-col items-center space-y-2 border-border hover:bg-accent ${getBodyClass()}`}
                      >
                        <span className="material-symbols-outlined text-2xl">database</span>
                        <span>Backup Settings</span>
                        <span className="text-xs text-black/50">Download current settings</span>
                      </Button>
                      <Button
                        variant="outline"
                        className={`p-6 h-auto flex flex-col items-center space-y-2 border-border hover:bg-accent ${getBodyClass()}`}
                      >
                        <span className="material-symbols-outlined text-2xl">settings</span>
                        <span>Site Analytics</span>
                        <span className="text-xs text-black/50">View site performance</span>
                      </Button>
                      <Button
                        variant="outline"
                        className={`p-6 h-auto flex flex-col items-center space-y-2 border-border hover:bg-accent ${getBodyClass()}`}
                      >
                        <span className="material-symbols-outlined text-2xl">shield</span>
                        <span>Security Settings</span>
                        <span className="text-xs text-black/50">Manage access controls</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`${getHeadingClass()}`}>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      onClick={() => window.open("/", "_blank")}
                      variant="outline"
                      className={`w-full justify-start ${getBodyClass()} border-primary text-primary hover:bg-accent`}
                    >
                      <span className="material-symbols-outlined mr-2 text-sm">visibility</span>
                      Preview Live Site
                    </Button>
                    <Button
                      onClick={() => {
                        const dataStr = JSON.stringify(settings, null, 2)
                        const dataBlob = new Blob([dataStr], { type: "application/json" })
                        const url = URL.createObjectURL(dataBlob)
                        const link = document.createElement("a")
                        link.href = url
                        link.download = "site-settings-backup.json"
                        link.click()
                      }}
                      variant="outline"
                      className={`w-full justify-start ${getBodyClass()} border-primary text-primary hover:bg-accent`}
                    >
                      <span className="material-symbols-outlined mr-2 text-sm">database</span>
                      Download Settings Backup
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Data Management */}
              <TabsContent value="data" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getHeadingClass()}`}>
                      <span className="material-symbols-outlined">database</span>
                      <span>Data Management</span>
                    </CardTitle>
                    <CardDescription className={`text-muted-foreground ${getBodyClass()}`}>
                      Import, export, and manage your website data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className={`font-medium mb-2 ${getHeadingClass()}`}>Current Settings</h3>
                      <pre className={`text-xs bg-gray-100 p-4 rounded overflow-auto max-h-40 ${getBodyClass()}`}>
                        {JSON.stringify(settings, null, 2)}
                      </pre>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={() => {
                          const confirmed = confirm("Are you sure you want to reset all settings to default?")
                          if (confirmed) {
                            localStorage.removeItem("siteSettings")
                            window.location.reload()
                          }
                        }}
                        variant="destructive"
                        className={getBodyClass()}
                      >
                        Reset to Default
                      </Button>
                      <Button
                        onClick={() => {
                          const input = document.createElement("input")
                          input.type = "file"
                          input.accept = ".json"
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onload = (e) => {
                                try {
                                  const importedSettings = JSON.parse(e.target?.result as string)
                                  setSettings(importedSettings)
                                  alert("Settings imported successfully!")
                                } catch (error) {
                                  alert("Invalid settings file!")
                                }
                              }
                              reader.readAsText(file)
                            }
                          }
                          input.click()
                        }}
                        variant="outline"
                        className={getBodyClass()}
                      >
                        Import Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  )
}
