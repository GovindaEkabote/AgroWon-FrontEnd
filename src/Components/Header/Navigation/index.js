import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal ] = useState(false)
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-1 navPart1">
            <div className="catWrapper">
                <Button className="allCatTab items-center" onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}>
                  <span className="icon1 mr-2"><MdOutlineMenu /></span>
                  <span className="text"> ALL CATEGORIES </span>
                  <span className="icon2 ml-2"><FaAngleDown /></span>
                </Button>

                <div className={`sidebarNav ${isOpenSidebarVal=== true ? 'open':''}`}>
                  <ul>
                      <li><Link to="/"><Button>Vegetables<IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                          <Link to="/"><Button>Green Vegetables</Button></Link>
                          <Link to="/"><Button>Beans</Button></Link>
                          <Link to="/"><Button>Root Vegetables</Button></Link>
                          <Link to="/"><Button>Cruciferous</Button></Link>
                          <Link to="/"><Button>Nightshades</Button></Link>
                      </div>
                      </li>
                      <li><Link to="/"><Button>Fruits <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow ">
                          <Link to="/"><Button>Fleshy Fruits</Button></Link>
                          <Link to="/"><Button>Dry Fruits</Button></Link>
                          <Link to="/"><Button>Aggregate Fruits</Button></Link>
                          <Link to="/"><Button>Multiple Fruits</Button></Link>
                          <Link to="/"><Button>Citrus Fruits</Button></Link>
                          <Link to="/"><Button>Subtropical Fruits</Button></Link>
                          <Link to="/"><Button>Stone Fruits</Button></Link>
                          <Link to="/"><Button>Melons</Button></Link>
                      </div>
                      </li>
                      <li><Link to="/"><Button>Flowers <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link to="/"><Button>Marigold </Button></Link>
                <Link to="/"><Button>Lotus (Kamal)</Button></Link>
                <Link to="/"><Button>Jasmine (Chameli/Mogra)</Button></Link>
                <Link to="/"><Button>Hibiscus (Gudhal)</Button></Link>
                <Link to="/"><Button>Rose (Gulab)</Button></Link>
                </div>
                      </li>
                      <li><Link to="/"><Button>Organic Fertilizer <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link to="/"><Button>Animal-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Plant-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Mineral-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Worm-Based Fertilizers</Button></Link>
                </div>
                      </li>
                      <li><Link to="/"><Button>Inorganic Fertilizer <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link to="/"><Button>Nitrogen-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Phosphorus-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link to="/"><Button>Specialized Fertilizers</Button></Link>
                </div>                      
                      </li>
                      <li><Link to="/"><Button>Non-Veg <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link to="/"><Button>Red Meat</Button></Link>
                <Link to="/"><Button>White Meat</Button></Link>
                <Link to="/"><Button>Eggs</Button></Link>
                <Link to="/"><Button>Sea Food</Button></Link>
                </div>
                      </li>
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex items-center	">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Vegetables</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Green Vegetables</Button></Link>
                <Link to="/"><Button>Beans</Button></Link>
                <Link to="/"><Button>Root Vegetables</Button></Link>
                <Link to="/"><Button>Cruciferous</Button></Link>
                <Link to="/"><Button>Nightshades</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fruits</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Fleshy Fruits</Button></Link>
                <Link to="/"><Button>Dry Fruits</Button></Link>
                <Link to="/"><Button>Aggregate Fruits</Button></Link>
                <Link to="/"><Button>Multiple Fruits</Button></Link>
                <Link to="/"><Button>Citrus Fruits</Button></Link>
                <Link to="/"><Button>Subtropical Fruits</Button></Link>
                <Link to="/"><Button>Stone Fruits</Button></Link>
                <Link to="/"><Button>Melons</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Flowers</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Marigold </Button></Link>
                <Link to="/"><Button>Lotus (Kamal)</Button></Link>
                <Link to="/"><Button>Jasmine (Chameli/Mogra)</Button></Link>
                <Link to="/"><Button>Hibiscus (Gudhal)</Button></Link>
                <Link to="/"><Button>Rose (Gulab)</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Organic Fertilizer</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Animal-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Plant-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Mineral-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Worm-Based Fertilizers</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Inorganic Fertilizer</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Nitrogen-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Phosphorus-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link to="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link to="/"><Button>Specialized Fertilizers</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Non-Veg</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/"><Button>Red Meat</Button></Link>
                <Link to="/"><Button>White Meat</Button></Link>
                <Link to="/"><Button>Eggs</Button></Link>
                <Link to="/"><Button>Sea Food</Button></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
