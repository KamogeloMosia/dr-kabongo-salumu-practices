"use client"
import { useState, useRef, useEffect } from "react";
import { config, validateConfig } from "@/lib/config";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function FloatingChat() {
  const [showChatInput, setShowChatInput] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatInputRef = useRef<HTMLDivElement>(null);

  // Validate configuration on component mount
  useEffect(() => {
    validateConfig();
  }, []);

  // Close chat input when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (chatInputRef.current && !(chatInputRef.current as HTMLDivElement).contains(e.target as Node)) {
        setShowChatInput(false);
      }
    }
    if (showChatInput) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showChatInput]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: 'user', content: input };
    setChat((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    setInput("");
    try {
      // Validate API key
      if (!config.gemini.apiKey) {
        throw new Error("Gemini API key not configured");
      }
      
      const endpoint = `${config.gemini.endpoint}?key=${config.gemini.apiKey}`;
      
      // Create a medical-focused system prompt
      const systemPrompt = "You are a helpful medical AI assistant for Dr. Kabongo Salumu's practice in South Africa. Provide brief, clear health information and guidance. Keep responses under 100 words. Always recommend consulting with a healthcare professional for specific medical advice. Be informative, compassionate, and concise.";
      
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: systemPrompt + "\n\nUser question: " + userMessage.content }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 150,
          },
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(`API Error: ${res.status} - ${errorData.error?.message || 'Unknown error'}`);
      }
      
      const data = await res.json();
      const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that. Please try rephrasing your question.";
      setChat((prev) => [...prev, { role: 'assistant', content: geminiReply }]);
    } catch (err: any) {
      console.error("Chat API Error:", err);
      setError("Sorry, I'm having trouble connecting right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {showChatInput && (
        <div ref={chatInputRef} className="mb-3 flex flex-col items-end w-80 max-w-xs">
          <div className="bg-white rounded-lg shadow-lg p-3 mb-2 w-full max-h-64 overflow-y-auto text-sm">
            {chat.length === 0 && <div className="text-gray-400">Ask me about health, symptoms, or medical advice...</div>}
            {chat.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? 'text-right mb-2' : 'text-left mb-2'}>
                <span className={msg.role === 'user' ? 'bg-primary text-white rounded-full px-3 py-1 inline-block' : 'bg-gray-100 text-gray-800 rounded-full px-3 py-1 inline-block'}>
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-400">AI is thinking...</div>}
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <form className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 w-full border border-gray-200" onSubmit={handleSubmit}>
            <input
              type="text"
              className="flex-1 border-none outline-none text-sm px-0 bg-transparent"
              placeholder="Ask a question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button type="submit" className="text-primary" disabled={loading || !input.trim()}>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      )}
      <button
        aria-label="Start AI Chat Conversation"
        style={{
          background: '#25D366',
          borderRadius: '50%',
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onClick={() => setShowChatInput((v) => !v)}
      >
        <span className="material-symbols-outlined text-white text-2xl">smart_toy</span>
      </button>
    </div>
  );
} 