import React from "react";
import Slider from "react-slick";

import BannerImages from '../../assets/Banner.png'
import BannerImages1 from '../../assets/Banner1.jpg'
import BannerImages2 from '../../assets/Banner2.jpg'
import BannerImages3 from '../../assets/Banner3.jpg'
import BannerImages4 from '../../assets/Banner4.jpg'

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
      };
  return (
  <div className="homeBannerSection rounded-xl">
    <Slider {...settings}>
        <div className="item">
            <img src={BannerImages} alt="Banner" className="w-100 h-[440px]" />
        </div>
        <div className="item">
            <img src={BannerImages1} alt="Banner1" className="w-100 h-[440px]" />
        </div>
        <div className="item">
            <img src={BannerImages2} alt="Banner2" className="w-100 h-[440px]" />
        </div>
        <div className="item">
            <img src={BannerImages3} alt="Banner2" className="w-100 h-[440px]" />
        </div>
        <div className="item">
            <img src={BannerImages4} alt="Banner2" className="w-100 h-[440px]" />
        </div>
    </Slider>
  </div>
  );
};

export default HomeBanner;
