// import React from 'react'
// import { useSelector } from "react-redux";
import Range from "../../Components/Range";
import icon from "../../assets/icon.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { loadState } from '../../Utils/storage';

const List = () => {
  // const navigate = useNavigate()
  const dataLocal = loadState('orderData')
  const orderDataValue = loadState('orderDataValue')
  console.log(orderDataValue);
  // const img = useSelector((state) => state.orderValue);
  // const data = useSelector((state) => state.dataValue);
  // React.useEffect(() => {
  //   // if(img.width == 0) navigate("/")
  // },[img])
  // console.log(data);
  return (
    <div className="px-5">
      <img src={icon} alt="logo" />
      <Range status={5} />
      <img
        className="mx-auto text-center mt-7"
        src={`http://185.217.131.88:8080/attachment/open/${orderDataValue.imageId}`}
        width={269}
        height={286}
        alt=""
      />
      {/* <TextField
        InputProps={{style:{width:"350px", height:"45px", borderRadius:"14px"}}}
        id="outlined-basic"
        variant="outlined"
        size="small"
      /> */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 350,
          marginTop: "42px",
          marginX: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
      {
        dataLocal && dataLocal.data?.map((item, index) => {
          return <div key={index}
          style={{ width: "351px", height: "137px", background: "#D3F0E3", }}
          className="pl-5 pr-6 rounded-t-2xl rounded-b-md pb-2 mt-6 mx-auto"
        >
          <div className="text-center"><strong className="text-xs font-bold">Taklif</strong></div>
          <div className="flex justify-between gap-5 items-center">
            <div className="flex flex-col justify-between gap-2">
              <strong className="text-xl font-bold">{item.amount?.toFixed()} so&apos;m</strong>
              <p style={{ color: "#083D25" }} className="text-base font-normal">
                {item.directorName}
              </p>
         
              <div className="flex gap-12">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot"></i>
                  <p style={{ color: "#083D25" }} className="text-sm font-medium w-20">
                    {item.region}
                  </p>
                </div>
                {/* <Button
                  sx={{
                    background: "#27BC7A",
                    ":hover": { background: "#2ba770" },
                    width:"111px",height:"28px",
                    fontSize:"8px", fontWeight:'700'
                  }}
                  variant="contained"
                  color="success"
                  size="small"
                >
                  Buyurtma berish
                </Button> */}
              </div>
            </div>
  
            <div style={{width:"61px"}} className="">
              <div className="flex flex-col justify-between gap-2 ">
              <Button
                sx={{
                  background: "#27BC7A",
                  ":hover": { background: "#2ba770" },
                  width: "61px",
                  height: "35px",
                }}
                variant="contained"
                color="success"
              >
                <i
                  className="fa-solid fa-phone-volume fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </Button>
              <Link to={"https://t.me/"+item.tgLink.slice(1)}><Button
                sx={{
                  background: "#27BC7A",
                  ":hover": { background: "#2ba770" },
                  width: "61px",
                  height: "35px",
                }}
                variant="contained"
                color="success"
              >
                <i
                  className="fa-brands fa-telegram fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </Button></Link>
              {/* <Button
                sx={{
                  background: "#27BC7A",
                  ":hover": { background: "#2ba770" },
                  width: "61px",
                  height: "35px",
                }}
                variant="contained"
                color="success"
              >
                <i
                  className="fa-solid fa-map-location-dot fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </Button> */}
              </div>
            </div>
          </div>
        </div>
        })
      }
    </div>
  );
};

export default List;
