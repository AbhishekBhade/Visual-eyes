import ReactECharts from "echarts-for-react";

function PieChartView({ data, categoryKey, valueKey }) {
  const formattedData = data.map((item) => ({
    name: item[categoryKey],
    value: Number(item[valueKey]),
  }));

  const option = {
    backgroundColor: "transparent",

    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "pie",

        radius: ["45%", "75%"],

        data: formattedData,

        itemStyle: {
          borderColor: "#0B1020",
          borderWidth: 4,
        },

        label: {
          color: "#E2E8F0",
        },

        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "#5EE6FF",
          },
        },
      },
    ],
  };

  return (
    <div className="h-[450px] w-full">
      <ReactECharts option={option} style={{ height: "100%" }} />
    </div>
  );
}

export default PieChartView;