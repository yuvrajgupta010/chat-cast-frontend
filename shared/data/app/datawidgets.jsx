import React, { Component, useCallback, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Row } from 'react-bootstrap';
import ImageViewer from "react-simple-image-viewer";

// Total Revenue

export class TotalRevenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [30, 70, 30, 100, 50, 130, 100, 140],
        color: '#1170e4'
      }],
      options: {
        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-primary mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Support Cost

export class SupportCost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#e82646'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-danger mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Total Requests

export class TotalRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#09ad95'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-success mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Requests Answered

export class RequestsAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [24, 18, 28, 21, 32, 28, 30],
        color: '#f7b731'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }
  render() {
    return (
      <div id="chart-1">
        <ReactApexChart className="areaChart chart-dropshadow-warning mx-5" options={this.state.options} series={this.state.series} type="line" height={120} />
      </div>
    );
  }
}

// Circle Progressbar END****

// Light Gallery START*****

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "../../../assets/images/media/1.jpg",
    "../../../assets/images/media/2.jpg",
    "../../../assets/images/media/3.jpg",
    "../../../assets/images/media/4.jpg",
    "../../../assets/images/media/5.jpg",
    "../../../assets/images/media/6.jpg",
    ];
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
  return (
    <div className="">
                <Row className="masonry row-sm mt-4">
                    {images.map((src,index)=>(<div className="col-xl-4 col-lg-4 col-sm-6 brick" key={index}>
                            <img onClick={() => openImageViewer(index)} src={src} alt='media1' />
                    </div>))}
                </Row>
                {isViewerOpen && (
                    <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                    />
                )}
            </div>
  );
};

// Light Gallery END*****
