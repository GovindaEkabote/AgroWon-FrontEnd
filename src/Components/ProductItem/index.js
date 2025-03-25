import React, { useContext,useEffect } from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MyContext } from "../../App";

function ProductItem(props) {
  
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true)
  }

 
  return (
    <>
      <div className={`productItem ${props.itemView} `}>
      <div className="imgWrapper">
        
        <img
          src={props.item?.images[0]?.url}
          alt="toplist"
          className="w-100"
        />
        <span className="badge badge-primary">{props.item?.discount}</span>
        <div className="actions">
          <Button onClick={() => viewProductDetails(1)}>
            <AiOutlineFullscreen />
          </Button>
          <Button>
            <CiHeart style={{fontSize:'20px'}} />
          </Button>
        </div>
      </div>
      <div className="info">
        <h4>{props?.item?.name.substr(0,30)+'...'}</h4>
        <span className="text-success d-block">stock:{props.item?.countInStock}</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">₹{props.item?.oldPrice}</span>
          <span className="netPrice text-danger ml-2">₹{props.item?.price}</span>
        </div>
      </div>
    </div>

   
      {/* <ProductModal /> */}
    </>
  );
}

export default ProductItem;
