"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/data/content";

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#111111]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            Get Running in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            From zero to live campaign in under an hour.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[#69C9D0]/0 via-[#69C9D0]/40 to-[#69C9D0]/0" />

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative text-center"
            >
              {/* Step number */}
              <div
                className="w-14 h-14 rounded-full border-2 border-[#69C9D0]/30 bg-[#69C9D0]/10 flex items-center justify-center mx-auto mb-6 text-[#69C9D0] font-bold text-lg"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {step.step}
              </div>
              <h3
                className="text-white font-bold text-xl mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#A0A0A0] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.desc}
              </p>
              <a
                href={step.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#69C9D0] text-sm font-semibold hover:underline"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
