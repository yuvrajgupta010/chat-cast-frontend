import React, { Component } from 'react';
// import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import DataTable from "react-data-table-component";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import dynamic from 'next/dynamic';
const DataTableExtensions = dynamic(() => import('react-data-table-component-extensions'), { ssr: false });
import "react-data-table-component-extensions/dist/index.css";
import { Badge, OverlayTrigger, Tooltip, } from 'react-bootstrap';
// import ReactApexChart from 'react-apexcharts';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend
);

// Sales Report by Locations with Devices START*******************

// Sales Report by Locations with Devices END*******************

// Product Sales START***************************

export const AllProduct = () => {
  const data = [

    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/10.jpg',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2021',
      amount: '$6.721.5',
      payment: 'Online Payment',
      status: 'Shipped',
      Action: '0.36%',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/12.jpg',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2021',
      amount: '$35,7863',
      payment: 'Online Payment',
      status: 'Cancelled',
      Action: '0.36%',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/4.jpg',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2021',
      amount: '$5,89,6437',
      payment: 'Cash on Delivery',
      status: 'Pending',
      Action: '0.36%',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/8.jpg',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2021',
      amount: '$17.98',
      payment: 'Online Payment',
      status: 'Shipped',
      Action: '0.36%',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/6.jpg',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      status: 'Cancelled',
      Action: '0.36%',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/1.jpg',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      status: 'Pending',
      Action: '0.36%',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/11.jpg',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2021',
      amount: '$7,34,9768',
      payment: 'Online Payment',
      status: 'Shipped',
      Action: '0.36%',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/2.jpg',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2021',
      amount: '$7.76.654',
      payment: 'Cash on Delivery',
      status: 'Pending',
      Action: '0.36%',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
    },
  ];
  const columns = [
    {
      name: "TRACKING ID",
      selector: row => [row.trid],
      sortable: false,
      cell: row => <span className="align-middle"> {row.trid} </span>
    },
    {
      name: "PRODUCT",
      selector: row => [row.icon],
      sortable: true,
      cell: row => <div className="align-middle">
        <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} /> <span >{row.product}</span>
      </div>
    },
    {
      name: "	CUSTOMER",
      selector: row => [row.customer],
      sortable: true,
      cell: row => <span className="text-nowrap align-middle">{row.customer}</span>
    },
    {
      name: "DATE",
      selector: row => [row.date],
      sortable: true,
      cell: row => <span className="text-nowrap align-middle">{row.date}</span>
    },
    {
      name: "AMOUNT",
      sortable: false,
      cell: row => <span className="text-center align-middle">{row.amount}</span>
    },
    {
      name: "PAYMENT MODE",
      sortable: false,
      cell: row => <span className="text-center align-middle">{row.payment}</span>
    },
    {
      name: "STATUS",
      sortable: true,
      cell: row => <Badge bg={row.classname} className="text-center align-middle">{row.status}</Badge>
    },
    {
      name: "ACTION",
      sortable: false,
      cell: () => <div>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <span className="fe fe-edit fs-18 text-primary me-4"></span>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
        </OverlayTrigger>
      </div>
    },
  ];

  const tableData = {
    columns,
    data
  };

  return (
    <div className="product">
      <DataTableExtensions className="table-bordered text-nowrap mb-0" {...tableData}>
        <DataTable className="border-bottom"
          columns={columns}
          data={data}
          noHeader
          // defaultSortField="name"
          sortIcon={<ArrowDownwardIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  );
};

// All Product tab END ****

// Shipped tab START ****

export const Shipped = () => {

  const data = [

    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/10.jpg',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2021',
      amount: '$6.721.5',
      payment: 'Online Payment',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/12.jpg',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2021',
      amount: '$35,7863',
      payment: 'Online Payment',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/4.jpg',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2021',
      amount: '$5,89,6437',
      payment: 'Cash on Delivery',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/8.jpg',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2021',
      amount: '$17.98',
      payment: 'Online Payment',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/6.jpg',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/1.jpg',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/11.jpg',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2021',
      amount: '$7,34,9768',
      payment: 'Online Payment',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/2.jpg',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2021',
      amount: '$7.76.654',
      payment: 'Cash on Delivery',
      classname: 'success-transparent rounded-pill text-success p-2 px-3',
      Action: '0.36%',
    },
  ];
  const columns = [
    {
      name: "TRACKING ID",
      selector: row => [row.trid],
      cell: row => <span className="align-middle"> {row.trid} </span>
    },
    {
      name: "PRODUCT",
      selector: row => [row.icon],
      cell: row => <div className="align-middle">
        <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} /> <span >{row.product}</span>
      </div>
    },
    {
      name: "	CUSTOMER",
      selector: row => [row.customer],
      cell: row => <span className="text-nowrap align-middle">{row.customer}</span>
    },
    {
      name: "DATE",
      selector: row => [row.date],
      cell: row => <span className="text-nowrap align-middle">{row.date}</span>
    },
    {
      name: "AMOUNT",
      cell: row => <span className="text-center align-middle">{row.amount}</span>
    },
    {
      name: "PAYMENT MODE",
      cell: row => <span className="text-center align-middle">{row.payment}</span>
    },
    {
      name: "STATUS",
      cell: row => <Badge bg={row.classname}>Shipped</Badge>
    },
    {
      name: "ACTION",
      sortable: false,
      cell: () => <div>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <span className="fe fe-edit fs-18 text-primary me-4"></span>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
        </OverlayTrigger>
      </div>
    },
  ];

  return (
    <div className="">
      <DataTable className="border-bottom"
        columns={columns}
        data={data}
        noHeader
        sortIcon={<ArrowDownwardIcon />}
        highlightOnHover
        dense
      />
    </div>
  );
};

