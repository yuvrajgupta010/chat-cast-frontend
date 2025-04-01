import React, { Component, useCallback, useState  } from "react";
import ImageViewer from "react-simple-image-viewer";
import Slider from "react-slick";
import { Col, Row, Card } from 'react-bootstrap';
import Link from 'next/link';

export const LightGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "../../../assets/images/media/files/01.jpg",
   "../../../assets/images/media/files/02.jpg",
    "../../../assets/images/media/files/03.jpg", 
    "../../../assets/images/media/files/04.jpg",
    "../../../assets/images/media/files/05.jpg",
    "../../../assets/images/media/files/06.jpg", 
    "../../../assets/images/media/files/07.jpg"
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
                <Row className="masonry ">
                    {images.map((src,index)=>(<Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" key={index} 
                    data-sub-html={`<h4>Gallery Image ${index}</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>`}
                    >
                      <Link href="">
                            <img className='img-responsive br-5' onClick={() => openImageViewer(index)} src={src} alt='media1' />
                      </Link>
                    </Col>))}
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

export class RecentFolder extends Component {
  render() {
    const settings = {
      className: 'details',
      dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    return (
      <div>
        <Slider {...settings}>

          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`}><img src={"../../../assets/images/media/files/03.jpg"} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`} className="mx-auto my-3"><img src={"../../../assets/images/media/files/documents/6.png"} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">32 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`}><img src={"../../../assets/images/media/files/07.jpg"} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`} className="mx-auto my-3"><img src={"../../../assets/images/media/files/documents/2.png"} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">34 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`}><img src={"../../../assets/images/media/files/06.jpg"} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`} className="mx-auto my-3"><img src={"../../../assets/images/media/files/documents/7.png"} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">67 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link href={`/components/filemanager/file-details/`}><img src={"../../../assets/images/media/files/02.jpg"} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="d-flex">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Slider>

      </div>

    );
  }
}
