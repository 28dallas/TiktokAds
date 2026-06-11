"use client";

import { motion } from "framer-motion";
import { EXOBOOSTER_URL } from "@/data/content";

export default function ExoBoosterFinalSection() {
  const stats = [
    { number: "500K+", label: "Satisfied Users" },
    { number: "100M+", label: "Followers Delivered" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[#00d4ff] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-[#00d4ff]">
              Accelerate Your Growth?
            </span>
          </h2>

          <p className="text-[#A0A0A0] text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Stop wondering. Start growing. Join ExoBooster today and watch your TikTok presence skyrocket.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0099cc] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                {stat.number}
              </div>
              <p className="text-[#A0A0A0]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={EXOBOOSTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-[#0A0A0A] font-bold text-lg rounded-lg hover:shadow-2xl transition-all transform hover:scale-105"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Claim Your Growth Now 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
