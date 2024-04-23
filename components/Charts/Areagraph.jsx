/* eslint-disable react/prop-types */

import Chart from "react-apexcharts";

const Areagraph = ({ data, legend, text }) => {
  const options = {
    legend: {
      show: legend,
      fontSize: "10px",
      fontWeight: "bold",
      offsetY: 10,
      offsetX: -5,

      marginTop: "10px",
      formatter: function (value) {
        return value.split(" ")[0];
      },
      itemMargin: {
        horizontal: 8,
        vertical: 10,
      },
      labels: {
        colors: "white",
      },
    },
    chart: {
      type: "area",
      height: 250,
      width: 500,
      toolbar: {
        show: false,
        autoSelected: "zoom",
      },
    },
    plotOptions: {
      area: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    axisBorder: {
      show: true,
      color: "#78909C",
      height: 1,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      title: {
        text: text,
        offsetY: 5,
        offsetX: -12,
        style: {
          color: "white",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
      labels: {
        show: true,
        // formatter: function (value) {
        //   return value.split(" ")[0];
        // },
        style: {
          colors: "white",
          fontSize: "8px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
        offsetY: -5,
      },
      axisBorder: {
        show: true,
        color: "white",
        height: 1,
        width: "100%",
        offsetX: 8,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 4,
        offsetX: 8,
        offsetY: 0,
      },
    },

    yaxis: {
      title: {
        text: "Device Information",
        offsetX: 3,
        style: {
          color: "white",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
      stepSize: 10,
      labels: {
        show: true,
        style: {
          colors: "white",
          fontSize: "8px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },

    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div className="size-52 ring-4 ring-purple-500 rounded-xl my-8">
      <Chart
        options={options}
        series={data}
        type="area"
        height={265}
        width={200}
      />
    </div>
  );
};

export default Areagraph;
