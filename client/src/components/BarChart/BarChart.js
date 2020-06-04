import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarCart.css";
import PropTypes from "prop-types";

const BarChart = ({ data }) => {
  return (
    <>
      {data.length < 1 ? ""
        : (
        <div className="BarChart">
          <Bar
            data={{
              labels: ["Confirmés", "Décès"],
              datasets: [
                {
                  label: "cas",
                  backgroundColor: [
                    "rgba(35, 87, 137, 0.7)",
                    "rgba(193, 41, 46, 0.8)",
                  ],
                  data: [data[0].confirmes, data[0].deces],
                },
              ],
            }}
            options={{
              legend: { display: false },
              responsive: true,
              title: {
                display: true,
              },
            }}
            canvas
          />
        </div>
        )       
          }
    </>
  );
};

BarChart.propTypes = {
  data: PropTypes.array,
};

export default BarChart;