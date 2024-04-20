import React, { useCallback, useState } from 'react';
import ImageViewer from "react-simple-image-viewer";
import { Col, Row } from 'react-bootstrap';

export const LightGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "../../../assets/images/media/1.jpg",
    "../../../assets/images/media/2.jpg",
    "../../../assets/images/media/3.jpg",
    "../../../assets/images/media/4.jpg",
    "../../../assets/images/media/5.jpg",
    "../../../assets/images/media/6.jpg",
    "../../../assets/images/media/7.jpg",
    "../../../assets/images/media/8.jpg",
    "../../../assets/images/media/9.jpg",
    "../../../assets/images/media/10.jpg",
    "../../../assets/images/media/11.jpg",
    "../../../assets/images/media/12.jpg",
   
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
                    {images.map((src,index)=>(<Col xs={6} sm={4} md={4} xl={3} className="brick" key={index}>
                            <img onClick={() => openImageViewer(index)} src={src} alt='media1' />
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
