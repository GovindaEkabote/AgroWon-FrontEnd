import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fffceb",
    "#ecffec",
    "#fff3eb",
    "#feefea",
    "#f2fce4",
    "#fff3ff",
    "#feefea",
    "#feefea",
    "#ecffec",
    "#ecffec",
    "#fffceb",
    "#fffceb",
    "#f2fce4",
  ]);
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
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item tect-center cursor-pointer" style={{ background: item }}>
                  <img
                    src="https://nest.botble.com/storage/product-categories/image-9.png"
                    alt="categories"
                  />
                  <h6>Red Apple</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
