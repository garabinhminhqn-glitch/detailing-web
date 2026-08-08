"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "bot"; text: string };

// Đổi URL này thành webhook n8n của bạn
const WEBHOOK_URL = "https://n8n.binhaitech.com/webhook/chat-detailing";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Chào bạn! Em là trợ lý tư vấn của trung tâm detailing. Bạn cần tư vấn dịch vụ gì ạ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = useRef("web-" + Date.now());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        { role: "bot", text: data.reply || "Xin lỗi, em chưa trả lời được." },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "bot", text: "Có lỗi kết nối, bạn thử lại sau nhé." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Nút bong bóng */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 flex items-center justify-center text-2xl"
        aria-label="Chat tư vấn"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Khung chat */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
            Tư vấn Detailing
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-white border text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border text-gray-500 px-3 py-2 rounded-2xl text-sm">
                  Đang trả lời...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 border rounded-full px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              onClick={send}
              disabled={loading}
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
