import ReactECharts from "echarts-for-react";

function ScatterPlotView({ data, valueKey }) {
  const values = data.map((item, index) => [
    index + 1,
    Number(item[valueKey]),
  ]);

  const option = {
    backgroundColor: "transparent",

    tooltip: {},

    xAxis: {
      axisLabel: {
        color: "#CBD5E1",
      },
    },

    yAxis: {
      axisLabel: {
        color: "#CBD5E1",
      },

      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },

    series: [
      {
        type: "scatter",

        data: values,

        symbolSize: 18,

        itemStyle: {
          color: "#FFB86C",
          shadowBlur: 20,
          shadowColor: "#FFB86C",
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

export default ScatterPlotView;