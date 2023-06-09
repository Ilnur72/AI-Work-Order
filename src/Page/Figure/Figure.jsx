import React from "react";
import Range from "../../Components/Range";
import icon from "../../assets/icon.png";
import Slick from "./Components/Slick";
import ButtonLink from "../../Components/ButtonLink.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const categoryOne = [
  { imageId: 9, category:5 },
  { imageId: 10, category:6 },
  { imageId: 11, category:7 },
  { imageId: 12, category:8 },
  { imageId: 13, category:9 },
  { imageId: 14, category:10 },
];
const categoryTwo = [
  { imageId: 21, category:11 },
  { imageId: 22, category:12 },
  { imageId: 23, category:13 },
  { imageId: 24, category:14 },
  { imageId: 25, category:15 },
  { imageId: 26, category:16 },
];
const categoryThree = [{ imageId: 1, category:1 }, { imageId: 2, category:2 }, { imageId: 3, category:3 }, { imageId: 4, category:4 }];

const Figure = () => {
  const [data, setData] = React.useState(null);
  const orderValue = useSelector((state) => state.orderValue)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!data) {
      setData(categoryOne[0]);
    }
  }, [data]);
  const [status, setStatus] = React.useState(9);
  const [state, setState] = React.useState({
    activeObject: null,
    objects: [{ id: 9 }, { id: 21 }, { id: 1 }],
  });
  function toggleBtn(index) {
    setState({ ...state, activeObject: state.objects[index] });
    setStatus(state.objects[index].id);
  }
  function toggleActive(index) {
    if (state.objects[index] === state.activeObject) { 
      return true;
    } else {
      return false;
    }
  }
  React.useEffect(() => {
    toggleBtn(0);
    if(orderValue.width == 0) navigate("/")
  }, []);

  return (
    <div className="px-5">
      <img src={icon} width={120} className="my-5" alt="logo" />
      <Range status={2} />
      <div className="pt-9">
        <Slick
          category={
            status === 9
              ? categoryOne
              : status === 21
              ? categoryTwo
              : categoryThree
          }
          setData={setData}
        />
        <h2 className="text-lg font-semibold text-center mt-5">
          Romni shaklini tanlang
        </h2>
      </div>
      <div
        style={{ height: "120px" }}
        className="flex gap-2 justify-center items-center pt-4"
      >
        {state.objects.map((el, index) => {
          return (
            <img
              style={{
                border: toggleActive(index)
                  ? "2px solid #1EE23D"
                  : "2px solid transparent",
              }}
              onClick={() => toggleBtn(index)}
              key={index}
              src={`http://185.217.131.88:8080/attachment/open/${el.id}`}
              width={105}
              height={112}
              alt=""
            />
          );
        })}
      </div>

      <div style={{marginTop:"100px"}} className="">
        <ButtonLink leftLink={"/"} rightLink={"/color"} data={data}/>
      </div>
    </div>
  );
};

export default Figure;
