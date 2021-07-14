import { useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { GeneralContext } from "../../contexts/GeneralContext";

function HighCharts() {
  const {
    generalState: { generals },
    getGenerals,
  } = useContext(GeneralContext);

  useEffect(() => getGenerals, []);
  const Temperature = [];
  generals.map(general => Temperature.push(parseFloat(general.data.temperature.value)));
  const Humidity = [];
  generals.map(general => Humidity.push(parseFloat(general.data.humidity.value)));
  const ph = [];
  generals.map(general => ph.push(parseFloat(general.data.ph.value)));
  const Time = [];
  generals.map(general => Time.push(`${general.time.hours}:${general.time.minutes}:${general.time.seconds}`) )

  const style = {
      maxWidth: "auto",
      minWidth: "auto",
  }

  const options = {
    title: {
      text: "Monitoring chart",
    },

    yAxis: {
      title: {
        text: "Value",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Time",
      },
      categories: Time,
      crosshair: true,
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 0,
      },
    },

    series: [
      {
        name: "Temperature",
        data: Temperature 
      },
      {
        name: "Humidity",
        data: Humidity
      },
      {
        name: "ph",
        data: ph
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact style={style} padding="20px" highcharts={Highcharts} options={options} />
    </div>
  );
}

export default HighCharts;
