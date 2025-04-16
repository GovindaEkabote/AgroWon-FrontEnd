import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import BannerImg from "../../assets/Banner1.jpg";
import Button from "@mui/material/Button";
import { TbGridDots } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { RxDragHandleDots1 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem";
import Pagination from "@mui/material/Pagination";

import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const [products, setProducts] = useState([]);

  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { id } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchDataFromApi(`/api/v1/products/category/${id}`);
        setProducts(res.products); // assuming API returns { products: [...] }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    getProducts();
  }, [id]);

  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src={BannerImg}
                alt="banner"
                className="w-100 h-[250px]:"
                style={{ borderRadius: "18px" }}
              />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-item-center btnWrapper">
                  <Button
                    className={productView === "two" && "act"}
                    onClick={() => setProductView("two")}
                  >
                    <BsFillGridFill />
                  </Button>
                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setProductView("three")}
                  >
                    <TbGridDots />
                  </Button>
                  <Button
                    className={productView === "four" && "act"}
                    onClick={() => setProductView("four")}
                  >
                    <RxDragHandleDots1 />
                  </Button>
                </div>
                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show 9 <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropDown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing prodeuct23">
                {products?.length > 0 ? (
                  products.map((item) => (
                    <ProductItem
                      key={item._id}
                      item={item}
                      itemView={productView}
                    />
                  ))
                ) : (
                  <p>No products found in this category.</p>
                )}
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
