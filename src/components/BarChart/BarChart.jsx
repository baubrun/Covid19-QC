import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, region }) => {
  const cases = data.find((d) => d.région === region);

  return (
    <>
      {!region ? (
        ""
      ) : (
        <Bar
          data={{
            labels: ["Confirmés", "Décès"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(129, 233, 121, 0.5)",
                  "rgba(249, 87, 56, 0.6)",
                ],
                data: [cases.confirmés, cases.décès],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: "Nombre de cas confirmés et décès du coronavirus (COVID-19)" }
          }}
        />
      )}
    </>
  );
};
export default BarChart;
