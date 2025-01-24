import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HomeBanner from "../../Components/HomeBanner";
import Add from "../../assets/Add1.jpg";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import ProductItem from "../../Components/ProductItem";

const Home = () => {
  const [value, setValue] = React.useState(5);
  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={Add} alt="product" className="cursor w-96" />
              </div>
            </div>
            
            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">TOP PRODUCTS</h3>
                  <p className="text-light text-sm mb-0">
                    Do not miss the current offers until the end of April.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto text-black">
                  View All <FaAngleRight />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
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
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* ------------------------------New Product------------------------------------------------- */}
            <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sm mb-0">
                    New Products with updated stoks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto text-black">
                  View All <FaAngleRight />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
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
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
