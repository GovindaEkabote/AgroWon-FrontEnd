import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MyContext } from "../../App";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function ProductItem(props) {
  const context = useContext(MyContext);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef();
  var settings = {
  dots: true,
  infinite: true,
  speed: 20,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500, 
  pauseOnHover: false,
  };

  const viewProductDetails = (id) => {
    console.log("Setting product ID:", id); // Debug log
    context.setisOpenProductModal({
      id: id,
      open: true,
    });
  };
  const handleMouseHover = () => {
    setIsHovered(true);
    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    }, 20);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    }, 20);
  };

  return (
    <>
      <div
        className={`productItem ${props.itemView} `}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="imgWrapper">
          <Link to={`/product/${props.item?._id}`}>
          {isHovered && props.item?.images?.length > 1 ? (
            <Slider {...settings} ref={sliderRef}>
              {props.item.images.map((img, index) => (
                <div key={index}>
                  <img src={img.url || img} className="w-100" alt={`product-${index}`} />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src={props.item?.images?.[0]?.url || props.item?.images?.[0]}
              alt="toplist"
              className="w-100"
            />
          )}
          </Link>
          <span className="badge badge-primary">{props.item?.discount}% off</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(props.item?._id)}>
              <AiOutlineFullscreen />
            </Button>
            <Button>
              <CiHeart style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>{props?.item?.name.substr(0, 30) + "..."}</h4>
          <span className="text-success d-block">
          {props.item?.countInStock !== 0 ? `stock` : `out of stock`}
          </span>
          <Rating
          name="product-rating-read"
          value={Number(props?.item?.rating) || 0} // Proper number conversion
          precision={0.5}
          readOnly
          size="small"
        />
          <div className="d-flex">
            <span className="oldPrice">₹{props.item?.oldPrice}</span>
            <span className="netPrice text-danger ml-2">
              ₹{props.item?.price}
            </span>
          </div>
        </div>
      </div>

      {/* <ProductModal /> */}
    </>
  );
}

export default ProductItem;
