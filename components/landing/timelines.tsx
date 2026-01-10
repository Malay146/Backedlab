import React from "react";

const Timelines = () => {
  return (
    <div className="w-full">
      <section className="w-full">
        <div className="max-w-320 mx-auto px-6 py-20">
          <h2 className="font-sans font-medium text-5xl tracking-tight mb-4">
            Delivery timelines
          </h2>
          {/* <p className="text-zinc-600 mb-12 max-w-xl">
            Estimated timelines based on typical scope and requirements.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-zinc-200 bg-white">
            {[
              {
                title: "/01 DIGITAL PRODUCT",
                items: [
                  ["MVP web app", "4–10 weeks"],
                  ["MVP mobile app", "2–8 weeks"],
                  ["New feature sprint", "min. 1 week"],
                  ["Product refactor", "min. 1 week"],
                  ["Design system", "min. 1 week"],
                  ["UX audit", "min. 1 week"],
                ],
              },
              {
                title: "/02 BRAND",
                items: [
                  ["Logo design", "3–5 days"],
                  ["Full brand identity", "5–10 days"],
                  ["Brand guidelines", "5 days"],
                  ["Brand uplift / revamp", "10–15 days"],
                  ["Marketing campaign", "min. 1 week"],
                  ["Merchandise design", "min. 3 days"],
                ],
              },
              {
                title: "/03 WEBSITE",
                items: [
                  ["Design only", "min. 3 days"],
                  ["Build in Framer", "min. 10 days"],
                  ["Build in Webflow", "min. 10 days"],
                  ["Fully coded", "min. 10 days"],
                  ["Shopify", "min. 10 days"],
                  ["E-Commerce", "min. 10 days"],
                ],
              },
              {
                title: "/04 MVPS",
                items: [
                  ["Idea validation", "3–5 days"],
                  ["UX flows", "5–7 days"],
                  ["Rapid prototyping", "1–2 weeks"],
                  ["MVP build", "2–4 weeks"],
                  ["Testing & iteration", "min. 1 week"],
                  ["Launch support", "2–3 days"],
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="py-6 px-4 border-r border-zinc-200 last:border-r-0"
              >
                <h3 className="text-sm font-mono font-semibold text-zinc-900 mb-6">
                  {col.title}
                </h3>

                <ul className="space-y-3">
                  {col.items.map(([label, time], idx) => (
                    <li
                      key={idx}
                      className="flex justify-between text-sm text-zinc-700"
                    >
                      <span className="font-sans">{label}</span>
                      <span className="font-mono text-zinc-500">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timelines;
