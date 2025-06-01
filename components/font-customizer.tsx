"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Type, X } from "lucide-react"
import { useTheme, fontOptions } from "@/context/theme-provider"

export function FontCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const { headingFont, bodyFont, setHeadingFont, setBodyFont, getHeadingClass, getBodyClass } = useTheme()

  const sansSerifFonts = Object.entries(fontOptions).filter(([_, font]) => font.category === "sans-serif")
  const serifFonts = Object.entries(fontOptions).filter(([_, font]) => font.category === "serif")

  return (
    <>
      {/* Floating Font Settings Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black hover:bg-black/80 text-white rounded-full w-14 h-14 shadow-lg"
        size="icon"
        data-font-customizer
      >
        <Type className="h-6 w-6" />
      </Button>

      {/* Font Customizer Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border-black/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Font Customization</span>
                </CardTitle>
                <CardDescription className="text-black/70">
                  Customize the fonts used throughout the website. Changes are saved automatically.
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Preview Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preview</h3>
                <Card className="p-6 bg-white border-black/10">
                  <div className="space-y-4">
                    <h1 className={`text-3xl font-bold ${getHeadingClass()}`}>Dr. Sarah Johnson Family Practice</h1>
                    <h2 className={`text-xl font-semibold ${getHeadingClass()}`}>Comprehensive Healthcare Services</h2>
                    <p className={`text-base ${getBodyClass()}`}>
                      Dr. Sarah Johnson provides comprehensive family medicine services with over 15 years of
                      experience. From routine check-ups to chronic disease management, we're here for your health
                      journey.
                    </p>
                    <p className={`text-sm text-black/60 ${getBodyClass()}`}>
                      This is how your body text will appear throughout the website with the selected font.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Heading Font Selection */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Heading Font</h3>
                  <p className="text-sm text-black/60 mb-4">Used for titles, headings, and important text</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Sans-serif Fonts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sansSerifFonts.map(([key, font]) => (
                        <Button
                          key={key}
                          variant={headingFont === key ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            headingFont === key ? "bg-black text-white" : "border-black/20 hover:bg-black/5"
                          }`}
                          onClick={() => setHeadingFont(key as keyof typeof fontOptions)}
                        >
                          <div className="text-left">
                            <div className={`text-lg font-semibold ${font.class}`}>{font.name}</div>
                            <div className={`text-sm opacity-70 ${font.class}`}>The quick brown fox jumps</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Serif Fonts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serifFonts.map(([key, font]) => (
                        <Button
                          key={key}
                          variant={headingFont === key ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            headingFont === key ? "bg-black text-white" : "border-black/20 hover:bg-black/5"
                          }`}
                          onClick={() => setHeadingFont(key as keyof typeof fontOptions)}
                        >
                          <div className="text-left">
                            <div className={`text-lg font-semibold ${font.class}`}>{font.name}</div>
                            <div className={`text-sm opacity-70 ${font.class}`}>The quick brown fox jumps</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Font Selection */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Body Font</h3>
                  <p className="text-sm text-black/60 mb-4">Used for paragraphs, descriptions, and general content</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Sans-serif Fonts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sansSerifFonts.map(([key, font]) => (
                        <Button
                          key={key}
                          variant={bodyFont === key ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            bodyFont === key ? "bg-black text-white" : "border-black/20 hover:bg-black/5"
                          }`}
                          onClick={() => setBodyFont(key as keyof typeof fontOptions)}
                        >
                          <div className="text-left">
                            <div className={`font-medium ${font.class}`}>{font.name}</div>
                            <div className={`text-sm opacity-70 ${font.class}`}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Serif Fonts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serifFonts.map(([key, font]) => (
                        <Button
                          key={key}
                          variant={bodyFont === key ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            bodyFont === key ? "bg-black text-white" : "border-black/20 hover:bg-black/5"
                          }`}
                          onClick={() => setBodyFont(key as keyof typeof fontOptions)}
                        >
                          <div className="text-left">
                            <div className={`font-medium ${font.class}`}>{font.name}</div>
                            <div className={`text-sm opacity-70 ${font.class}`}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Selection Summary */}
              <div className="space-y-4 pt-4 border-t border-black/10">
                <h3 className="text-lg font-semibold">Current Selection</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-black border-black">
                    Headings: {fontOptions[headingFont].name}
                  </Badge>
                  <Badge variant="outline" className="text-black border-black">
                    Body: {fontOptions[bodyFont].name}
                  </Badge>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 pt-4 border-t border-black/10">
                <Button variant="outline" onClick={() => setIsOpen(false)} className="border-black/20 hover:bg-black/5">
                  Close
                </Button>
                <Button className="bg-black hover:bg-black/80 text-white" onClick={() => setIsOpen(false)}>
                  Apply Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
