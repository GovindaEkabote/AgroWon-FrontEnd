import React from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

function ProductItem() {
const [value, setValue] = React.useState(5);

  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img
          src="https://m.media-amazon.com/images/I/81+zE0CPfRL._SX679_.jpg"
          alt="toplist"
          className="w-100"
        />
        <span className="badge badge-primary">20%</span>
        <div className="actions">
          <Button>
            <AiOutlineFullscreen />
          </Button>
          <Button>
            <CiHeart style={{fontSize:'20px'}} />
          </Button>
        </div>
      </div>
      <div className="info">
        <h4>SJ Organics Vermicompost For Plants</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2"
          name="read-only"
          value={value}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">$10.54</span>
          <span className="netPrice text-danger ml-2">$8.54</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
