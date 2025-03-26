import React,{useRef} from 'react'
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = (props) => {
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
      <div className="badge badge-primary">10%</div>
            <Slider {...settings} className="zoomSliderBig" ref={zoomSliderBig}>
            {
              props?.images?.map((item,index) => {
                return (
                  <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={item.url}
                  alt="Product Image"
                />
              </div> 
                )
              })
            }
            
            </Slider>
          </div>
          <Slider {...settings2} className="zoomSlider" ref={zoomSlider}>
          {
            props?.images?.map((item,index) => {
              return (
                <div className="item">
              <img 
                src={item.url}
                alt="Banner"
                className="w-100"
                onClick={()=> goto(index)}
              />
            </div> 
              )
            })
          }
                       
          </Slider>
    </div>
  )
}

export default ProductZoom