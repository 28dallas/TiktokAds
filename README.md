# Apex Blue Sky — TikTok Ads Affiliate Website

A world-class, high-converting TikTok Ads affiliate landing page for East African businesses.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration — IMPORTANT

All content, links, and contact details are centralized in one file:

```
src/data/content.ts
```

**Before launching, update these in `content.ts`:**

| Variable | What to change |
|---|---|
| `AFFILIATE_URL` | Your TikTok for Business affiliate referral link |
| `WHATSAPP_NUMBER` | Your WhatsApp number (format: `254XXXXXXXXX`) |
| `SOCIAL_LINKS` | Your TikTok, Instagram, YouTube, LinkedIn URLs |
| `CONTACT_EMAIL` | Your contact email |

Example:
```ts
export const AFFILIATE_URL = 'https://ads.tiktok.com/i18n/signup?referral_code=YOUR_CODE_HERE'
export const WHATSAPP_NUMBER = '254712345678'
```

## 📁 Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Homepage (assembles all sections)
    globals.css         # Global styles, CSS variables
    sitemap.ts          # Auto-generated sitemap
  components/
    layout/
      AnnouncementBar.tsx
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      TickerSection.tsx
      WhyTikTokSection.tsx
      HowItWorksSection.tsx
      ResultsSection.tsx
      WhoIsItForSection.tsx
      PricingSection.tsx
      FAQSection.tsx
      AboutSection.tsx
      LeadMagnetSection.tsx
      FinalCTASection.tsx
  data/
    content.ts          # ← EDIT ALL CONTENT HERE
```

## 🌐 Deployment

Deploy to Vercel in 2 minutes:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Next.js — click Deploy

Then add your custom domain `apexbluesky.co.ke` in Vercel dashboard.

## 🖼️ Adding a Real Photo

In `AboutSection.tsx`, replace the `NP` initials div with a `next/image`:

```tsx
import Image from 'next/image'

<Image src="/nathan.jpg" alt="Nathan Krop" width={256} height={256} className="rounded-2xl" />
```

Place your photo at `public/nathan.jpg`.

## 📞 Lead Form

The lead magnet form (`LeadMagnetSection.tsx`) currently sends submissions via WhatsApp. To add email capture, integrate with:
- **Resend** (https://resend.com) — transactional email
- **Mailchimp** — email list management
- **Supabase** — database storage

---

Built for Apex Blue Sky by Nathan Krop | apexbluesky.co.ke
