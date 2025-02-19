import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "../../../Components/ProductItem";
import { Autoplay, Navigation } from "swiper/modules";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-item-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
          <p className="text-light text-sm mb-0">
            Do not miss the current offers until the end of April.
          </p>
        </div>
      </div>

      <div className="product_row w-100 mt-1 ">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
