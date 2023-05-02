import { Route, Routes } from "react-router-dom"
// import Home from "./Page/Home/Home"
// import Category from "./Page/Category/Category"
import Size from "./Page/Size/Size"
import Figure from "./Page/Figure/Figure"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Color from "./Page/Color/Color";
import Shelf from "./Page/Shelf/Shelf";

function App() {

  return (
    <div style={{maxWidth: "412px", width:"100%"}} className="pb-10  mx-auto mt-5 relative">
     <Routes>
       {/* <Route path="/" element={<Home/>}/> */}
       {/* <Route path="/category" element={<Category/>}/> */}
       <Route path="/" element={<Size/>}/>
       <Route path="/figure" element={<Figure/>}/>
       <Route path="/color" element={<Color/>}/>
       <Route path="/shelf" element={<Shelf/>}/>
     </Routes>
    </div>
  )
}

export default App
