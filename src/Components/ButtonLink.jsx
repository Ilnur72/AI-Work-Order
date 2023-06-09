// import React from 'react'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { orderValue } from "../Store/orderValueSlice";
//
const ButtonLink = ({leftLink, rightLink, data}) => {
  const disptach = useDispatch()
  // const a = useSelector((state) => state.orderValue)
  // console.log(a);
  function handlerSubmit(){
    disptach(orderValue(data))
  }

  return (
    <div className=" flex items-center justify-between">
      <Link to={leftLink}>
        <Button
          variant="contained"
          sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
        >
          <i className="fa-solid fa-arrow-left fa-2xl"></i>
        </Button> 
      </Link>
      <Link to={rightLink}>
        <Button
        onClick={handlerSubmit}
          variant="contained"
          sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
        >
          <i className="fa-solid fa-arrow-right fa-2xl"></i>
        </Button>
      </Link>
    </div>
  );
};

export default ButtonLink;
//kodda qanaqa xatolik bor

ButtonLink.propTypes = {
  leftLink: PropTypes.string.isRequired,
  rightLink: PropTypes.string.isRequired,
  data: PropTypes.object,
  };