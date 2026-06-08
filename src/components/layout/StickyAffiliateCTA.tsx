"use client";

import { useState, useEffect } from "react";
import { AFFILIATE_URL } from "@/data/content";

export default function StickyAffiliateCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start Running TikTok Ads"
      className={`fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-bold text-white text-xs sm:text-sm shadow-2xl transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, #69C9D0, #EE1D52)",
        boxShadow: "0 0 30px rgba(105,201,208,0.4), 0 4px 24px rgba(0,0,0,0.5)",
        fontFamily: "var(--font-syne)",
      }}
    >
      🚀 <span>Start Free on TikTok</span>
    </a>
  );
}
