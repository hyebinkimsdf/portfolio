import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  labels: ["Blue", "Yellow"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
    },
  ],
};

export function CircleChart() {
  return <Doughnut className="max-w-[300px] max-h-[300px]" data={data} />;
}
