'use client'
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"
import { useState } from "react"
import type { ReactElement } from "react"

// Article type
interface Article {
  key: string
  icon: string
  title: string
  summary: string
  content: ReactElement
  readTime: string
}

const articles: Article[] = [
  {
    key: "heart-health",
    icon: "favorite",
    title: "Heart Health Basics",
    summary: "How to keep your heart healthy with simple lifestyle changes and regular check-ups.",
    readTime: "3 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
        <h2>Why Heart Health Matters</h2>
        <p>Your heart is the engine of your body. Keeping it healthy is key to a long, active life.</p>
        <h3>Tips for a Healthy Heart</h3>
        <ul>
          <li>Eat a balanced diet rich in fruits, vegetables, and whole grains.</li>
          <li>Exercise regularly—aim for at least 30 minutes most days.</li>
          <li>Avoid smoking and limit alcohol.</li>
          <li>Manage stress with relaxation techniques.</li>
          <li>Get regular check-ups with your doctor.</li>
        </ul>
        <h3>When to See a Doctor</h3>
        <p>If you experience chest pain, shortness of breath, or unusual fatigue, consult a healthcare professional promptly.</p>
      </div>
    ),
  },
  {
    key: "vaccination-facts",
    icon: "vaccines",
    title: "Vaccination Facts",
    summary: "Why vaccines matter for you and your family, and how they protect our community.",
    readTime: "2 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
        <h2>What Are Vaccines?</h2>
        <p>Vaccines help your body build immunity to diseases without getting sick first. They are safe, effective, and save lives.</p>
        <h3>Key Facts</h3>
        <ul>
          <li>Vaccines protect you and those around you.</li>
          <li>They are thoroughly tested for safety.</li>
          <li>Side effects are usually mild and temporary.</li>
          <li>Staying up to date with vaccines is important for all ages.</li>
        </ul>
        <h3>Common Questions</h3>
        <p>If you have questions about vaccines, talk to your healthcare provider for personalized advice.</p>
      </div>
    ),
  },
  {
    key: "mental-wellness",
    icon: "psychology",
    title: "Mental Wellness",
    summary: "Tips for managing stress, improving sleep, and supporting your mental health.",
    readTime: "2 min read",
    content: (
      <div className="prose max-w-2xl text-gray-800">
        <h2>Why Mental Wellness Matters</h2>
        <p>Mental health is just as important as physical health. Taking care of your mind helps you live a happier, more balanced life.</p>
        <h3>Tips for Mental Wellness</h3>
        <ul>
          <li>Practice mindfulness or meditation daily.</li>
          <li>Get enough sleep and maintain a regular routine.</li>
          <li>Stay connected with friends and family.</li>
          <li>Exercise regularly to boost your mood.</li>
          <li>Don't hesitate to seek help from a professional if needed.</li>
        </ul>
        <h3>When to Seek Help</h3>
        <p>If you feel persistently sad, anxious, or overwhelmed, reach out to a mental health professional for support.</p>
      </div>
    ),
  },
]

interface BlogModalProps {
  open: boolean
  onClose: () => void
  article: Article | null
}

