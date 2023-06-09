import React from "react";
import Range from "../../Components/Range";
import { useAxios } from "../../Hook/useAxios.js";
import icon from "../../assets/icon.png";
import shelf from "../../assets/shelf/shelf.svg";
import arrow from "../../assets/shelf/arrow.svg";
import { Button, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { orderValue } from "../../Store/orderValueSlice";
import { saveState } from "../../Utils/storage";

const Shelf = () => {
  const navigate = useNavigate()
  const [shelfId, setShelfId] = React.useState({
    shelfSize: 0,
    region: "Toshkent vil",
  });
  const [region, setRegion] = React.useState('Toshkent vil');
  const { data } = useAxios({ url: "region", method: "get" });
  const [state, setState] = React.useState({
    activeObject: null,
    objects: [
      { shelfSize: 0 },
      { shelfSize: 15 },
      { shelfSize: 20 },
      { shelfSize: 25 },
      { shelfSize: 30 },
      { shelfSize: 35 },
      { shelfSize: 40 },
      { shelfSize: 45 },
    ],
  });
  function toggleBtn(index) {
    setState({ ...state, activeObject: state.objects[index] });
    setShelfId({ ...shelfId, shelfSize: state.objects[index].shelfSize });
  }
  function toggleActive(index) {
    if (state.objects[index] === state.activeObject) {
      return true;
    } else {
      return false;
    }
  }
  const orderData = useSelector((state) => state.orderValue);
  React.useEffect(() => {
    toggleBtn(0);
    if(orderData.width == 0) navigate("/")
  }, []);

  function handleChange(e) {
    setShelfId({ ...shelfId, region: e.target.value });
    setRegion(e.target.value);
  }
  const dispatch = useDispatch();
 
  React.useEffect(() => {
    dispatch(orderValue(shelfId));
  },[region])
  async function handlerSubmit() {
    try{
      const data = await axios.post("/orderCalculate/getPriceList/window", orderData);
      saveState('orderData', data)
      saveState('orderDataValue', orderData)
      navigate("/list")
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className="px-5">
      <img src={icon} width={120} className="my-5" alt="logo" />
      <Range status={4} />
      <h2
        style={{ color: "#0077FF" }}
        className="text-xl font-bold text-center mt-5"
      >
        Tokcha uzunligi va rangi avtomatik hisoblanadi
      </h2>
      <div
        style={{ height: "122px" }}
        className="relative mt-7 flex justify-center"
      >
        <img className="absolute" src={shelf} alt="shelf" />
        <img className="absolute -bottom-4 left-44" src={arrow} alt="arrow" />
      </div>
      <div className="text-center ml-44 mt-2">
        <p style={{ color: "#0077FF" }} className="text-base font-semibold">
          Tokcha enini tanlang <br />
          (santimetrda)
        </p>
      </div>

      <div
        // style={{ width: "350px" }}
        className="flex flex-wrap mt-2"
      >
        {state.objects.map((item, index) => {
          return (
            <div key={index} className="relative ">
              {toggleActive(index) ? (
                <i
                  className={`fa-solid fa-circle-check  absolute ${
                    item.shelfSize ? "right-0" : "right-2"
                  } top-3 bg-white`}
                  style={{
                    color: "#1EE23D",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                ></i>
              ) : null}
              <p
                style={{ color: "#BBBBBB" }}
                className={`${
                  item.shelfSize === 0 ? "block" : "hidden"
                } text-xs font-semibold`}
              >
                Kerak emas
              </p>
              <span
                onClick={() => toggleBtn(index)}
                style={{
                  background: toggleActive(index)
                    ? "#1EE23D"
                    : item.shelfSize === 0
                    ? "#BBBBBB"
                    : "white",
                  border: toggleActive(index) ? "none" : "3px solid #BBBBBB",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  fontSize: "30px",
                  color:
                    item.shelfSize === 0
                      ? "white"
                      : toggleActive(index)
                      ? "white"
                      : "#BBBBBB",
                  marginTop: item.shelfSize === 0 ? "0" : "16px",
                  marginLeft:
                    item.shelfSize === 0
                      ? "8px"
                      : item.shelfSize === 15
                      ? "0"
                      : "8px",
                }}
                className="flex justify-center items-center text-xl font-semibold"
              >
                {item.shelfSize === 0 ? (
                  <i className="fa-solid fa-xmark fa-md"></i>
                ) : (
                  item.shelfSize
                )}
              </span>
            </div>
          );
        })}
      </div>
      <div>
        <h3
          style={{ color: "#0077FF" }}
          className="text-xl font-bold mt-5 mb-3"
        >
          Hududingizni tanlang
        </h3>
        <p style={{ color: "#949494" }} className="font-medium text-md">
          Viloyat
        </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          size="small"
          label="Viloyat"
          onChange={handleChange}
          sx={{
            width: "191px",
            background: "#00A0FA",
            color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          {data?.map((item) => {
            return (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div style={{marginTop:"26px"}}>
        <div className=" flex items-center justify-between">
          <Link to={"/color"}>
            <Button
              variant="contained"
              sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
            >
              <i className="fa-solid fa-arrow-left fa-2xl"></i>
            </Button>
          </Link>
            <Button
              onClick={handlerSubmit}
              variant="contained"
              sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
            >
              <i className="fa-solid fa-arrow-right fa-2xl"></i>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
