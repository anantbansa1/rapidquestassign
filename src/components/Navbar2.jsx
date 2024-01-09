import React from "react";
import HomeIcon1 from "@mui/icons-material/Home";

import HomeIcon2 from "@mui/icons-material/Newspaper";
import HomeIcon3 from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon4 from "@mui/icons-material/Person";

function Navbar2() {
  let iconarray = [HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4, SearchIcon];
  const icons = () => {
    return iconarray.map((Icon, index) => (
      //   <HomeIcon1 />
      <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
        <Icon />
      </div>
    ));
  };
  return (
    <div className="flex justify-around w-full ">
      {icons()}
      {/* <SearchIcon></SearchIcon> */}
      {/* <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
        <HomeIcon1 />
      </div> */}
    </div>
  );
}

export default Navbar2;
