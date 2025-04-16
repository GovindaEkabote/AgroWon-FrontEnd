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
import coupan from "../../assets/coupan.png";
import { CiMail } from "react-icons/ci";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  const [catData, setCatDate] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productDate, setProductData] = useState([]);
  const [fertilizerProducts, setFertilizerProducts] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/v1/get-category").then((res) => {
      setCatDate(res.categoryList);
    });
    fetchDataFromApi(`/api/v1/feature`).then((res) => {
      setFeaturedProducts(res.products || []);
    });

    fetchDataFromApi(
      "/api/v1/get-product?perPage=8"
    ).then((res) => {
      setProductData(res);
    });
  }, []);

  useEffect(() => {
    fetchDataFromApi("/api/v1/get-product?category=Fertilizer&perPage=8")
      .then((res) => {
        if (res?.success && Array.isArray(res.products)) {
          setFeaturedProducts(res.products);
        } else {
          setFeaturedProducts([]);
        }
        
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setFertilizerProducts([]);
      });
  }, []);

  return (
    <>
      <HomeBanner />
      {catData?.length > 0 && <HomeCat catData={catData} />}

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
                  {featuredProducts?.length !== 0 &&
                    featuredProducts?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem item={item} />
                        </SwiperSlide>
                      );
                    })}
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
                {productDate?.products?.length !== 0 &&
                  productDate?.products?.map((item, index) => {
                    return <ProductItem key={index} item={item} />;
                  })}
              </div>

              {/* Small Banner Here.. */}
              <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">FERTILIZER PRODUCTS</h3>
                  <p className="text-light text-sm mb-0">
                    Fertilizer Products with updated stoks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto text-black">
                  View All <FaAngleRight />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                {fertilizerProducts?.length > 0 ? (
                  fertilizerProducts.map((item, index) => (
                    <ProductItem key={index} item={item} />
                  ))
                ) : (
                  <p>No fertilizer products available.</p>
                )}
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
