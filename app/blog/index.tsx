import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BlogIndexRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/blog/page")
  }, [router])
  return null
} 