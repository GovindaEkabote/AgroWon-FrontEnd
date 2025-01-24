import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const [selected, setSelected] = useState(null);
  const [stateList, setStateList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, states) => {
    setSelected(index);
    setisOpenModel(false);
    context.setSelectedState(states)
  };

  useEffect(() => {
    setStateList(context.stateList);
  }, []);
  
  const filterList = (e) => {
    const keywprd = e.target.value.toLowerCase();

    if (keywprd) {
      const list = stateList.filter((item) => {
        return item.states.toLowerCase().includes(keywprd);
      });
      setStateList(list);
    } else {
      setStateList(context.stateList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedState === ""? 'select State': context.selectedState?.substr(0,10)+'...'}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        className="locationModel"
        TransitionComponent={Transition}
        onClose={() => setisOpenModel(false)}
      >
        <h4 className="mt-1 ">Choose Your Location</h4>
        <p className="text-zinc-500">
          Select your country and we will specify the offer for your area.
        </p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoMdClose />
        </Button>
        <div className="headerSearch w-100 ">
          <input
            type="text"
            placeholder="Search for area.. "
            onChange={filterList}
          />
          <Button>
            <FaSearch />
          </Button>
        </div>
        <ul className="stateList mt-3 ">
          {stateList?.length !== 0 &&
            stateList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button value={selected}
                    onClick={() => selectCountry(index,item.states)}
                    className={`${selected === index ? "active" : ""}`}
                  >
                    {item.states}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
