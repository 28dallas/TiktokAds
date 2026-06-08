"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { NAV_LINKS, AFFILIATE_URL, WHATSAPP_URL, WHATSAPP_CHANNEL_URL, TELEGRAM_URL } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-[#69C9D0] opacity-80 scale-75 translate-x-1 group-hover:scale-80 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-[#EE1D52] opacity-80 scale-75 -translate-x-1 group-hover:scale-80 transition-transform" />
          </div>
          <span className="font-syne font-800 text-white text-lg tracking-tight" style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}>
            Apex Blue Sky
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#A0A0A0] hover:text-white text-sm font-medium transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {/* Community icons — icon-only on md, labelled on lg */}
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/10 transition-all"
            style={{ fontFamily: "var(--font-syne)" }}
            title="Join WhatsApp Channel"
          >
            <MessageCircle size={14} />
            <span className="hidden lg:inline">WA Channel</span>
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9]/10 transition-all"
            style={{ fontFamily: "var(--font-syne)" }}
            title="Join Telegram"
          >
            <Send size={14} />
            <span className="hidden lg:inline">Telegram</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/10 transition-all"
            style={{ fontFamily: "var(--font-syne)" }}
            title="WhatsApp"
          >
            <MessageCircle size={14} />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-4"
          >
            🚀 <span className="hidden lg:inline">Start Running Ads </span>→
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#A0A0A0] hover:text-white py-2 border-b border-white/5 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-2 justify-center py-3 rounded-lg border border-green-500/40 text-green-400 font-semibold text-sm"
            >
              <MessageCircle size={14} /> WA Channel
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-2 justify-center py-3 rounded-lg border border-[#229ED9]/40 text-[#229ED9] font-semibold text-sm"
            >
              <Send size={14} /> Telegram
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center py-3 rounded-lg border border-green-500/40 text-green-400 font-semibold"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-1"
          >
            🚀 Start Running Ads →
          </a>
        </div>
      )}
    </nav>
  );
}
