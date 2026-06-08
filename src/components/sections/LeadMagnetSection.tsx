"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { BUSINESS_TYPES, WHATSAPP_NUMBER } from "@/data/content";

type FormData = {
  businessName: string;
  name: string;
  whatsapp: string;
  businessType: string;
};

export default function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate submission — send via WhatsApp
    const msg = encodeURIComponent(
      `📥 Free Kit Request\n\nBusiness: ${data.businessName}\nName: ${data.name}\nWhatsApp: ${data.whatsapp}\nType: ${data.businessType}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="free-kit">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111111]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(105,201,208,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-4xl mb-4">📥</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Download the Free{" "}
            <span className="gradient-text">TikTok Ads Starter Kit</span>
            <br />for African Businesses
          </h2>
          <p className="text-[#A0A0A0] text-base max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            A 20-page PDF guide covering: how to set up your account, your first campaign checklist, best-performing ad formats for Kenyan businesses, and 5 proven hooks that stop the scroll.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="glass-card p-5 sm:p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Kit is on its way!
              </h3>
              <p className="text-[#A0A0A0]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Nathan will send your Free TikTok Ads Starter Kit via WhatsApp shortly. Keep an eye on your messages!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    {...register("businessName", { required: "Business name is required" })}
                    placeholder="Business Name"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-[#555555] text-sm focus:outline-none focus:border-[#69C9D0]/50 transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  {errors.businessName && (
                    <p className="text-[#EE1D52] text-xs mt-1">{errors.businessName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("name", { required: "Your name is required" })}
                    placeholder="Your Name"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-[#555555] text-sm focus:outline-none focus:border-[#69C9D0]/50 transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  {errors.name && (
                    <p className="text-[#EE1D52] text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("whatsapp", { required: "WhatsApp number is required" })}
                    placeholder="WhatsApp Number"
                    type="tel"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-[#555555] text-sm focus:outline-none focus:border-[#69C9D0]/50 transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  {errors.whatsapp && (
                    <p className="text-[#EE1D52] text-xs mt-1">{errors.whatsapp.message}</p>
                  )}
                </div>
                <div>
                  <select
                    {...register("businessType", { required: "Please select a business type" })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-[#555555] text-sm focus:outline-none focus:border-[#69C9D0]/50 transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <option value="">Business Type</option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type} className="text-white bg-[#1A1A1A]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="text-[#EE1D52] text-xs mt-1">{errors.businessType.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
              >
                📥 Send Me the Free Kit
              </button>
              <p className="text-center text-[#555555] text-xs mt-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                No spam. Just your free guide + optional follow-up tips.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
