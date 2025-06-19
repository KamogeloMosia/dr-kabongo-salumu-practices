"use client"
import { useState, useRef, useEffect } from "react";

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
      // Replace with your Gemini API endpoint and API key
      const apiKey = "AIzaSyAYRnpZGaWCbl8WNPl-l2V60aBAnFf9r_0";
      const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage.content }] }],
        }),
      });
      if (!res.ok) throw new Error("Failed to get response from Gemini");
      const data = await res.json();
      const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
      setChat((prev) => [...prev, { role: 'assistant', content: geminiReply }]);
    } catch (err: any) {
      setError("Error: " + (err.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {showChatInput && (
        <div ref={chatInputRef} className="mb-3 flex flex-col items-end w-80 max-w-xs">
          <div className="bg-white rounded-lg shadow-lg p-3 mb-2 w-full max-h-64 overflow-y-auto text-sm">
            {chat.length === 0 && <div className="text-gray-400">Ask a medical question...</div>}
            {chat.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? 'text-right mb-2' : 'text-left mb-2'}>
                <span className={msg.role === 'user' ? 'bg-primary text-white rounded-full px-3 py-1 inline-block' : 'bg-gray-100 text-gray-800 rounded-full px-3 py-1 inline-block'}>
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-400">Gemini is typing...</div>}
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
        aria-label="Start WhatsApp Conversation"
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
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.118-.563-.177-.8.177-.237.355-.918 1.155-1.127 1.392-.208.237-.415.266-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.208-.355-.022-.546.156-.723.16-.159.355-.415.533-.622.178-.208.237-.355.355-.592.118-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.208-.009-.444-.011-.68-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.27 3.428 1.447 3.666.178.237 2.5 3.82 6.05 5.207.846.291 1.505.464 2.021.593.849.203 1.624.174 2.237.106.682-.075 2.104-.859 2.402-1.691.297-.832.297-1.544.208-1.691-.089-.148-.326-.237-.68-.415z" fill="#fff"/>
        </svg>
      </button>
    </div>
  );
} 