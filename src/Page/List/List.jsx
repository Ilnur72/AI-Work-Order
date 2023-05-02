import React from 'react'
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
// import { useSelector } from "react-redux";



const List = () => {
  // const navigate = useNavigate()
  const [data, setData] = React.useState([])
  const [dataOrder, setDataOrder] = React.useState([])

  function imgIndex(id){
    if(dataOrder.colorNumber == 1 && dataOrder.glassNumber==1) return id
    if(dataOrder.colorNumber == 1 && dataOrder.glassNumber==2 && id>8 ) return id+6
    if(dataOrder.colorNumber == 1 && dataOrder.glassNumber==2 && id<5 ) return id+4
  
    if(dataOrder.colorNumber == 2 && dataOrder.glassNumber==1) return id+32
    if(dataOrder.colorNumber == 2 && dataOrder.glassNumber==2 && id>8 ) return id+38
    if(dataOrder.colorNumber == 2 && dataOrder.glassNumber==2 && id<5 ) return id+36
  
    if(dataOrder.colorNumber == 3 && dataOrder.glassNumber==1) return id+64
    if(dataOrder.colorNumber == 3 && dataOrder.glassNumber==2 && id>8 ) return id+70
    if(dataOrder.colorNumber == 3 && dataOrder.glassNumber==2 && id<5 ) return id+68
  
    if(dataOrder.colorNumber == 4 && dataOrder.glassNumber==1) return id+96
    if(dataOrder.colorNumber == 4 && dataOrder.glassNumber==2 && id>8 ) return id+102
    if(dataOrder.colorNumber == 4 && dataOrder.glassNumber==2 && id<5 ) return id+100
  }
  React.useEffect(() => {
    const dataLocal = loadState('orderData')
    const orderDataValue = loadState('orderDataValue')
    setData(dataLocal)
    setDataOrder(orderDataValue)
  },[])
  return (
    <div className="px-5">
      <img src={icon} width={150} alt="logo" />
      <Range status={5} />
      {
      dataOrder && <img
        className="mx-auto text-center mt-7"
        src={`http://185.217.131.88:8080/attachment/open/${imgIndex(dataOrder.imageId)}`}
        width={269}
        height={286}
        alt=""
      />
      }
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
        data && data.data?.map((item, index) => {
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
