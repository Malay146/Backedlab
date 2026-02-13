import React from "react";

const Timelines = () => {
  const timelines = [
    {
      category: "/01 DIGITAL PRODUCT",
      details: [
        { task: "MVP web app", duration: "4–10 weeks" },
        { task: "MVP mobile app", duration: "2–8 weeks" },
        { task: "New feature sprint", duration: "min. 1 week" },
        { task: "Product refactor", duration: "min. 1 week" },
        { task: "Design system", duration: "min. 1 week" },
        { task: "UX audit", duration: "min. 1 week" },
      ],
    },
    {
      category: "/02 BRAND",
      details: [
        { task: "Logo design", duration: "3–5 days" },
        { task: "Full brand identity", duration: "5–10 days" },
        { task: "Brand guidelines", duration: "5 days" },
        { task: "Brand  uplift / revamp", duration: "10–15 days" },
        { task: "Marketing campaign", duration: "min. 1 week" },
        { task: "Merchandise design", duration: "min. 3 days" },
      ],
    },
    {
      category: "/03 WEBSITE",
      details: [
        { task: "Design only", duration: "min. 3 days" },
        { task: "Build in Framer", duration: "min. 10 days" },
        { task: "Build in Webflow", duration: "min. 10 days" },
        { task: "Fully coded", duration: "min. 10 days" },
        { task: "Shopify", duration: "min. 10 days" },
        { task: "E-Commerce", duration: "min. 10 days" },
      ],
    },
    {
      category: "/04 MVPS",
      details: [
        { task: "Idea validation", duration: "3–5 days" },
        { task: "UX flows", duration: "5–7 days" },
        { task: "Rapid prototyping", duration: "1–2 weeks" },
        { task: "MVP build", duration: "2–4 weeks" },
        { task: "Testing & iteration", duration: "min. 1 week" },
        { task: "Launch support", duration: "2–3 days" },
      ],
    },
  ];

  return (
    <div className="w-full px-6 py-2">
      <section className="w-full">
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="font-inter font-medium text-5xl tracking-tight mb-12">
            Delivery timelines
          </h2>
          {/* <p className="text-zinc-600 mb-12 max-w-xl">
            Estimated timelines based on typical scope and requirements.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-zinc-200 bg-white">
            {timelines.map((col, i) => (
              <div
                key={i}
                className="py-6 px-4 border-r border-zinc-200 last:border-r-0"
              >
                <h3 className="text-sm font-mono font-semibold text-zinc-900 mb-6">
                  <span className="chroma-card-title">{col.category}</span>
                </h3>

                <ul className="space-y-3">
                  {col.details.map(({ task, duration }, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between text-sm text-zinc-700"
                    >
                      <span className="font-sans">{task}</span>
                      <span className="font-mono text-zinc-500">
                        {duration}
                      </span>
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
