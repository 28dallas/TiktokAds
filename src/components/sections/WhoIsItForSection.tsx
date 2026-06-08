"use client";

import { motion } from "framer-motion";
import { WHO_IS_IT_FOR } from "@/data/content";

export default function WhoIsItForSection() {
  return (
    <section className="py-24 bg-[#111111]">
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
            Is This <span className="gradient-text">For You?</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            TikTok Ads work across industries. Here&apos;s who&apos;s already winning.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {WHO_IS_IT_FOR.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-[#EE1D52]/20 transition-all hover:shadow-[0_0_25px_rgba(238,29,82,0.06)]"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#A0A0A0] text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
