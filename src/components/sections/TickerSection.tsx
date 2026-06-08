import { TICKER_ITEMS } from "@/data/content";

function TickerItem({ item }: { item: typeof TICKER_ITEMS[0] }) {
  return (
    <div className="flex items-center gap-3 px-8 whitespace-nowrap">
      <span className="text-xl">{item.icon}</span>
      <span className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
        {item.name}
      </span>
      <span className="text-[#555555]">—</span>
      <span className="text-[#69C9D0] text-sm font-medium" style={{ fontFamily: "var(--font-space-mono)" }}>
        {item.result}
      </span>
      <span className="text-[#EE1D52] mx-4">•</span>
    </div>
  );
}

export default function TickerSection() {
  return (
    <section className="bg-[#111111] border-y border-white/5 py-5 overflow-hidden">
      {/* Row 1 */}
      <div className="mb-4 overflow-hidden">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="overflow-hidden">
        <div className="ticker-track-reverse">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
