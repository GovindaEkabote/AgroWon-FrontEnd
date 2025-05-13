import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const QuantityBox = (props) => {
  const [inputVal, setInputVal] = useState(1);

  const minus = () =>{
    if(inputVal !== 1 && inputVal > 0){
      setInputVal(inputVal-1)
    }
  }
  const plus = () =>{
    setInputVal(inputVal+1)
  }
 
  useEffect(() =>{
    props.quantity(inputVal)
  },[inputVal])

  return (
    <div className="quantityDrop d-flex align-item-center">
    <Button onClick={minus}><FaMinus/></Button>
    <input type="text" value={inputVal} />
    <Button onClick={plus}><FaPlus/></Button>
  </div>
  )
}

export default QuantityBox