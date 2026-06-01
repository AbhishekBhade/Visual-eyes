function InsightStats({ words }) {
  const totalWords = words.reduce(
    (acc, item) => acc + item.value,
    0
  );

  const uniqueWords = words.length;

  const strongestWord =
    words.sort((a, b) => b.value - a.value)[0];

  const stats = [
    {
      label: "TOTAL SIGNALS",
      value: totalWords,
    },
    {
      label: "UNIQUE PATTERNS",
      value: uniqueWords,
    },
    {
      label: "DOMINANT TERM",
      value: strongestWord?.name || "---",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-cyan-400/10
            bg-white/[0.03]
            p-6
            backdrop-blur-xl
          "
        >

          <p
            className="
              text-xs
              tracking-[0.18em]
              text-slate-500
            "
          >
            {stat.label}
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-bold
              text-cyan-100
            "
          >
            {stat.value}
          </h3>

        </div>
      ))}

    </div>
  );
}

export default InsightStats;