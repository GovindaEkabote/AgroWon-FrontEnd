import React, { useState, useEffect } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { FaCodeCompare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import userProfile from "../../assets/Add1.jpg";
import { VscCodeReview } from "react-icons/vsc";
import RelatedProducts from "./RelatedProducts";
import { Link, useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetchDataFromApi(`/api/v1/get/${id}`);
        setProduct(response.product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom images={product.images} />
            </div>
            <div className="col-md-8 pl-5 ">
              <h2 className="hd uppercase">{product.name}</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brand: </span>
                    <span className="font-bold">{product.brand}</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={Number(product.rating) || 0}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-2">
                <span className="oldPrice ">{product.oldPrice}</span>
                <span className="netPrice text-danger ml-2">
                  {product.price}
                </span>
              </div>
              <span className="badge badge-success uppercase">in stock</span>
              <h6 className="mt-2 font-bold">About this item</h6>
              <p className="mt-2 mb-0">{product.description}</p>
              <div className="productSize d-flex align-items-center">
                <span>Size/Weight: </span>
                <ul className="list list-inline d-flex mb-0 pl-4">
                  {product?.weight?.length > 0 ? (
                    product.weight.map((item, index) => (
                      <li className="list-inline-item" key={index}>
                        <a
                          className={`tag ${
                            activeSize === index ? "active" : ""
                          }`}
                          onClick={() => isActive(index)}
                        >
                          {item}
                        </a>
                      </li>
                    ))
                  ) : product?.quantity?.length > 0 ? (
                    product.quantity.map((item, index) => (
                      <li className="list-inline-item" key={index}>
                        <a
                          className={`tag ${
                            activeSize === index ? "active" : ""
                          }`}
                          onClick={() => isActive(index)}
                        >
                          {item}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="list-inline-item">No options available</li>
                  )}
                </ul>
              </div>
              <div className="d-flex align-items-center">
                <QuantityBox />
                <Button className="bg-blue btn-lg btn-big btn-round">
                  <IoCartOutline />
                  &nbsp; Add to cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top">
                  <Button className="bg-blue btn-lg btn-big btn-circle ml-4 ">
                    <FaHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="top">
                  <Button className="bg-blue btn-lg btn-big btn-circle ml-2">
                    <FaCodeCompare />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />
          <div className="container detailsContainer pt-3 pb-3">
            <div className="card mt-5 p-5 detailsPageTabs">
              <div className="customTabs">
                <ul className="list list-inline">
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 0 && "active"}`}
                      onClick={() => setActiveTabs(0)}
                    >
                      Description
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 1 && "active"}`}
                      onClick={() => setActiveTabs(1)}
                    >
                      Additional Info
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 2 && "active"}`}
                      onClick={() => setActiveTabs(2)}
                    >
                      Reviews
                    </Button>
                  </li>
                </ul>
                <br />
                {activeTabs === 0 && (
                  <div className="tabContainer">
                    <h2>Product Description</h2>
                    {product.description}
                  </div>
                )}
                {activeTabs === 1 && (
                  <div className="tabContainer">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          <tr className="stand-up">
                            <th>Stand Up</th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                          <tr className="folded-wo-wheels">
                            <th>folded (w/o wheels) </th>
                            <td>
                              <p>35'L x 24'W x 37-45'H (Front to back wheel)</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTabs === 2 && (
                  <div className="tabContainer">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Customer questions & answers</h3> <br />
                        <div className="card p-4 reviewCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src={userProfile} alt="" />
                            </div>
                            <span className="text-green-500 d-block text-center font-bold">
                              Govinda
                            </span>
                          </div>
                          <div className="info pl-3 ">
                            <div className="d-flex align-items-center">
                              <h5>July 3, 2025 at 3.15 AM</h5>
                              <div className="ml-auto">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                            </div>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src={userProfile} alt="" />
                            </div>
                            <span className="text-green-500 d-block text-center font-bold">
                              Govinda
                            </span>
                          </div>
                          <div className="info pl-3 ">
                            <div className="d-flex align-items-center">
                              <h5>July 3, 2025 at 3.15 AM</h5>
                              <div className="ml-auto">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                            </div>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src={userProfile} alt="" />
                            </div>
                            <span className="text-green-500 d-block text-center font-bold">
                              Govinda
                            </span>
                          </div>
                          <div className="info pl-3 ">
                            <div className="d-flex align-items-center">
                              <h5>July 3, 2025 at 3.15 AM</h5>
                              <div className="ml-auto">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                            </div>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src={userProfile} alt="" />
                            </div>
                            <span className="text-green-500 d-block text-center font-bold">
                              Govinda
                            </span>
                          </div>
                          <div className="info pl-3 ">
                            <div className="d-flex align-items-center">
                              <h5>July 3, 2025 at 3.15 AM</h5>
                              <div className="ml-auto">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                            </div>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.{" "}
                            </p>
                          </div>
                        </div>
                        <br />
                        <br />
                        <form className="reviewForm">
                          <h4> Add Your Review</h4>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Enter Your Product Comments here.. "
                            ></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  precision={0.5}
                                  size="large"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="form-group">
                          <Button className="bg-blue btn-lg btn-big btn-round">
                            <VscCodeReview />
                            &nbsp; Submit Review
                          </Button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <br />

          <RelatedProducts title="RELATED PRODUCTS" />
          <RelatedProducts title="OUR PRODUCTS" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
