"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/data/content";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#0A0A0A]" id="pricing">
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
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Start free and scale at your own pace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.highlight
                  ? "border-[#69C9D0]/40 shadow-[0_0_50px_rgba(105,201,208,0.12)]"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #69C9D0, #EE1D52)", fontFamily: "var(--font-syne)" }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className={`text-3xl font-bold ${plan.highlight ? "gradient-text" : "text-white"}`}
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <div className="text-[#555555] text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
                  {plan.priceNote}
                </div>
              </div>

              <p
                className="text-[#A0A0A0] text-sm mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {plan.desc}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={15} className="text-[#69C9D0] mt-0.5 shrink-0" />
                    <span className="text-[#A0A0A0]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.highlight ? "btn-primary justify-center" : "btn-ghost justify-center"}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
