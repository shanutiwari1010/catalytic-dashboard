import Chart from "react-apexcharts";

const Bargraph = ({ data, legend, categories, text }) => {
  const options = {
    legend: {
      // show: legend ? legend : true,
      show: legend,
      fontSize: "10px",
      fontWeight: "bold",

      marginTop: "10px",
      formatter: function (value) {
        return value.split(" ")[0] + " d";
      },
      itemMargin: {
        horizontal: 8,
        vertical: 10,
      },
      labels: {
        colors: "white",
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
          color: "white",
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
          colors: "blackw",
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
        offsetX: 8,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#06090a",
        height: 4,
        offsetX: 8,
        offsetY: 0,
      },
    },
    yaxis: {
      title: {
        text: "Reports",
        offsetX: 3,
        style: {
          color: "black",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
      stepSize: 10,
      labels: {
        show: true,
        style: {
          colors: "black",
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
    <div className="size-52  my-8">
      <Chart
        options={options}
        series={data}
        type="bar"
        height={265}
        width={200}
      />
    </div>
  );
};

export default Bargraph;
