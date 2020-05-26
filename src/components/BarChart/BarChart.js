import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarCart.css"
import PropTypes from "prop-types"


const BarChart = ({ data, region }) => {
  const cases = data.find((d) => d.région === region);

  return (
    <>
      {!region ? (
        ""
      ) : (
        <div className="barCart-container">
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
              responsive: true,
              title: {
                display: true,
                text:
                  "Nombre de cas confirmés et décès du coronavirus (COVID-19)",
              },
              scales: { gridLines: { color: "rgba(129, 233, 121, 0.5)" } },
            }}
            canvas
          />
        </div>
      )}
    </>
  );
};


BarChart.propTypes = {
  data: PropTypes.array,
  region: PropTypes.string
}

export default BarChart;
