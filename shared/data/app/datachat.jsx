import React, { useCallback, useState } from 'react';
import ImageViewer from "react-simple-image-viewer";

import { Card, Col, Row } from 'react-bootstrap';

const DataChat = () => {
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
                <h5 className="mb-3 pt-5">Media :</h5>
                <Row className="masonry list-unstyled">
                    {images.map((src,index)=>(<Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0" key={index}>
                        <Card className="custom-card">
                            <img className='img-responsive br-5' onClick={() => openImageViewer(index)} src={src} alt='media1' />
                        </Card>
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

export default DataChat;
