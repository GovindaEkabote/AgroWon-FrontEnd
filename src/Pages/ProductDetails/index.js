import React, { useState } from "react";
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

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-8 pl-5 ">
              <h2 className="hd uppercase">
                SJ Organics Vermicompost For Plants - 20 Kg | Odorless
                Fertilizer Powder | Ready to Use Organic Manure | Fertilizers
                for Plant Home Garden | Enriched Plant Food Fertilisers |
                Compost for Indoor plants
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brand: </span>
                    <span className="font-bold">TrustBasket</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-2">
                <span className="oldPrice ">$30.00</span>
                <span className="netPrice text-danger ml-2">$14.5</span>
              </div>
              <span className="badge badge-success uppercase">in stock</span>
              <h6 className="mt-2 font-bold">About this item</h6>
              <p className="mt-2 mb-0">
                SJ vermicompost is derived from decomposition of organic matter
                through various species of earthworms. It is 100% organic with
                no added chemicals; increases water holding capacity; enhances
                growth and increases size of flower. How to Use : Mix with
                cocopeat and SJ Soil Activator to obtain a fine mix of potting
                soil suitable for your plants Contains high amount of Nitrogen,
                Potassium and Phosphorus and other macro and micro elements for
                plants. Can be used for home, terrace garden and fits well with
                all kinds of plants.
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size/Weight: </span>
                <ul className="list list-inline d-flex mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      5KG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      10KG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      15KG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      20KG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      25KG
                    </a>
                  </li>
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
                    <p>
                      Name : SJ Organics Black Gold Vermicompost 20KG Form
                      Factor : Powder <br />
                      Product Breadth : 1 Cm <br />
                      Product Height : 1 Cm <br />
                      Product Length : 1 Cm <br />
                      Net Quantity (N) : Pack Of 1
                    </p>
                    <h2>Packaging and Delivery</h2>
                    <p>
                      Contact Information Meesho operates as a marketplace
                      wherein third-party sellers engage in the sale of products
                      to customers. To contact a seller, kindly dispatch a
                      written communication to the address provided below
                      including the product page URL. To, Seller Name -
                      SJOrganics PID - 331510935 Seller Mailbox: Contact Seller
                      3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli
                      Village, Varthur Hobli, Outer Ring Road, Bengaluru,
                      Karnataka 560103
                    </p>
                    <br />
                    <p>
                      SJ vermicompost is derived from decomposition of organic
                      matter through various species of earthworms. It is 100%
                      organic with no added chemicals; increases water holding
                      capacity; enhances growth and increases size of flower.
                      How to Use : Mix with cocopeat and SJ Soil Activator to
                      obtain a fine mix of potting soil suitable for your plants
                      Contains high amount of Nitrogen, Potassium and Phosphorus
                      and other macro and micro elements for plants. Can be used
                      for home, terrace garden and fits well with all kinds of
                      plants.
                    </p>
                    <br />
                    <h2>Suggested to Use</h2>
                    <p>
                      Mix Cocopeat, Vermicompost & Soil in 35:35:30 Ratio for
                      Optimal Plant Growth.For Faster Growth,Use SJ Soil
                      Activator by Reducing Soil Percentage Mix Cocopeat,
                      Vermicompost & Soil in 35:35:30 Ratio for Optimal Plant
                      Growth.For Faster Growth,Use SJ Soil Activator by Reducing
                      Soil Percentage
                    </p>
                    <p>
                      SJ vermicompost is derived from decomposition of organic
                      matter through various species of earthworms. It is 100%
                      organic with no added chemicals; increases water holding
                      capacity; enhances growth and increases size of flower.
                      How to Use : Mix with cocopeat and SJ Soil Activator to
                      obtain a fine mix of potting soil suitable for your plants
                      Contains high amount of Nitrogen, Potassium and Phosphorus
                      and other macro and micro elements for plants. Can be used
                      for home, terrace garden and fits well with all kinds of
                      plants.
                    </p>
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
          <br/>

          <RelatedProducts  title="RELATED PRODUCTS"/>
          <RelatedProducts title="RECENTLY VIEW PRODUCTS" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
