import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  const context = useContext(MyContext);

  return (
    <Dialog
      open={true}
      className="productModal"
      onClose={() => context.setisOpenProductModal(false)}
    >
      <Button
        className="close_"
        onClick={() => context.setisOpenProductModal(false)}
      >
        <IoMdClose />
      </Button>
      <h4 className="mb-1 font-bold">{props?.data?.name}</h4>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brands:{props?.data?.brand} </span>
          <span className="ml-2">
            <b>{props?.data?.subCategory}</b>
          </span>
        </div>

        <Rating
          name="product-rating-read"
          value={Number(props?.data?.rating) || 0} // Proper number conversion
          precision={0.5}
          readOnly
          size="small"
        />
      </div>
      <hr />

      <div className="row mt-2 productDetailsModal">
        <div className="col-md-5">
          <ProductZoom images={props?.data?.images} />
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-item-center mb-3  ">
            <h5 className="mr-1">Old Price: </h5>
            <span className="oldPrice lg mr-3"> {props?.data?.oldPrice}</span>
            <h5 className="mr-1">New Price: </h5>
            <span className="netPrice text-danger lg">
              {" "}
              {props?.data?.price}
            </span>
          </div>
          <span className="badge bg-success">
            {props?.data?.countInStock !== 0 ? "In Stock" : "Out of Stock"}
          </span>
          <p className="mt-3">{props?.data?.description}</p>

          <div className="d-flex align-item-center">
            <QuantityBox />
            <Button className="bg-blue btn-lg btn-big btn-round ml-3">
              Add to cart
            </Button>
          </div>
          <div className="d-flex align-item-center mt-5 actions">
            <Button variant="outlined" className="btn-round btn-sml">
              <FaRegHeart />
              &nbsp; Add to WishList{" "}
            </Button>
            <Button variant="outlined" className="btn-round btn-sml ml-3">
              <FaCodeCompare />
              &nbsp; Compare{" "}
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
