"use client";

import { motion } from "framer-motion";
import { AFFILIATE_URL, WHATSAPP_URL } from "@/data/content";

export default function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A] grid-bg" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(105,201,208,0.4), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Competitors Are Already
            <br />
            <span className="gradient-text">Running TikTok Ads.</span>
          </h2>
          <p
            className="text-[#A0A0A0] text-base sm:text-xl mb-12"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Will you be next — or will you watch them take your customers?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg py-4 px-6 sm:px-8 justify-center"
            >
              🚀 Start Running TikTok Ads Now →
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base sm:text-lg py-4 px-6 sm:px-8 justify-center"
            >
              💬 Talk to Nathan on WhatsApp
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#A0A0A0]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {["Free to start", "No contracts", "Results in 48 hours"].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-[#69C9D0]">✅</span> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
