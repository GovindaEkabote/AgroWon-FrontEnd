import React,{useRef} from 'react'
import Slider from "react-slick";
import BannerImages1 from "../../assets/productModal1_.jpg";
import BannerImages2 from "../../assets/productModal2.jpg";
import BannerImages3 from "../../assets/productModal3.jpg";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = () => {
     const zoomSliderBig = useRef();
      const zoomSlider = useRef();

    var settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
      };
     var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
      };
      
    
      const goto = (index) =>{
        zoomSlider.current.slickGoTo(index)
        zoomSliderBig.current.slickGoTo(index);
      }
  return (
    <div className='productZoom'>
    <div className="productZoom position-relative">
        <div className="badge badge-primary">20%</div>
            <Slider {...settings} className="zoomSliderBig" ref={zoomSliderBig}>
             
            <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={BannerImages1}
                  alt="Product Image"
                />
              </div> <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={BannerImages2}
                  alt="Product Image"
                />
              </div> <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={BannerImages3}
                  alt="Product Image"
                />
              </div> 
            </Slider>
          </div>
          <Slider {...settings2} className="zoomSlider" ref={zoomSlider}>
            <div className="item">
              <img 
                src={BannerImages1}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(0)}
              />
            </div>
            <div className="item">
              <img 
                src={BannerImages2}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(1)}

              />
            </div>
            <div className="item">
              <img 
                src={BannerImages3}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(2)}

              />
            </div>
            <div className="item">
              <img 
                src={BannerImages3}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(3)}

              />
            </div>
            <div className="item">
              <img 
                src={BannerImages3}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(4)}

              />
            </div>
            <div className="item">
              <img 
                src={BannerImages3}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(5)}

              />
            </div>
            
          </Slider>
    </div>
  )
}

export default ProductZoom