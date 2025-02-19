import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

interface CircleChartProp {
  part01: number;
  part02: number;
}

export function CircleChart({ part01, part02 }: CircleChartProp) {
  const data = {
    labels: ["Blue", "Yellow"],
    datasets: [
      {
        data: [part01, part02],
        backgroundColor: ["#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Doughnut className="max-w-[300px] max-h-[300px]" data={data} />;
}
