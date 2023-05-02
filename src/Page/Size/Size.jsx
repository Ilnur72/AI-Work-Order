// import React from 'react'
import { Button, InputAdornment, TextField } from "@mui/material";
import Range from "../../Components/Range";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//img
import icon from "../../assets/icon.svg";
import arrowHeight from "../../assets/SizePage/ArrowHeight.svg";
import arrowWidth from "../../assets/SizePage/ArrowWidth.svg";
import { Link, useNavigate } from "react-router-dom";
import { orderValue } from "../../Store/orderValueSlice";

const Size = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const submit = async (data) => {
    await dispatch(orderValue(data));
    navigate("/figure");
    reset();
  };

  return (
    <div >
      <img src={icon} alt="logo" />
      <Range status={1} />
      <h2 className="text-zinc-600 text-2xl font-semibold mt-20 text-center">
        Olchamlarni kiriting
      </h2>
      <form className="mt-8 px-5">
        <div className="flex items-center justify-center gap-3">
          <div className="w-24">
            <p
              style={{ color: "#00A0FA" }}
              className="text-xs font-semibold text-end mr-2"
            >
              Balandligi
            </p>
            <TextField
              {...register("height", {
                required: true,
                min: 1,
                pattern: /[0-9]*/,
              })}
              className="text-white"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
                    sm
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "91px",
                borderRadius: "5px",
              }}
              size="small"
            />
          </div>
          <div className="flex">
            <img src={arrowHeight} alt="" />
            <img
              src="http://185.217.131.88:8080/attachment/open/21"
              width={221}
              height={225}
              alt=""
            />
          </div>
        </div>
        <img className="ml-36" src={arrowWidth} alt="" />
        <div className="flex justify-end mr-10">
          <div className="w-24">
            <p
              style={{ color: "#00A0FA" }}
              className="text-xs font-semibold text-end mr-2"
            >
              Uzunligi
            </p>
            <TextField
              {...register("width", {
                required: true,
                min: 1,
                pattern: /[0-9]*/,
              })}
              className="text-white"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
                    sm
                  </InputAdornment>
                ),
                inputProps: { min: 1 },
              }}
              sx={{
                width: "91px",
                borderRadius: "5px",
              }}
              size="small"
            />
          </div>
        </div>
        <div className="mt-11 flex items-center justify-between">
          <div className="w-36 text-center">
            <h3 style={{ color: "#00A0FA" }} className="text-xl font-bold mb-2">
              Sonini kiriting
            </h3>
            <TextField
              {...register("count", { min: 1, pattern: /[0-9]*/ })}
              InputProps={{
                inputProps: { min: 1 },
              }}
              className="w-16"
              size="small"
              defaultValue={1}
            />
          </div>
          {/* <div className="relative">
            <Button
            onClick={()=> setState(!state)}
              className="flex justify-center items-center"
              variant="contained"
              size="small"
              sx={{
                background: "#23d73e",
                ":hover": { background: "#23d73e" },
              }}
            >
              Plastic (PVX){" "}
              {
                state ? <i
                className="fa-solid fa-circle-check fa-lg absolute z-10 -right-2 -top-1"
                style={{ color: "#1EE23D", background: "white" }}
              ></i> : null
              }
            </Button>
          </div> */}
        </div>
        <div
          style={{ marginTop: "158px" }}
          className="flex items-center justify-between"
        >
          <Link to={"/"}>
            <Button
              variant="contained"
              sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
            >
              <i className="fa-solid fa-arrow-left fa-2xl"></i>
            </Button>
          </Link>
          <Button
            onClick={handleSubmit(submit)}
            variant="contained"
            sx={{ borderRadius: "50%", width: "70px", height: "70px" }}
          >
            <i className="fa-solid fa-arrow-right fa-2xl"></i>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Size;
