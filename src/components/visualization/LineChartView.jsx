import ReactECharts from "echarts-for-react";

function LineChartView({ data, categoryKey, valueKey }) {
  const categories = data.map(
    (item) => item[categoryKey]
  );

  const values = data.map(
    (item) => Number(item[valueKey])
  );

  const option = {
    backgroundColor: "transparent",

    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category",
      data: categories,
      axisLabel: {
        color: "#CBD5E1",
      },
    },

    yAxis: {
      type: "value",
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
        data: values,
        type: "line",
        smooth: true,

        lineStyle: {
          color: "#C084FC",
          width: 4,
        },

        itemStyle: {
          color: "#C084FC",
        },

        areaStyle: {
          opacity: 0.1,
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

export default LineChartView;