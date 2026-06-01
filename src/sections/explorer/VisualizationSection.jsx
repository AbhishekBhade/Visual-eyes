import useVisualizerStore from "../../store/useVisualizerStore";

import analyzeDataset from "../../utils/analyzeDataset";

import ObservatoryPanel from "../../components/layout/ObservatoryPanel";

import BarChartView from "../../components/visualization/BarChartView";
import LineChartView from "../../components/visualization/LineChartView";
import PieChartView from "../../components/visualization/PieChartView";
import ScatterPlotView from "../../components/visualization/ScatterPlotView";

function VisualizationSection() {
  const uploadedData = useVisualizerStore(
    (state) => state.uploadedData
  );

  if (!uploadedData || uploadedData.length === 0) {
    return null;
  }

  const analysis = analyzeDataset(uploadedData);

  const numericColumns = analysis.filter(
    (item) => item.type === "numeric"
  );

  const categoricalColumns = analysis.filter(
    (item) => item.type === "categorical"
  );

  if (
    numericColumns.length === 0 ||
    categoricalColumns.length === 0
  ) {
    return null;
  }

  const categoryKey =
    categoricalColumns[0].column;

  const valueKey =
    numericColumns[0].column;

  return (
    <section className="relative z-10 px-6 pb-24">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">

        {/* Header */}
        <ObservatoryPanel>

          <div className="px-6 py-8 sm:px-10 sm:py-12">

            <h2
              className="
                text-3xl
                font-bold
                tracking-[0.14em]
                text-white
              "
            >
              VISUAL SIGNALS
            </h2>

            <p className="mt-4 text-slate-400">
              Automatically generated insights from uploaded dataset.
            </p>

          </div>

        </ObservatoryPanel>

        {/* Visualization Grid */}
        <div className="grid gap-10 lg:grid-cols-2">

          <ObservatoryPanel>
            <div className="p-6 min-h-[300px] sm:min-h-[420px]">
              <BarChartView
                data={uploadedData}
                categoryKey={categoryKey}
                valueKey={valueKey}
              />
            </div>
          </ObservatoryPanel>

          <ObservatoryPanel>
            <div className="p-6 min-h-[300px] sm:min-h-[420px]">
              <LineChartView
                data={uploadedData}
                categoryKey={categoryKey}
                valueKey={valueKey}
              />
            </div>
          </ObservatoryPanel>

          <ObservatoryPanel>
            <div className="p-6 min-h-[300px] sm:min-h-[420px]">
              <PieChartView
                data={uploadedData}
                categoryKey={categoryKey}
                valueKey={valueKey}
              />
            </div>
          </ObservatoryPanel>

          <ObservatoryPanel>
            <div className="p-6 min-h-[300px] sm:min-h-[420px]">
              <ScatterPlotView
                data={uploadedData}
                valueKey={valueKey}
              />
            </div>
          </ObservatoryPanel>

        </div>

      </div>

    </section>
  );
}

export default VisualizationSection;