// Shipped tab END ****

// Pending tab Start ******

export const Pending = () => {

  const data = [

    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/10.jpg',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2021',
      amount: '$6.721.5',
      payment: 'Online Payment',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/4.jpg',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2021',
      amount: '$5,89,6437',
      payment: 'Cash on Delivery',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/8.jpg',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2021',
      amount: '$17.98',
      payment: 'Online Payment',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/6.jpg',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/1.jpg',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/11.jpg',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2021',
      amount: '$7,34,9768',
      payment: 'Online Payment',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/2.jpg',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2021',
      amount: '$7.76.654',
      payment: 'Cash on Delivery',
      classname: 'warning-transparent rounded-pill text-warning p-2 px-3',
      Action: '0.36%',
    },
  ];
  const columns = [
    {
      name: "TRACKING ID",
      selector: row => [row.trid],
      cell: row => <span className="align-middle"> {row.trid} </span>
    },
    {
      name: "PRODUCT",
      selector: row => [row.icon],
      cell: row => <div className="align-middle">
        <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} /> <span >{row.product}</span>
      </div>
    },
    {
      name: "	CUSTOMER",
      selector: row => [row.customer],
      cell: row => <span className="text-nowrap align-middle">{row.customer}</span>
    },
    {
      name: "DATE",
      selector: row => [row.date],
      cell: row => <span className="text-nowrap align-middle">{row.date}</span>
    },
    {
      name: "AMOUNT",
      cell: row => <span className="text-center align-middle">{row.amount}</span>
    },
    {
      name: "PAYMENT MODE",
      cell: row => <span className="text-center align-middle">{row.payment}</span>
    },
    {
      name: "STATUS",
      cell: row => <Badge bg={row.classname} className="">Pending</Badge>
    },
    {
      name: "ACTION",
      sortable: false,
      cell: () => <div>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <span className="fe fe-edit fs-18 text-primary me-4"></span>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
        </OverlayTrigger>
      </div>
    },
  ];

  return (
    <div className="">
      <DataTable className="border-bottom"
        columns={columns}
        data={data}
        noHeader
        sortIcon={<ArrowDownwardIcon />}
        highlightOnHover
        dense
      />
    </div>
  );
};

// Pending tab End ******

// Cancelled tab Start ******

export const Cancelled = () => {

  const data = [

    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/10.jpg',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2021',
      amount: '$6.721.5',
      payment: 'Online Payment',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/12.jpg',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2021',
      amount: '$35,7863',
      payment: 'Online Payment',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/4.jpg',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2021',
      amount: '$5,89,6437',
      payment: 'Cash on Delivery',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/8.jpg',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2021',
      amount: '$17.98',
      payment: 'Online Payment',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/6.jpg',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
    {
      trid: '#98765490',
      icon: '../../../assets/images/orders/1.jpg',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2021',
      amount: '$8.654.4',
      payment: 'Cash on Delivery',
      classname: 'danger-transparent rounded-pill text-danger p-2 px-3',
      Action: '0.36%',
    },
  ];
  const columns = [
    {
      name: "TRACKING ID",
      selector: row => [row.trid],
      cell: row => <span className="align-middle"> {row.trid} </span>
    },
    {
      name: "PRODUCT",
      selector: row => [row.icon],
      cell: row => <div className="align-middle">
        <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} /> <span >{row.product}</span>
      </div>
    },
    {
      name: "	CUSTOMER",
      selector: row => [row.customer],
      cell: row => <span className="text-nowrap align-middle">{row.customer}</span>
    },
    {
      name: "DATE",
      selector: row => [row.date],
      cell: row => <span className="text-nowrap align-middle">{row.date}</span>
    },
    {
      name: "AMOUNT",
      cell: row => <span className="text-center align-middle">{row.amount}</span>
    },
    {
      name: "PAYMENT MODE",
      cell: row => <span className="text-center align-middle">{row.payment}</span>
    },
    {
      name: "STATUS",
      cell: row => <Badge bg={row.classname} className="">Cancelled</Badge>
    },
    {
      name: "ACTION",
      sortable: false,
      cell: () => <div>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <span className="fe fe-edit fs-18 text-primary me-4"></span>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
        </OverlayTrigger>
      </div>
    },
  ];

  return (
    <div className="">
      <DataTable className="border-bottom"
        columns={columns}
        data={data}
        noHeader
        sortIcon={<ArrowDownwardIcon />}
        highlightOnHover
        dense
      />
    </div>
  );
};

