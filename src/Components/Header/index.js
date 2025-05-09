import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import CountryDropDown from "../CountryDropDown";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { useContext, useState } from "react";

const Header = () => {
  const history = useNavigate();
  const context = useContext(MyContext);

  const logout =()=>{
    localStorage.clear();
    alert('Logout successfully')
    setTimeout(() =>{
      history('/signIn')
    },1000)
  }

  return (
    <>
      <div className="px-0 py-[4px] headerWrapper ">
        <div className="bg-lime-600 h-10 w-full p-2 hidden sm:hidden md:block">
          <div>
            <p className="mt-0 mb-0 text-center text-white text-md sm:text-xs md:text-sm font-medium">
              Shop online for Agriculture Products and get your order delivered
              at your doorstep in minutes. Enjoy instant delivery with{" "}
              <span className="font-bold">AgroWon</span>.
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-item-center col-sm-2">
                <Link to={"/"}>
                  <img className="" src={Logo} alt="AgroWon" />
                </Link>
              </div>
              <div className="col-sm-10  d-flex align-item-center part2">
                {context.stateList.length !== 0 && <CountryDropDown />}
                {/* Country DropDown */}

                {/* Search Bar */}
                <SearchBox />
                <div className="part3 d-flex align-item-center pt-2 ml-auto">
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      <Button className="btn-blue bg-blue btn-lg mr-3 btn-round">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Button className="btn-blue bg-blue btn-lg mr-3 btn-round" onClick={logout}>
                      LogOut
                    </Button>
                  )}
                  <div className="ml-auto cartTab d-flex align-item-center">
                    <span className="price mt-2">₹ 3.25</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <IoCartSharp />
                      </Button>
                      <span className="count d-flex align-item-center justify-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {context.categoryData?.length !== 0 && (
          <Navigation navData={context.categoryData} />
        )}
      </div>
    </>
  );
};

export default Header;