function BlogModal({ open, onClose, article }: BlogModalProps) {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: string; text: string }[]>([]);

  if (!open || !article) return null;

  function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { role: "user", text: chatInput }]);
    setChatInput("");
    // Placeholder: In real use, send to AI backend and append response
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        { role: "ai", text: "This is a sample AI answer. (Integrate with backend for real answers.)" },
      ]);
    }, 800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
      <article
        className="bg-white rounded-xl max-w-lg w-full flex flex-col min-w-0 p-0 relative shadow-lg animate-fade-in max-h-[90vh]"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Modal Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50 rounded-t-xl min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="material-symbols-outlined text-primary text-3xl shrink-0" aria-hidden="true">{article.icon}</span>
            <div className="min-w-0">
              <h1 className="font-extrabold text-2xl md:text-3xl leading-tight mb-0 text-black truncate" itemProp="headline">{article.title}</h1>
              <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-base align-middle" aria-hidden="true">schedule</span>
                <time dateTime="2024-06-01" itemProp="datePublished">{article.readTime}</time>
              </span>
            </div>
          </div>
          <button
            className="text-gray-500 hover:text-black text-2xl ml-2 shrink-0"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>
        {/* Modal Content */}
        <section className="p-6 overflow-y-auto min-w-0 max-h-[calc(90vh-160px)] flex-1 px-4 md:px-6">
          <div className="prose max-w-none text-gray-800 leading-relaxed text-left min-w-0">
            {/* Newspaper-like typography */}
            <div className="mb-6">
              <h2 className="font-bold text-xl md:text-2xl mb-2 text-black">{article.title}</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 font-medium">{article.summary}</p>
            </div>
            {article.content}
            {/* Example: Add a definition list for medical terms if present */}
            {/* ...existing definition lists... */}
          </div>
          {/* Chat UI */}
          <div className="mt-8 border-t pt-4">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary">chat</span> Ask the AI</h3>
            <div className="mb-2 max-h-32 overflow-y-auto space-y-2">
              {chatMessages.map((msg, i) => (
                <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
                  <span className={msg.role === "user" ? "inline-block bg-primary text-white rounded-full px-3 py-1 text-xs" : "inline-block bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs"}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="flex-1 border border-gray-200 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ask a medical question..."
                aria-label="Ask a medical question"
              />
              <button type="submit" className="bg-primary text-white rounded-full px-4 py-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </form>
          </div>
        </section>
      </article>
    </div>
  );
}

export default function BlogPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  const [openArticle, setOpenArticle] = useState<Article | null>(null)
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="text-center sm:text-left space-y-3 md:space-y-6 mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold mb-2 tracking-widest uppercase">Blog</span>
          <h1 className={`text-2xl md:text-4xl font-bold text-black text-left leading-relaxed ${getHeadingClass()}`}>Health Articles & Tips</h1>
          <p className={`text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto sm:mx-0 text-left leading-relaxed ${getBodyClass()}`}>Browse our latest articles on health, wellness, and medical topics.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {articles.map((article) => (
            <button
              key={article.key}
              className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col text-left mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setOpenArticle(article)}
              aria-label={`Read article: ${article.title}`}
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-3 self-center sm:self-start">{article.icon}</span>
              <h2 className={`font-semibold text-lg mb-2 text-left leading-relaxed ${getHeadingClass()}`}>{article.title}</h2>
              <p className={`text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 text-left leading-relaxed ${getBodyClass()}`}>{article.summary}</p>
              <span className="text-primary text-xs font-medium mt-auto underline">Read More</span>
            </button>
          ))}
        </div>
      </div>
      <BlogModal open={!!openArticle} onClose={() => setOpenArticle(null)} article={openArticle} />
      <div className="max-w-2xl mx-auto mt-12 mb-16 px-4 md:px-6">
        <h2 className="font-bold text-2xl mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-primary">help</span> Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">How do I book an appointment?</summary>
            <p className="mt-2 text-sm text-gray-700">You can call the practice directly or use the WhatsApp button on the site to start a conversation and book your appointment.</p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">What medical aids do you accept?</summary>
            <p className="mt-2 text-sm text-gray-700">We accept most major South African medical aids. Please contact us to confirm if yours is accepted.</p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Can I get a repeat prescription?</summary>
            <p className="mt-2 text-sm text-gray-700">Yes, repeat prescriptions are available for ongoing treatments. Please contact the practice for details.</p>
          </details>
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Do you offer emergency care?</summary>
            <p className="mt-2 text-sm text-gray-700">Yes, emergency care is available. For urgent cases, please call the emergency number listed on the contact page.</p>
          </details>
        </div>
      </div>
    </div>
  )
} 