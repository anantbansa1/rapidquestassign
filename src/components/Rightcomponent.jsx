import React from "react";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#0a84ff" : "#007bff",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));

function Rightcomponent() {
  const [value, setvalue] = useState(50);
  const handlechanges1 = (e) => {
    setvalue(e.target.value);
  };
  const [value2, setvalue2] = useState(50);
  const handlechanges12 = (e) => {
    setvalue2(e.target.value);
  };
  return (
    <div className="md:h-[100%] md:w-[25vw] pt-[18%] text-black flex-col space-y-2 ">
      <div className="  h-[58%] bg-[#fafafa] w-full md:w-[70%] md:ml-2 pl-3 mr-10 flex-col rounded-md spcae-y-4 ">
        <div className="md:pl-4  flex-col">
          <div className="flex-col  space-y-3 mx-[5%] pt-4">
            <div className="text-md  font-Bitter font-bold ">
              Retirement Strategy
            </div>
            <div className="text-xs pt-3 font-Bitter font-semibold ">
              Employee Comtribution
            </div>
            <div className="text-lg   font-Bitter flex font-semibold ">
              <div className="w-[65%]">
                <IOSSlider value={value} onChange={handlechanges1} />
              </div>
              <div className="flex justify-center  px-3 mt-[8px] text-sm">
                {value}%
              </div>
            </div>
            <div className="text-xs pt-1 font-Bitter font-semibold ">
              Retirement Age
            </div>
            <div className="text-lg   font-Bitter flex font-semibold ">
              <div className="w-[65%]">
                <IOSSlider value={value2} onChange={handlechanges12} />
              </div>
              <div className="flex justify-center  px-3 mt-[8px] text-sm">
                {value2}%
              </div>
            </div>
            <hr className="w-[80%]" />
          </div>
          <div className="flex-col mt-3 space-y-3 pl-3 w-[85%]">
            <div className="flex justify-between">
              <div className="text-xs font-bold"> Employer contribution</div>
              <div className="text-xs font-bold"> 8.4%</div>
            </div>
            <div className="flex justify-between">
              <div className="text-xs font-bold"> Interest Rate</div>
              <div className="text-xs font-bold pb-3"> 5%</div>
            </div>
            <div className=" bg-[#4636F5] w-[100%] max-md:-mx-6 max-md:w-[100vw] ml-1 h-[7vh] md:h-[5vh] hover:cursor-pointer text-xs flex justify-center text-white md:rounded-lg">
              <div className="my-auto"> Update</div>
            </div>
            <div className="md:hidden h-[6vh] w-full bg-white"></div>
            <div className="text-[#4636F5] max-md:hidden font-bold text-xs w-full flex justify-center hover:cursor-pointer my-auto">
              View help Docs ›
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm mt-3 ml-2 font-normal max-md:hidden pl-7 border border-y-0 py-1  border-l-[#9A91F8]">
        <div>Are you considering a</div>
        <div className="font-bold ">Housing Advance?</div>
        <div className="text-xs pt-1 text-gray-400">
          Limited time reduced interest
        </div>
        <div className="text-[#4636F5] pt-2 text-xs hover:cursor-pointer ">
          Learn More›
        </div>
      </div>
    </div>
  );
}

export default Rightcomponent;
