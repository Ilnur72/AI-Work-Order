import React from "react";
import icon from "../../assets/icon.svg";
import Hamburger from "hamburger-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <img src={icon} alt="" />
        <Hamburger
          rounded
          distance="md"
          toggled={isOpen}
          color="#0030A8"
          toggle={setOpen}
        />
      </div>
      <div className="flex justify-center">
        <Link to={"/category"}>
          <Button className="flex items-center gap-4 text-base font-semibold" variant="contained">
            Narxni hisoblash <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
