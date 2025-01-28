import { Button } from "bootstrap";
import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbCoinRupee } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-item-center">
            <span>
              <GiFruitBowl />
            </span>
            <span className="ml-2">
              Everyday fresh and best quality products.
            </span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Free Delivery for order over ₹ 500.</span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <RiDiscountPercentFill />
            </span>
            <span className="ml-2">Daily Mega Discount.</span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <TbCoinRupee />
            </span>
            <span className="ml-2">Best price on the market.</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>Vegetables</h5>
            <ul>
              <li>
                <Link to="#">Green Vegetables</Link>
              </li>
              <li>
                <Link to="#">Beans</Link>
              </li>
              <li>
                <Link to="#">Root Vegetables</Link>
              </li>
              <li>
                <Link to="#">Cruciferous</Link>
              </li>
              <li>
                <Link to="#">Nightshades</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Fruits</h5>
            <ul>
              <li>
                <Link to="#">Fleshy Fruits</Link>
              </li>
              <li>
                <Link to="#">Dry Fruits</Link>
              </li>
              <li>
                <Link to="#">Aggregate Fruits</Link>
              </li>
              <li>
                <Link to="#">Multiple Fruits</Link>
              </li>
              <li>
                <Link to="#">Citrus Fruits</Link>
              </li>
              <li>
                <Link to="#">Subtropical Fruits</Link>
              </li>
              <li>
                <Link to="#">Stone Fruits</Link>
              </li>
              <li>
                <Link to="#">Melons</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Flowers</h5>
            <ul>
              <li>
                <Link to="#">Merigold</Link>
              </li>
              <li>
                <Link to="#">Lotus (kamal)</Link>
              </li>
              <li>
                <Link to="#">Jasmine (chameli/Mogra)</Link>
              </li>
              <li>
                <Link to="#">Hibiscus (Gudhal)</Link>
              </li>
              <li>
                <Link to="#">Rose</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Organic Fertilizer</h5>
            <ul>
              <li>
                <Link to="#">Animal-Based Fertilizers</Link>
              </li>
              <li>
                <Link to="#">Plant-Based Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Mineral-Based Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Worm-Based Fertilizer</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Inorganic Fertilizer</h5>
            <ul>
              <li>
                <Link to="#">Nitrogen-Based Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Phossphorus-Based Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Potassium-Based Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Compound Or Mixed Fertilizer</Link>
              </li>
              <li>
                <Link to="#">Specilized Fertilizer</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Non-Veg</h5>
            <ul>
              <li>
                <Link to="#">Red Meat</Link>
              </li>
              <li>
                <Link to="#">White Meat</Link>
              </li>
              <li>
                <Link to="#">Eggs</Link>
              </li>
              <li>
                <Link to="#">Sea Food</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copywrite mt-2 pt-2 pb-2 d-flex">
          <div className="col-4">
            <p >
              Copywrite 2025 @ AgroWon. All right reserved.
            </p>
          </div>
          <div className="col-3">
            <p >Developed By Govinda Balaji Ekabote.</p>
          </div>
          <div className="col-2">
            <p >Mobile: 8766701896</p>
          </div>
          <div className="col-3">
            <p >govindaekbote7@gmail.com</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
