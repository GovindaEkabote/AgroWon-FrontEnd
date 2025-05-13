import React, { useContext, useEffect, useState } from "react";
import product from "../../assets/productModal2.jpg";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoBagHandleSharp } from "react-icons/io5";
import { fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [productQuentity, setProductQuentity] = useState();

  const context = useContext(MyContext)

  useEffect(() => {
  fetchDataFromApi('/api/v1/cart').then((res) => {
    if (res?.data) {
      setCartData(res.data); // ✅ if your API directly returns the array
    } else if (res?.data?.data) {
      setCartData(res.data.data); // ✅ if response has { data: [...] }
    } else {
      setCartData([]); // fallback
    }
  }).catch((err) => {
    console.error("Error fetching cart data:", err);
    setCartData([]);
  });
}, []);


 const quantity = (val) => {
    setProductQuentity(val);
  };

  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-2">Your Cart</h2>
          <p>
            There are <b className="text-red">3</b> products in your cart.
          </p>
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Products</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Total</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                 {
  cartData?.length !== 0 &&
    cartData?.map((item, index) => {
      return (
        <tr key={index}>
          <td width="35%">
            <Link to={`/product/${item.productId}`}>
              <div className="d-flex align-items-center cartItemimgWrapper">
                <div className="imgWrapper">
                  <img src={item.image} alt={item.productTitle} className="w-100" />
                </div>
                <div className="info px-3">
                  <h6>{item.productTitle}</h6>
                  <Rating
                    name="read-only"
                    value={parseFloat(item.rating)}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                </div>
              </div>
            </Link>
          </td>
          <td width="15%">${item.price}</td>
          <td width="25%">
            <QuantityBox quantity={quantity} />
          </td>
          <td width="15%">${item.subTotal}</td>
          <td width="10%">
            <span className="remove">
              <IoIosCloseCircleOutline />
            </span>
          </td>
        </tr>
      );
    })
}

                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow p-3 cartDetails">
                <h5 className="hd">cart total</h5>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-red font-weight-bold">
                    $10.5
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto text-red ">Free</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ml-auto ">
                    <b>Germany</b>
                  </span>
                </div>
                <hr/>
                <div className="d-flex align-items-center mb-3">
                  <span>Total</span>
                  <span className="ml-auto text-red font-weight-bold">
                    $10.5
                  </span>
                </div>  
                  <Button className="bg-blue btn-lg btn-big"><IoBagHandleSharp />Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
