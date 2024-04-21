import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";

export class Features extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            speed: 3000,
            autoplay: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            speed: 3000,
            autoplay: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            speed: 3000,
            autoplay: true,
          },
        },
        ,
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
            infinite: true,
            speed: 3000,
            autoplay: true,
          },
        },
      ],
    };

    return (
      <div className="indicator">
        <Slider {...settings}>
          <div className="">
            <img src={"../../../assets/images/landing/web/6.png"} alt="web-1" />
            <h5 className="mt-3 text-white">REACT</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/5.png"} alt="web-3" />
            <h5 className="mt-3 text-white">REACT-BOOTSTRAP</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/4.png"} alt="web-4" />
            <h5 className="mt-3 text-white">NPM</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/8.png"} alt="web-5" />
            <h5 className="mt-3 text-white">YARN</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/7.png"} alt="web-6" />
            <h5 className="mt-3 text-white">SASS</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/1.png"} alt="web-7" />
            <h5 className="mt-3 text-white">CSS</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/3.png"} alt="web-8" />
            <h5 className="mt-3 text-white">MUI</h5>
          </div>
          <div className="">
            <img src={"../../../assets/images/landing/web/2.png"} alt="web-9" />
            <h5 className="mt-3 text-white">GULP</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

export class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="text-center">
            <Row>
              <Col xl={8} md={12} className="d-block mx-auto">
                <div className="testimonia">
                  <p className="text-white-80">
                    <i className="fa fa-quote-left fs-20 text-white-80"></i>
                    &nbsp; As someone who values privacy, Chat Cast is a
                    game-changer. I can chat with friends and share files
                    without worrying about my data being compromised. It&apos;s
                    reassuring to know there&apos;s an app that prioritizes
                    security without sacrificing usability.
                  </p>
                  <h3 className="title">Karan R.</h3>
                  <span className="post">Privacy Advocate</span>
                  <div
                    className="rating-stars block my-rating-5 mb-5"
                    data-rating="4"
                  ></div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="text-center">
            <div className="row">
              <div className="col-xl-8 col-md-12 d-block mx-auto">
                <div className="testimonia">
                  <p className="text-white-80">
                    <i className="fa fa-quote-left fs-20"></i>&nbsp; I&apos;ve
                    tried numerous messaging apps, but none compare to Chat
                    Cast. The private messaging feature ensures my personal
                    conversations stay confidential. Plus, the intuitive
                    interface and reliable service make it my go-to app.
                  </p>
                  <div className="testimonia-data">
                    <h3 className="title">Priya M.</h3>
                    <span className="post">Freelancer</span>
                    <div className="rating-stars">
                      <div
                        className="rating-stars block my-rating-5 mb-5"
                        data-rating="5"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="row">
              <div className="col-xl-8 col-md-12 d-block mx-auto">
                <div className="testimonia">
                  <p className="text-white-80">
                    <i className="fa fa-quote-left fs-20"></i>&nbsp; Chat Cast
                    has revolutionized how I collaborate with my team. The
                    secure group chats and seamless file sharing have boosted
                    our productivity immensely. I feel confident knowing our
                    sensitive data is protected. Highly recommend!
                  </p>
                  <div className="testimonia-data">
                    <h3 className="title">Rahul S.</h3>
                    <span className="post">Project Manager</span>
                    <div className="rating-stars">
                      <div
                        className="rating-stars block my-rating-5 mb-5"
                        data-rating="5"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
