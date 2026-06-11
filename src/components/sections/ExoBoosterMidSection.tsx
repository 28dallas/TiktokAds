"use client";

import { motion } from "framer-motion";
import { EXOBOOSTER_URL } from "@/data/content";

export default function ExoBoosterMidSection() {
  const features = [
    { icon: "👥", title: "Real Followers", desc: "Authentic accounts that actually engage with your content" },
    { icon: "❤️", title: "Genuine Likes", desc: "Boost engagement with real interactions from active users" },
    { icon: "⚡", title: "Fast Delivery", desc: "See results within hours, not weeks" },
    { icon: "🛡️", title: "Safe & Secure", desc: "100% safe for your account with zero risk" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-bold mb-4 tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>
            WHY CHOOSE EXOBOOSTER
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Grow Your Account{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0099cc]">
              the Right Way
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:border-[#00d4ff]/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                {feature.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={EXOBOOSTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#00d4ff] text-[#0A0A0A] font-bold rounded-lg hover:bg-[#00b8ff] transition-all hover:shadow-2xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get Started with ExoBooster ✨
          </a>
        </motion.div>
      </div>
    </section>
  );
}
