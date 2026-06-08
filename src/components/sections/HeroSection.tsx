"use client";

import { motion } from "framer-motion";
import { AFFILIATE_URL, WHATSAPP_STRATEGY_URL, HERO_STATS } from "@/data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function DashboardMock() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(105,201,208,0.12), 0 0 120px rgba(238,29,82,0.06)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-xs text-[#A0A0A0] mb-1" style={{ fontFamily: "var(--font-space-mono)" }}>
              CAMPAIGN
            </div>
            <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
              Apex Furnitures Kenya
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            <span className="text-green-400 text-xs font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
              LIVE
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "REACH", value: "847,291" },
            { label: "CLICKS", value: "23,410" },
            { label: "CONV.", value: "1,847" },
          ].map((m) => (
            <div key={m.label} className="bg-[#111111] rounded-lg p-3 text-center">
              <div className="text-[#555555] text-xs mb-1" style={{ fontFamily: "var(--font-space-mono)" }}>
                {m.label}
              </div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* ROAS highlight */}
        <div className="flex items-center justify-between mb-5 p-3 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/20">
          <span className="text-[#A0A0A0] text-sm">Return on Ad Spend</span>
          <span className="text-[#F5C518] font-bold text-xl" style={{ fontFamily: "var(--font-space-mono)" }}>
            4.2x ROAS
          </span>
        </div>

        {/* Mini bar chart */}
        <div>
          <div className="text-xs text-[#555555] mb-3" style={{ fontFamily: "var(--font-space-mono)" }}>
            SPEND vs REVENUE — LAST 7 DAYS
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[
              { spend: 55, rev: 85 },
              { spend: 60, rev: 90 },
              { spend: 45, rev: 75 },
              { spend: 70, rev: 100 },
              { spend: 65, rev: 92 },
              { spend: 80, rev: 100 },
              { spend: 75, rev: 100 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex items-end gap-0.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.spend}%` }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.07 }}
                  className="flex-1 rounded-t"
                  style={{ background: "rgba(105,201,208,0.4)" }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.rev}%` }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.07 }}
                  className="flex-1 rounded-t"
                  style={{ background: "#69C9D0" }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm" style={{ background: "rgba(105,201,208,0.4)" }} />
              <span className="text-[#555555] text-xs">Spend</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm bg-[#69C9D0]" />
              <span className="text-[#555555] text-xs">Revenue</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification popups */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="float-up absolute -right-4 top-12 glass-card px-3 py-2.5 flex items-center gap-2 text-sm min-w-max"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
      >
        <span>🛍️</span>
        <div>
          <div className="text-white text-xs font-semibold">New order from Mombasa</div>
          <div className="text-[#69C9D0] text-xs" style={{ fontFamily: "var(--font-space-mono)" }}>KES 4,500</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="float-down absolute -left-4 top-1/3 glass-card px-3 py-2.5 flex items-center gap-2 text-sm min-w-max"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
      >
        <span>📈</span>
        <div className="text-white text-xs font-semibold">Your ad reached 10,000 people today</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="float-up absolute -bottom-4 left-8 glass-card px-3 py-2.5 flex items-center gap-2 text-sm"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
      >
        <span>✅</span>
        <span className="text-white text-xs font-semibold">Campaign approved</span>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden grid-bg">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-blob-1 absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(105,201,208,0.08) 0%, transparent 70%)",
            top: "-10%",
            left: "20%",
          }}
        />
        <div
          className="mesh-blob-2 absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(238,29,82,0.06) 0%, transparent 70%)",
            bottom: "5%",
            right: "10%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm border border-[#69C9D0]/30 bg-[#69C9D0]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#69C9D0] pulse-dot" />
              <span className="text-[#69C9D0] font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                ⚡ Official TikTok for Business Partner • Kenya
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Turn TikTok Scrollers
              <br />
              <span className="gradient-text">Into Paying Customers</span>
              <br />
              For Your Business
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              I help Kenyan and East African businesses run profitable TikTok Ads — from KES 5,000/day budgets to full-scale campaigns. Get your brand in front of 1M+ Kenyan TikTok users.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base justify-center"
              >
                🚀 Start Running TikTok Ads →
              </a>
              <a
                href={WHATSAPP_STRATEGY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base justify-center"
              >
                📞 Book Free Strategy Call
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-5 text-sm text-[#A0A0A0]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {HERO_STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#69C9D0]">✅</span>
                  <span>
                    <strong className="text-white">{s.value}</strong> {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard visual */}
          <div className="hidden md:block">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
