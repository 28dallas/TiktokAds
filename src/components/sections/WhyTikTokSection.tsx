"use client";

import { motion } from "framer-motion";
import { WHY_TIKTOK_STATS, WHY_TIKTOK_FEATURES } from "@/data/content";

export default function WhyTikTokSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Customers Are Already on TikTok.
            <br />
            <span className="gradient-text">Are You?</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Over 1.2 million Kenyans open TikTok every single day. Here&apos;s why smart businesses are moving their ad budgets here.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {WHY_TIKTOK_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:border-[#69C9D0]/30 transition-colors"
            >
              <div
                className="text-4xl lg:text-5xl font-bold gradient-text mb-3"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {stat.number}
              </div>
              <div className="text-[#A0A0A0] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_TIKTOK_FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card p-7 group hover:border-[#69C9D0]/20 transition-all hover:shadow-[0_0_30px_rgba(105,201,208,0.08)]"
            >
              <div className="text-3xl mb-4">{feat.icon}</div>
              <h3
                className="text-white font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {feat.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
