import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeCat = ({ catData }) => {
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {catData.length > 0 &&
            catData.map((cat, index) => (
              <SwiperSlide key={index}>
                <div
                  className="item text-center cursor-pointer"
                  style={{ background: cat.color }}
                >
                  <img style={{opacity:"0.5"}} src={cat.images[0]} alt="categories" />
                  <h6 style={{fontSize:"12px"}}>{cat.name}</h6>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
