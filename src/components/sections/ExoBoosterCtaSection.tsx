"use client";

import { motion } from "framer-motion";
import { EXOBOOSTER_URL } from "@/data/content";

export default function ExoBoosterCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0099cc]/20 via-transparent to-[#e94560]/20 border-t border-b border-[#00d4ff]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <div className="text-5xl md:text-6xl mb-6">📱</div>

          <h3
            className="text-2xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Double Your Engagement in Days
          </h3>

          <p
            className="text-[#A0A0A0] text-lg mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Join thousands of TikTokers who trust ExoBooster to accelerate their growth. Real followers. Real engagement. Real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href={EXOBOOSTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#e94560] to-[#ff6b9d] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Boost My Account Now
            </motion.a>

            <motion.a
              href={EXOBOOSTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00d4ff]/20 text-[#00d4ff] font-bold rounded-lg border border-[#00d4ff]/40 hover:bg-[#00d4ff]/30 transition-all"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Learn More →
            </motion.a>
          </div>

          <p className="text-[#555555] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
            ✓ No credit card required · ✓ Instant activation · ✓ Secure & verified
          </p>
        </motion.div>
      </div>
    </section>
  );
}
