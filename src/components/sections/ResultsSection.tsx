"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";

export default function ResultsSection() {
  return (
    <section className="py-24 bg-[#0A0A0A]" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold mb-4 tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>
            REAL RESULTS FROM REAL BUSINESSES
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Numbers That{" "}
            <span className="gradient-text">Don&apos;t Lie</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Actual results from Kenyan businesses running TikTok Ads through Apex Blue Sky.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-7 flex flex-col hover:border-[#69C9D0]/20 transition-all"
            >
              {/* Quote */}
              <div className="text-[#555555] text-3xl mb-4 leading-none">&ldquo;</div>
              <p
                className="text-[#A0A0A0] text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t.quote}
              </p>

              {/* ROAS badge */}
              <div
                className="inline-block px-3 py-1.5 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-sm font-bold mb-5 self-start"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {t.roas}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #69C9D0, #EE1D52)",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[#555555] text-xs">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
