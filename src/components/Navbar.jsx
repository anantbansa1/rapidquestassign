import React from "react";
import logo from "../assets/icon.png";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";

// import HomeIcon3 from "@mui/icons-material/Home";
import HomeIcon1 from "@mui/icons-material/Home";

import HomeIcon2 from "@mui/icons-material/Newspaper";
import HomeIcon3 from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon4 from "@mui/icons-material/Person";
function Navbar() {
  let iconarray = [HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4];
  const icons = () => {
    return iconarray.map((Icon, index) => (
      <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
        <Icon />
      </div>
    ));
  };

  return (
    <div>
      <div className="h-[99vh] w-[4vw] flex justify-between rounded-l-3xl flex-col">
        <div className="flex-col justify-center space-y-20">
          <div className="mx-auto pt-5 flex-col hover:cursor-pointer justify-center space-y-8 p-2">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
              <SearchIcon />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 p-2 ">
            {icons()}
          </div>
        </div>
        <div className="flex-col space-y-5 text-black p-2">
          <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
            <NotificationsActiveIcon />
          </div>
          <div className="aspect-square hover:cursor-pointer text-black flex items-center justify-center hover:bg-[#4636F5] hover:text-white p-1 rounded-md hover:shadow-md  ">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
