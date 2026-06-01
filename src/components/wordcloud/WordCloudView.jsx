import ReactECharts from "echarts-for-react";

import "echarts-wordcloud";

function WordCloudView({ words }) {
  const option = {
    backgroundColor: "transparent",

    tooltip: {
      show: true,
    },

    series: [
      {
        type: "wordCloud",

        shape: "circle",

        left: "5%",
        right: "5%",
        top: "5%",
        bottom: "5%",

        width: "90%",
        height: "90%",

        sizeRange: [18, 88],

        rotationRange: [-20, 20],

        gridSize: 10,

        drawOutOfBound: false,

          textStyle: {
          fontFamily: "VT323, 'Press Start 2P', monospace",

          color: () => {
            const colors = [
              "#5EE6FF",
              "#C084FC",
              "#FFB86C",
              "#E2E8F0",
            ];

            return colors[
              Math.floor(Math.random() * colors.length)
            ];
          },
        },

        emphasis: {
          textStyle: {
            shadowBlur: 20,
            shadowColor: "#5EE6FF",
          },
        },

        data: words,
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-6">
        <div className="h-[min(60vh,640px)] rounded-lg overflow-hidden">
          <ReactECharts
            option={option}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default WordCloudView;