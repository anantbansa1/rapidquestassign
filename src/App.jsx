import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Leftcomponent from "./components/Leftcomponent";
import Rightcomponent from "./components/Rightcomponent";
import Midcomponent from "./components/Midcomponent ";
import Corner from "./assets/Corner.png";
import Navbar2 from "./components/Navbar2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] w-[100vw] md:bg-[#e5e5e5] flex ">
        <div className="md:h-[99%] md:w-[99%] w-full relative md:rounded-3xl bg-white md:flex max-md:flex-col   md:overflow-clip  m-auto ">
          <div className="max-md:hidden">
            <Navbar />
          </div>
          <div className="fixed bottom-0 flex md:hidden w-full h-[8vh] text-black bg-white z-10  content-center">
            {/* hello */}
            <Navbar2 />
          </div>
          <div>
            <Leftcomponent />
          </div>
          <div>
            <Midcomponent />
          </div>
          <div>
            <Rightcomponent />
          </div>
          <div className="absolute bottom-0 right-0 h-[60px] w-[80px] max-md:hidden ">
            <img src={Corner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
