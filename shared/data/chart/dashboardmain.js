
// Linechart
export const linechart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Aug", "Sep", "Oct",],
    datasets: [
      {
        label: "TOTAL BUDGET",
        data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
        borderWidth: 3,
        backgroundColor: "transparent",
        borderColor: "#6259ca",
        pointBackgroundColor: "ffffff",
        pointRadius: 0,
        type: "line",
        tension: 0.4,
      },
      {
        label: "AMOUNT USED",
        data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230],
        borderWidth: 3,
        backgroundColor: "transparent",
        borderColor: "rgb(183, 179, 220,0.5)",
        pointBackgroundColor: "#ffffff",
        pointRadius: 0,
        type: "line",
        borderDash: [7, 3],
        tension: 0.3,
      },
    ],
  };
  export const linechartoptions = {
    responsive: true,
    maintainAspectRatio: false,
  
    plugins: {
      title: {
        display: true,
      },
      legend: {
        position: "top",
        display: true,
      },
      tooltip: {
        enabled: true,
      }
    },
    scales: {
      x: {
        ticks: {
          fontColor: "#c8ccdb",
        },
        barPercentage: 0.7,
        display: true,
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.2)',
        }
      },
      y: {
        display: true,
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.2)',
        },
        scaleLabel: {
          display: true,
          labelString: 'Thousands',
          fontColor: 'transparent'
        }
      }
    },
    interaction: {
      intersect: false,
    },
  };
  ////Radialbar
  export const Radialbar = {
    className: "forth circle",
    series: [75],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    options: {
      colors: ["#6259ca"],
      chart: {
        // height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {},
        },
      },
    },
  };
  // --------Raialbar-end---------------------->
  // Webdesigning
  export const webdesigning = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
    datasets: [
      {
        label: "Total Project",
        backgroundColor: "#6259ca",
        borderColor: "#6259ca ",
        data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56],
        barThickness: 8,
      },
      {
        label: "On Going",
        backgroundColor: "rgba(204, 204, 204,0.2)",
        borderColor: "rgba(204, 204, 204,0.2)",
        data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56],
        barThickness: 8,
      },
    ],
  };
  export const Webdesgining = {
    cornerRadius: 40,
    maintainAspectRatio: false,
    legend: { display: false },
    layout: {
      padding: {
        top: 25,
        bottom: 20,
      },
    },
    scales: {
      x:
      {
        barThickness: 16,
        display: false,
        gridLines: {
          display: false,
        },
        labels: webdesigning.labels,
        ticks: {
          autoSkip: false,
        },
        stacked: true,
      },
  
      y:
      {
        display: false,
        stacked: true,
      },
  
    },
  
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        position: "top",
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
    //  scales: {
    //    x: {
    //     stacked: true,
    //      display: false,
    //    },
    //    y: {
    //      stacked: true,
    //     display: false,
    //    },
    //  },
  };
  
