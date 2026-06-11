"use client";

import { motion } from "framer-motion";
import { EXOBOOSTER_URL } from "@/data/content";

export default function ExoBoosterHeroSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e94560] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#e94560]/20 border border-[#e94560]/40 text-[#e94560] text-xs font-bold mb-4 tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>
            🚀 BOOST YOUR PRESENCE
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Want Real Followers & Likes?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#00d4ff]">
              ExoBooster Has You Covered
            </span>
          </h2>

          <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Grow your TikTok account faster. Get real followers, authentic likes, and genuine engagement.
          </p>

          <motion.a
            href={EXOBOOSTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b9d] text-white font-bold rounded-lg hover:shadow-2xl transition-all"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Start Growing Now →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
