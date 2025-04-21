import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/Add2.png";
const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">
              <ul>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Vegetables"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Fruits"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Flowers"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Organic Fertilizer"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="InOrganic Fertilizer"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Non-veg"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Vegetables"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Fruits"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Flowers"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Organic Fertilizer"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="InOrganic Fertilizer"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Non-veg"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>FILTER BY PRICE</h6>
            <RangeSlider
              value={value}
              onInput={setValue}
              min={100}
              max={60000}
              step={5}
            />
            <div className="d-flex pt-2 pb-2 priceRange">
              <span>
                From: <strong className="text-dark">RS: {value[0]}</strong>
              </span>
              <span className="ml-auto">
                From: <strong className="text-dark">RS: {value[1]}</strong>
              </span>
            </div>
          </div>

          <div className="filterBox">
            <h6>PRODUCT STATUS</h6>
            <div className="scroll">
              <ul>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="filterBox">
            <h6>BRANDS</h6>
            <div className="scroll">
              <ul>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Coromandel International"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="National Fertilizers Ltd"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Indian Farmers Fertiliser"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Chambal Fertilisers"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Rama Phosphates"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Zuari Agro"
                  />
                </li>
              </ul>
            </div>
          </div>
          <br />
          <Link to="#">
            <img src={BannerImg} className="w-100" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
