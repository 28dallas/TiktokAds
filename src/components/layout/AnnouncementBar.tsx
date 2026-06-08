"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WHATSAPP_AUDIT_URL, WHATSAPP_CHANNEL_URL, TELEGRAM_URL } from "@/data/content";

const messages = [
  {
    text: (
      <>
        🔥 <strong>Limited:</strong> Free TikTok Ads Audit for the first 20 Kenyan businesses this month →{" "}
        <a href={WHATSAPP_AUDIT_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80 transition-opacity">
          Claim Free Audit
        </a>
      </>
    ),
  },
  {
    text: (
      <>
        💬 Join our community — get free tips, updates & ad inspiration:{" "}
        <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80 transition-opacity">
          WhatsApp Channel
        </a>
        {" "}&{" "}
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80 transition-opacity">
          Telegram
        </a>
      </>
    ),
  },
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem("apex-announcement-dismissed");
    if (!dismissed) setVisible(true);
    const timer = setInterval(() => setIdx((i) => (i + 1) % messages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem("apex-announcement-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{ background: idx === 0 ? "#EE1D52" : "linear-gradient(90deg, #69C9D0, #EE1D52)" }}
      className="relative z-50 flex items-center justify-center px-10 py-2 text-white text-sm transition-all duration-500"
    >
      <span className="text-center">{messages[idx].text}</span>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