// Cancelled tab End ******

// Product Sales END***************************

export class RecentOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          type: 'column',
          data: [27, 50, 28, 50, 28, 30, 22],
          color: '#05C3FB',
        }, {
          type: 'column',
          data: [32, 58, 68, 65, 40, 68, 58],
          color: '#EC82EF',
        }],

      options: {
        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '10',
            horizontal: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 2, 2]
        },

        xaxis: {

          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        grid: {
          show: false,
          position: 'front',

          padding: {
            top: 0,
            right: 4,
            bottom: 0,
            left: 4
          },
        },

      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={210} />
      </div>
    );
  }
}

export const options = {
  responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: false,
                    
                },
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false,
                        drawBorder: false,
                        color: 'rgba(119, 119, 142, 0.08)'
                    },
                    ticks: {
                        fontColor: '#b0bac9',
                        autoSkip: true,
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month',
                        fontColor: 'transparent'
                    }
                },
                y: {
                    ticks: {
                        min: 0,
                        max: 1050,
                        stepSize: 150,
                        fontColor: "#b0bac9",
                    },
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: 'rgba(142, 156, 173,0.1)',
                        color: "rgba(142, 156, 173,0.1)",
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'sales',
                        fontColor: 'transparent'
                    }
                }
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
 
  labels,
  datasets: [
    
    {
      label: 'Total Orders',
      data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
      borderColor: '#05c3fb',
      backgroundColor: '#05c3fb',
      tension: 0.3,
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: true,
      label: 'Total Sales',
      data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
      borderColor: '#6c5ffc',
      backgroundColor: 'rgba(108, 95, 252, 0.6)',
      tension: 0.3,
      borderWidth: 3,
      pointRadius: 0,
    },
  ],
};

export function SalesAnalytics() {
  return <Line className="chart-dropshadow h-330" options={options} data={data} />;
}

// Total Users

export class TotalUser extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          type: 'column',
          data: [19, 15, 17, 14, 13, 15, 16],
          color: '#05c3fb',
        },
      ],

      options: {
        chart: {
          type: 'column',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '6',
            horizontal: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2]
        },

        tooltip: {
          enabled: false,
        },
        xaxis: {

          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        grid: {
          show: false,
          position: 'front',

          padding: {
            top: 0,
            right: 4,
            bottom: 0,
            left: 4
          },
        },

      },

    };

  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="h-8 w-9 chart-dropshadow" options={this.state.options} series={this.state.series} type="line" height={70} />
      </div>

    );
  }
}

// Total profit

export class TotalProfit extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [28, 56, 36, 32, 48, 54, 37, 58, 66, 53, 21, 24, 14, 45, 0, 32, 67, 49, 52, 55, 46, 54, 130],
        color: '#ec82ef',
      }],
      options: {
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        tooltip: {
          enabled: false,
          marker: {
            show: false
          },
        }
      },
    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="h-8 w-9 chart-dropshadow" options={this.state.options} series={this.state.series} type="line" height={70} />
      </div>

    );
  }
}

// Total Expenses

export class TotalExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          type: 'column',
          data: [14, 17, 12, 13, 11, 15, 16],
          color: '#4ECC48',
        },
      ],

      options: {
        chart: {
          type: 'column',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: '6',
            horizontal: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2]
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {

          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        grid: {
          show: false,
          position: 'front',

          padding: {
            top: 0,
            right: 4,
            bottom: 0,
            left: 4
          },
        },

      },

    };

  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="h-8 w-9 chart-dropshadow" options={this.state.options} series={this.state.series} type="line" height={70} />
      </div>

    );
  }
}

// Total Cost

export class TotalCost extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [45, 23, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 36, 36, 32, 48, 54],
        color: '#F7B731',
      }],
      options: {
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        tooltip: {
          enabled: false,
          marker: {
            show: false
          },
        }
      },

    };

  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="h-8 w-9 chart-dropshadow" options={this.state.options} series={this.state.series} type="line" height={70} />
      </div>

    );
  }
}
