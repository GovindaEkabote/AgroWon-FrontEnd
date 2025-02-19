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
 

  const context = useContext(MyContext)

  

  return (
    <Dialog
      open={true}
      className="productModal"
      onClose={() => context.setisOpenProductModal(false)}
    >
      <Button className="close_" onClick={() => context.setisOpenProductModal(false)}>
        <IoMdClose />
      </Button>
      <h4 className="mb-1 font-bold">Product Name</h4>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brands: </span>
          <span className="ml-2">
            <b>Organics Fertilizer</b>
          </span>
        </div>

        <Rating
          name="half-rating-read"
          defaultValue={5}
          precision={0.5}
          readOnly
          size="small"
        />
      </div>
      <hr />

      <div className="row mt-2 productDetailsModal">
        <div className="col-md-5">
          <ProductZoom />
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-item-center mb-3  ">
          <h5 className="mr-1">Old Price: </h5><span className="oldPrice lg mr-3"> $10.5</span>
          <h5 className="mr-1">New Price: </h5><span className="netPrice text-danger lg"> $10.5</span>
          </div>
          <span className="badge bg-success">IN STOCK</span>
          <p className="mt-3">SJ Organics Vermicompost For Plants - 20 Kg | Odorless Fertilizer Powder | Ready to Use Organic Manure | Fertilizers for Plant Home Garden | Enriched Plant Food Fertilisers | Compost for Indoor plants</p>

        <div className="d-flex align-item-center">
         <QuantityBox/>
          <Button className="bg-blue btn-lg btn-big btn-round ml-3">Add to cart</Button>
        </div>
          <div className="d-flex align-item-center mt-5 actions">
          <Button variant="outlined" className="btn-round btn-sml"><FaRegHeart />&nbsp; Add to WishList </Button>
          <Button variant="outlined" className="btn-round btn-sml ml-3"><FaCodeCompare />&nbsp; Compare </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
