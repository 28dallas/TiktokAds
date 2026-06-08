"use client";

import { motion } from "framer-motion";
import { ABOUT_CREDENTIALS, SOCIAL_LINKS, WHATSAPP_URL, TELEGRAM_URL, WHATSAPP_CHANNEL_URL } from "@/data/content";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#111111]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{ background: "linear-gradient(135deg, #69C9D0, #EE1D52)" }}
              />
              {/* Avatar card */}
              <div
                className="relative w-64 h-64 rounded-2xl flex items-center justify-center text-white text-5xl font-extrabold"
                style={{
                  background: "linear-gradient(135deg, rgba(105,201,208,0.15), rgba(238,29,82,0.15))",
                  border: "1px solid rgba(105,201,208,0.2)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                NP
                {/* Decorative accents */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                  style={{ background: "#69C9D0" }}
                />
                <div
                  className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full"
                  style={{ background: "#EE1D52" }}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs text-[#A0A0A0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                @PrinceBreezy / NatePrince
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Who&apos;s Behind{" "}
              <span className="gradient-text">Apex Blue Sky?</span>
            </h2>

            <div
              className="text-[#A0A0A0] text-base leading-relaxed space-y-4 mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <p>
                Hi, I&apos;m <strong className="text-white">Nathan</strong> — digital marketer, TikTok creator, and founder of Apex Blue Sky.
              </p>
              <p>
                I&apos;ve spent years mastering digital advertising across African markets. As an official TikTok for Business affiliate and full-stack developer, I understand both the technical and creative side of running ads that actually convert.
              </p>
              <p>
                I&apos;ve helped 200+ businesses across Kenya, Tanzania, and Uganda find their customers on TikTok — from small food stalls in Nairobi to real estate developers in Kilimani.
              </p>
              <p>
                My approach is simple: <strong className="text-white">honest strategy, data-driven decisions, and results you can see in your M-Pesa statement.</strong>
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {ABOUT_CREDENTIALS.map((cred, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-[#69C9D0]">✅</span>
                  <span className="text-[#A0A0A0]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 flex-wrap">
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-white/10 text-[#A0A0A0] hover:text-white hover:border-[#EE1D52]/50 text-sm transition-all"
                style={{ fontFamily: "var(--font-syne)" }}>
                TikTok
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-white/10 text-[#A0A0A0] hover:text-white hover:border-purple-500/50 text-sm transition-all"
                style={{ fontFamily: "var(--font-syne)" }}>
                Instagram
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-white/10 text-[#A0A0A0] hover:text-white hover:border-blue-600/50 text-sm transition-all"
                style={{ fontFamily: "var(--font-syne)" }}>
                Facebook
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 text-sm transition-all"
                style={{ fontFamily: "var(--font-syne)" }}>
                WhatsApp
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/30 text-[#229ED9] hover:bg-[#229ED9]/20 text-sm transition-all"
                style={{ fontFamily: "var(--font-syne)" }}>
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
