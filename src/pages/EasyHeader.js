import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MobileCarousel from "../images/home/mobileCarousel.svg";
import Mobile2Carousel from "../images/home/Mobile2Carousel.png";
export default class EasyHeader extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="easyHeader mt-5">
        <div className="container-fluid">
          <Slider {...settings}>
            <div className="d-flex align-items-end flex-column text-right mb-5 mt-5 easyContain">
              <h3 className="easyHeaderTitle mb-3">
                محفظتك الإلكترونية <br></br>
                لمعاملاتك اليومية
              </h3>
              <div>
                <p className="easyHeaderExplan mb-3">
                  ايزى كاش محفظة إلكترونية هتدفع بيها كل معاملاتك <br />
                  اليومية ، تحول فلوس لأى حد وتشترى أونلاين كل ده <br></br>
                  من موبايلك وانت فى مكانك
                </p>
              </div>
              <Link href="#" className="knowmore mt-2">
                أعرف المزيد
              </Link>
            </div>
            <div className="Rect1">
              <img
                src={MobileCarousel}
                alt="mobilecarousel"
                className="Rect1Img"
              />
            </div>

            <div
              className="d-flex align-items-end flex-column text-right mb-5 mt-5 easyContain"
              id="easyContain1"
            >
              <h3 cassName="easyHeaderTitle mt-5" id="easyHeaderTitle1">
                الدفع فى المتجر
              </h3>

              <div>
                <p className="easyHeaderExplan mb-3">
                  الحديث بدون الحاجة لوجود مكن نقاط البيع فى المتجر
                  <br></br>
                  القدرة على استقبال اكثر وسائل الدفع شيوعا فى العالم<br></br>
                  الان يمكنك ان توفر للتجار
                </p>
              </div>
              <Link href="#" className="knowmore mt-2">
                أعرف المزيد
              </Link>
            </div>
            <div className="ml-5">
              <img
                src={Mobile2Carousel}
                alt="mobilecarousel"
                className="RectImg2"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
