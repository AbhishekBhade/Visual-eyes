import ReactECharts from "echarts-for-react";

function BarChartView({ data, categoryKey, valueKey }) {
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
      axisLine: {
        lineStyle: {
          color: "#475569",
        },
      },
      axisLabel: {
        color: "#CBD5E1",
      },
    },

    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#475569",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      axisLabel: {
        color: "#CBD5E1",
      },
    },

    series: [
      {
        data: values,
        type: "bar",
        borderRadius: [10, 10, 0, 0],

        itemStyle: {
          color: "#5EE6FF",
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
    <div className="h-[500px] w-full">
      <ReactECharts
        option={option}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}

export default BarChartView;