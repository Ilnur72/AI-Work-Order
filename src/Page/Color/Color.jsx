import React from "react";
import { useSelector } from "react-redux";
import Range from "../../Components/Range";

//img
import icon from "../../assets/icon.svg";
import color1 from "../../assets/color/colorId-1.svg"
import color2 from "../../assets/color/colorId-2.svg"
import color3 from "../../assets/color/colorId-3.svg"
import color4 from "../../assets/color/colorId-4.svg"
import window1 from "../../assets/color/windowColor-1.svg"
import window2 from "../../assets/color/windowColor-2.svg"
import ButtonLink from "../../Components/ButtonLink";
import { useNavigate } from "react-router-dom";


const Color = () => {
  const orderValue = useSelector((state) => state.orderValue)
  const navigate = useNavigate()
  const [imgId, setImgId ] = React.useState({colorNumber:1, glassNumber:1})

  const [state, setState] = React.useState({
    activeObject: null,
    objects: [{ img: color1, id:1 }, { img: color2, id:2 }, { img: color3, id:3 },{ img: color4, id:4 }],
  });
  function toggleBtn(index) {
    setState({ ...state, activeObject: state.objects[index] });
    setImgId({...imgId,colorNumber: state.objects[index].id})
  }
  function toggleActive(index) {
    if (state.objects[index] === state.activeObject) {
      return true;
    } else {
      return false;
    }
  }

  const [window, setWindow] = React.useState({
    activeObject: null,
    objects: [{ img: window1, id:1 }, { img: window2, id:2 }],
  });
  function windowToggle(index) {
    setWindow({ ...window, activeObject: window.objects[index] });
    setImgId({...imgId,glassNumber: state.objects[index].id})
  }
  function windowToggleActive(index) {
    if (window.objects[index] === window.activeObject) {
      return true;
    } else {
      return false;
    }
  }
  React.useEffect(() => {
    toggleBtn(0)
    windowToggle(0)
    if(orderValue.width == 0) navigate('/')
  },[])
  return (
    <div className="px-5">
      <img src={icon} alt="logo" />
      <Range status={3} />
      <div className="mt-11 flex justify-center">
        <img
          src={`http://185.217.131.88:8080/attachment/open/${orderValue.imageId}`}
          alt="logo"
          width={300}
          height={281}
        />
      </div>
      <h2 className="text-lg font-semibold text-center mt-11">Romni rangini tanlang</h2>
      <div className="flex justify-around mt-2">
        {
          state.objects.map((item,index) => {
            return <div  key={index} className="relative">
              <img onClick={() => toggleBtn(index)} style={{border: toggleActive(index) ? "1px solid #1EE23D":"1px solid #BFBFBF", borderRadius:"6px"}} width={70} height={70} src={item.img} alt="" />
              <i className="fa-solid fa-circle-check absolute right-0 bottom-0 bg-white" style={{color: "#13e72c", borderRadius:"50%", display: toggleActive(index) ? "block" : "none"}}></i>
            </div>
          })
        }
      </div>
      <h2 className="text-lg font-semibold text-center mt-10">Oynani rangini tanlang</h2>
      <div className="flex ml-3 gap-6 mt-3">
        {
          window.objects.map((item, index) => {
            return <div key={index} className="relative">
               <img onClick={() => windowToggle(index)} style={{border: windowToggleActive(index) ? "1px solid #1EE23D":"1px solid #BFBFBF", borderRadius:"6px"}} width={70} height={70} src={item.img} alt="" />
              <i className="fa-solid fa-circle-check absolute right-0 bottom-0 bg-white" style={{color: "#13e72c", borderRadius:"50%", display: windowToggleActive(index) ? "block" : "none"}}></i>
            </div>
          })
        }
      </div>
      <div className=" mt-24">
        <ButtonLink leftLink={"/figure"} rightLink={"/shelf"} data={imgId}/>
      </div>
    </div>
  );
};

export default Color;
