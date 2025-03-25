import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HomeBanner from "../../Components/HomeBanner";
import Add from "../../assets/Add1.jpg";
import Add2 from "../../assets/Add2.png";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import smallBanner2 from "../../assets/SmallBanner2.png";
import smallBanner1 from "../../assets/SmallBanner1.png";
import coupan from "../../assets/coupan.png";
import { CiMail } from "react-icons/ci";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  const [catData, setCatDate] = useState([])
  useEffect(() =>{
    fetchDataFromApi("/api/v1/get-category").then((res)=>{
      setCatDate(res.categoryList)
    })
    const filterKey = "isFeatured";
    fetchDataFromApi(`/api/v1/get-product/?product=${filterKey}`).then((res) =>{
      setCatDate(res);
      console.log(res);
      
    })
  },[])
  return (
    <>
      <HomeBanner />
      {
        catData?.length >  0  &&  <HomeCat catData={catData}/>
      }
     
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={Add} alt="product" className="cursor w-96" />
                </div>
                <div className="banner">
                  <img src={Add2} alt="product" className="cursor w-96 mt-4" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">FEATURED PRODUCTS</h3>
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

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              {/* Small Banner Here.. */}
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img 
                    src={smallBanner1}
                    alt="product"
                    className="w-[100%] cursor mt-4 rounded-xl"
                  />
                </div>
                <div className="banner">
                  <img
                    src={smallBanner2}
                    alt="product"
                    className="cursor w-[100%] mt-4 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-item-center font-bold">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <p className="text-white mb-1">
                $20 Discount for your first Order
              </p>
              <h3 className="text-white">Join our newsletter and get..</h3>
              <p className="text-light">
                Join our email subscription now to get updates on <br />{" "}
                promotions and coupons.
              </p>

              <form>
                <CiMail />
                <input type="text" placeholder="Enter Your Email.." />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={coupan} alt="coupan" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
