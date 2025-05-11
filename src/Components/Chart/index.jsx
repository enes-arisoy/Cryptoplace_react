import React from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const data = [
    ["Date", "Price"],
    ...historicalData.map((item) => {
      // veri içerisinde bulunan ms cinsinden zaman damgalarını tarih formatına çevir
      const date = new Date(item.timestamp);
      // tarihi formatla

      const time = date.toLocaleDateString("tr", { day: "2-digit", month: "2-digit" });

    // fiyatı ve tarihi içeren bir dizi döndür
    return [time, parseInt(item.price)]
  }),
    ];
  return <Chart chartType="LineChart" data={data} height="100%" />;
};

export default LineChart;
