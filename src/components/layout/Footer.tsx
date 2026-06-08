import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS, AFFILIATE_URL, WHATSAPP_URL, TELEGRAM_URL, WHATSAPP_CHANNEL_URL } from "@/data/content";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 14.46l-2.95-.924c-.64-.203-.654-.64.136-.953l11.57-4.461c.537-.194 1.006.131.718.126z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full bg-[#69C9D0] opacity-80 scale-75 translate-x-1" />
                <div className="absolute inset-0 rounded-full bg-[#EE1D52] opacity-80 scale-75 -translate-x-1" />
              </div>
              <span className="font-bold text-white text-base" style={{ fontFamily: "var(--font-syne)" }}>
                Apex Blue Sky
              </span>
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
              Growing African Businesses with TikTok Ads. Your customers are already there — let&apos;s find them.
            </p>
            {/* Community callout */}
            <div className="mb-5 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <p className="text-white text-xs font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>📲 Join the Community</p>
              <div className="flex gap-2">
                <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-md text-xs font-semibold text-green-400 border border-green-500/30 hover:bg-green-500/10 transition-all">
                  WhatsApp Channel
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-md text-xs font-semibold text-[#229ED9] border border-[#229ED9]/30 hover:bg-[#229ED9]/10 transition-all">
                  Telegram
                </a>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 flex-wrap">
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-[#EE1D52] transition-all">
                <TikTokIcon />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all text-sm">
                IG
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-blue-700 transition-all text-sm">
                FB
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-green-500 transition-all text-sm">
                WA
              </a>
              <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-green-600 transition-all text-xs font-bold">
                CH
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-[#229ED9] transition-all">
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#A0A0A0] hover:text-[#69C9D0] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-white/5 pt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: "var(--font-syne)" }}>
              Ready to grow with TikTok Ads?
            </p>
            <p className="text-[#A0A0A0] text-sm">Start free — no contracts, no risk.</p>
          </div>
          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            🚀 Get Started Free →
          </a>
        </div>

        {/* Legal */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#555555]">
          <p>© 2026 Apex Blue Sky. All rights reserved.</p>
          <p className="text-center">
            Not affiliated with TikTok Inc. Results shown are from actual campaigns. Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
