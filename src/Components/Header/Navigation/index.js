import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Navigation = (props) => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-1 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <MdOutlineMenu />
                </span>
                <span className="text"> ALL CATEGORIES </span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  {props.navData?.length !== 0 &&
                    props?.navData?.map((item, index) => {
                      return (
                        <li>
                          <Link to="/cat/1">
                            <Button>{item?.name}</Button>
                          </Link>
                        </li>
                      );
                    })}
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
              {props.navData?.length !== 0 &&
                props?.navData?.map((item, index) => {
                  return (
                    <li className="list-inline-item">
                      <Link to="/cat/1">
                        <Button>{item?.name}</Button>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
