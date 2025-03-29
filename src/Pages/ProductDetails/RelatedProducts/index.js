import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "../../../Components/ProductItem";
import { Autoplay, Navigation } from "swiper/modules";
import { fetchDataFromApi } from "../../../utils/api";
import { FaAngleRight } from "react-icons/fa6";

const RelatedProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = "/api/v1/get-product";
        
        // If category is provided in props
        if (props.category) {
          apiUrl += `&category=${props.category}`;
        }
        
        const response = await fetchDataFromApi(apiUrl);
        if (response?.products) {
          setProducts(response.products);
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      } 
    };

    fetchProducts();
  }, [props.category]);

 

  return (
    <div className="related-products-section">
      <div className="d-flex align-item-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
          <p className="text-light text-sm mb-0">
            {props.description || "Do not miss the current offers until the end of April."}
          </p>
        </div>
        {props.showViewAll && (
          <button className="view-all-btn ml-auto">
            View All <FaAngleRight />
          </button>
        )}
      </div>

      <div className="product_row w-100 mt-1">
        {products.length > 0 ? (
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="related-products-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product._id}-${index}`}>
                <ProductItem item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="no-products">No {props.title.toLowerCase()} available</div>
        )}
      </div>
    </div>
  );
};

RelatedProducts.defaultProps = {
  showViewAll: true,
};

export default RelatedProducts;