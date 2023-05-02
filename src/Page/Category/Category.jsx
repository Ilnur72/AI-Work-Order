// import React from 'react'
import { Button } from "@mui/material";
import icon from "../../assets/icon.svg";
import window1 from "../../assets/category/window-1.svg";
import window2 from "../../assets/category/window-2.svg";
import window3 from "../../assets/category/window-3.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderCategory } from "../../Store/orderValueSlice";

const Category = () => {
  const dispatch = useDispatch()
  const a = useSelector((state) => state.orderValue)
  function handlerClick(id) {
    dispatch(orderCategory(id))
    console.log(a);
  }
  return (
    <div className="px-5 pb-80">
      <img src={icon} alt="" />
      <div className="flex gap-7 mt-3">
        <div className="flex flex-col gap-6">
          <div
            style={{ border: "2px solid #00A0FA" }}
            className="flex flex-col gap-4 items-center rounded-2xl py-4 px-3 border-blue-800 w-44"
          >
            <img src={window1} alt="" />
            <Link to={"/size"}>
              <Button onClick={() => handlerClick(1)} className="font-semibold text-base" variant="contained">
                Rom
              </Button>
            </Link>
          </div>
          <div
            style={{ border: "2px solid #00A0FA" }}
            className="flex flex-col gap-6 items-center rounded-2xl py-4 px-3 border-blue-700 w-44"
          >
            <img src={window3} alt="" />
            <Button className="font-semibold text-base" variant="contained">
              Fortchka
            </Button>
          </div>
        </div>
        <div
          style={{ border: "2px solid #00A0FA" }}
          className="flex flex-col gap-5 items-center   rounded-2xl py-4 px-3 border-blue-700 w-44"
        >
          <img src={window2} alt="" />
          <Button className="font-semibold text-base" variant="contained">
            Eshik
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
