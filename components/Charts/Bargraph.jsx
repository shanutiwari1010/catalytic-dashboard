import Chart from "react-apexcharts";

const Bargraph = ({ data, legend, categories, text }) => {
  const options = {
    legend: {
      // show: legend ? legend : true,
      show: legend,
      fontSize: "14px",
      fontWeight: 500,
      formatter: function (value) {
        return value.split(" ")[0];
      },
      itemMargin: {
        horizontal: 8,
        vertical: 10,
      },
      labels: {
        colors: "black",
        // useSeriesColors: false
      },
    },
    chart: {
      type: "bar",
      height: 250,
      width: 500,
      toolbar: {
        show: false,
        autoSelected: "zoom",
      },
    },
    plotOptions: {
      bar: {
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
    xaxis: {
      categories: categories || [],
      title: {
        text: text,
        offsetY: 5,
        offsetX: -12,
        style: {
          // color: "black",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
          //
        },
      },
      labels: {
        show: true,
        formatter: function (value) {
          return value.split(" ")[0] + " d";
        },
        style: {
          colors: "black",
          fontSize: "8px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
        offsetY: -5,
      },
      axisBorder: {
        show: true,
        color: "black",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#06090a",
        height: 4,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      title: {
        text: "Reports",
        offsetX: -5,
        style: {
          color: "black",
          fontSize: "14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
      stepSize: 10,
      labels: {
        show: true,
        style: {
          colors: "black",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
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
        left: 6,
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={data}
        type="bar"
        height={250}
        width={300}
      />
    </div>
  );
};

export default Bargraph;
