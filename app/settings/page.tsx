"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SettingsRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/settings")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <span className="material-symbols-outlined text-4xl animate-spin mb-4 text-black">progress_activity</span>
        <p className="text-black/70">Redirecting to admin settings...</p>
      </div>
    </div>
  )
}
