import React from "react";
import StackedBarChart from "./StackedBarChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircularProgress from "@mui/joy/CircularProgress";

function Midcomponent() {
  return (
    <div className="md:h-[100%] md:w-[48vw]  ">
      <div className="mx-[8%] mt-[6%] flex-col space-y-5   h-[100%]">
        <div>
          <div className="text-[#4636F5] font-Bitter text-sm font-bold">
            Retirement Income
          </div>
          <div className="text-black text-xl font-Bitter font-semibold">
            Starting Year 2056
          </div>
        </div>
        <div className="flex space-x-5 max-md:hidden">
          <div className="w-[30%] flex-col space-y-1 ">
            <div className="text-black font-Bitter font-bold text-xl">
              $300,000
            </div>
            <div className="text-gray-400 font-bold text-xs pb-1">My Goal</div>
            <div className="h-[2px]  w-[80%] bg-[#9A91F8]"></div>
          </div>
          <div className="w-[30%] flex-col space-y-1">
            <div className="text-black font-Bitter font-bold text-xl">59%</div>
            <div className="text-gray-400 font-bold pb-1 text-xs">
              Goal Achieved
            </div>
            <div className="h-[2px]  w-[80%] bg-[#9A91F8]"></div>
          </div>
          <div className="w-[30%] flex-col space-y-1">
            <div className="text-black font-Bitter font-bold text-xl">$300</div>
            <div className="text-gray-400 font-bold pb-1 text-xs">
              Est. Monthly Income
            </div>
            <div className="h-[2px]  w-[80%] bg-[#9A91F8]"></div>
          </div>
        </div>
        <div className="flex-col space-y-3  md:hidden">
          <div className="w-[100%] flex-col space-y-1 ">
            <div className="text-black font-Bitter font-bold text-xl">
              $300,000
            </div>
            <div className="text-gray-400 font-bold text-xs pb-1">My Goal</div>
            <div className="h-[2px]  w-[100%] bg-[#9A91F8]"></div>
          </div>
          <div className="flex space-x-6">
            <div className="flex-col w-[50%]">
              <div className="w-[100%] flex-col space-y-1">
                <div className="text-black font-Bitter font-bold text-xl">
                  59%
                </div>
                <div className="text-gray-400 font-bold pb-1 text-xs">
                  Goal Achieved
                </div>
                <div className="h-[2px]  w-[100%] bg-[#9A91F8]"></div>
              </div>
            </div>
            <div className="flex-col w-[50%]">
              <div className="w-[100%] flex-col space-y-1">
                <div className="text-black font-Bitter font-bold text-xl">
                  $300
                </div>
                <div className="text-gray-400 font-bold pb-1 text-xs">
                  Est. Monthly Income
                </div>
                <div className="h-[2px]  w-[100%] bg-[#9A91F8]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 font-Bitter font-semibold  text-black">
          Contributions Overtime
        </div>
        <div>
          <StackedBarChart />
        </div>
        <div>
          <div className="pt-5 font-Bitter font-semibold  text-black">
            How do I compare to my peers?
          </div>
          <div className=" font-Bitter font-semibold text-xs  text-gray-400">
            These Numbers represent current goal achievement
          </div>
        </div>
        <div className="flex max-md:flex-col">
          <div className="flex-col space-y-2">
            <div className="flex space-x-1">
              <div className="font-bold text-sm text-black ">Age: </div>
              <div className=" text-xs text-black  ">
                Under30
                <ArrowDropDownIcon />{" "}
              </div>
            </div>
            <hr />

            <div className="flex space-x-1">
              <div className="font-bold text-sm text-black ">Salary: </div>
              <div className=" text-xs text-black ">
                K 20-K 30
                <ArrowDropDownIcon />{" "}
              </div>
            </div>
            <hr />
            <div className="flex space-x-1">
              <div className="font-bold text-sm text-black ">Gender: </div>
              <div className=" text-xs text-black ">
                Male
                <ArrowDropDownIcon />{" "}
              </div>
            </div>
            <hr />
          </div>
          <div className="flex space-x-10  mx-[6%] md:mx-[10%] pt-5">
            <div className="flex-col">
              <CircularProgress size="lg" determinate value={78}>
                78<sup>%</sup>
              </CircularProgress>
              <div className="text-black flex text-xs justify-center content-center">
                Average
              </div>
            </div>
            <div className="flex-col">
              <CircularProgress size="lg" determinate value={90}>
                95<sup>%</sup>
              </CircularProgress>
              <div className="text-black text-xs flex justify-center content-center">
                Top
              </div>
            </div>
            <div className="flex-col">
              <CircularProgress size="lg" determinate value={59}>
                59<sup>%</sup>
              </CircularProgress>
              <div className="text-black text-xs flex justify-center content-center">
                Me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midcomponent;
