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
                      <li><Link top="/"><Button>Vegetables<IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                          <Link top="/"><Button>Green Vegetables</Button></Link>
                          <Link top="/"><Button>Beans</Button></Link>
                          <Link top="/"><Button>Root Vegetables</Button></Link>
                          <Link top="/"><Button>Cruciferous</Button></Link>
                          <Link top="/"><Button>Nightshades</Button></Link>
                      </div>
                      </li>
                      <li><Link top="/"><Button>Fruits <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow ">
                          <Link top="/"><Button>Fleshy Fruits</Button></Link>
                          <Link top="/"><Button>Dry Fruits</Button></Link>
                          <Link top="/"><Button>Aggregate Fruits</Button></Link>
                          <Link top="/"><Button>Multiple Fruits</Button></Link>
                          <Link top="/"><Button>Citrus Fruits</Button></Link>
                          <Link top="/"><Button>Subtropical Fruits</Button></Link>
                          <Link top="/"><Button>Stone Fruits</Button></Link>
                          <Link top="/"><Button>Melons</Button></Link>
                      </div>
                      </li>
                      <li><Link top="/"><Button>Flowers <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link top="/"><Button>Marigold </Button></Link>
                <Link top="/"><Button>Lotus (Kamal)</Button></Link>
                <Link top="/"><Button>Jasmine (Chameli/Mogra)</Button></Link>
                <Link top="/"><Button>Hibiscus (Gudhal)</Button></Link>
                <Link top="/"><Button>Rose (Gulab)</Button></Link>
                </div>
                      </li>
                      <li><Link top="/"><Button>Organic Fertilizer <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link top="/"><Button>Animal-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Plant-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Mineral-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Worm-Based Fertilizers</Button></Link>
                </div>
                      </li>
                      <li><Link top="/"><Button>Inorganic Fertilizer <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link top="/"><Button>Nitrogen-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Phosphorus-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link top="/"><Button>Specialized Fertilizers</Button></Link>
                </div>                      
                      </li>
                      <li><Link top="/"><Button>Non-Veg <IoIosArrowForward className="ml-auto"/></Button></Link>
                      <div className="submenu shadow">
                <Link top="/"><Button>Red Meat</Button></Link>
                <Link top="/"><Button>White Meat</Button></Link>
                <Link top="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link top="/"><Button>Specialized Fertilizers</Button></Link>
                </div>
                      </li>
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex items-center	">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Vegetables</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Green Vegetables</Button></Link>
                <Link top="/"><Button>Beans</Button></Link>
                <Link top="/"><Button>Root Vegetables</Button></Link>
                <Link top="/"><Button>Cruciferous</Button></Link>
                <Link top="/"><Button>Nightshades</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Fruits</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Fleshy Fruits</Button></Link>
                <Link top="/"><Button>Dry Fruits</Button></Link>
                <Link top="/"><Button>Aggregate Fruits</Button></Link>
                <Link top="/"><Button>Multiple Fruits</Button></Link>
                <Link top="/"><Button>Citrus Fruits</Button></Link>
                <Link top="/"><Button>Subtropical Fruits</Button></Link>
                <Link top="/"><Button>Stone Fruits</Button></Link>
                <Link top="/"><Button>Melons</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Flowers</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Marigold </Button></Link>
                <Link top="/"><Button>Lotus (Kamal)</Button></Link>
                <Link top="/"><Button>Jasmine (Chameli/Mogra)</Button></Link>
                <Link top="/"><Button>Hibiscus (Gudhal)</Button></Link>
                <Link top="/"><Button>Rose (Gulab)</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Organic Fertilizer</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Animal-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Plant-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Mineral-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Worm-Based Fertilizers</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Inorganic Fertilizer</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Nitrogen-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Phosphorus-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link top="/"><Button>Specialized Fertilizers</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link top="/">
                  <Button>Non-Veg</Button>
                </Link>
                <div className="submenu shadow">
                <Link top="/"><Button>Red Meat</Button></Link>
                <Link top="/"><Button>White Meat</Button></Link>
                <Link top="/"><Button>Potassium-Based Fertilizers</Button></Link>
                <Link top="/"><Button>Compound or Mixed Fertilizers</Button></Link>
                <Link top="/"><Button>Specialized Fertilizers</Button></Link>
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
