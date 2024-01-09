import React from "react";
import Icon from "../assets/icon.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Rightcomponent() {
  return (
    <div className="md:h-[100%] md:w-[25vw] md:bg-[#fafafa]">
      <div className="flex flex-col md:justify-center space-y-4 pt-[10vh] md:pt-[3vh]">
        <div className="flex md:justify-center gap-x-5">
          <div>
            <img
              src={Icon}
              className="rounded-full aspect-square h-16"
              alt=""
            />
          </div>
          <div className="flex-col pt-3">
            <div className="text-black text-3xl font-bold font-Bitter">
              Hi Mike,
            </div>
            <div className="text-black text-xs">welcome back. </div>
          </div>
          <div> a</div>
        </div>
        <div className="flex-col max-md:pl-16 ">
          <div className="font-Bitter text-sm text-black font-semibold md:px-[20%] pt-6 pb-6">
            {" "}
            Today
          </div>
          <div className="font-Bitter text-3xl text-black md:px-[20%] font-extrabold">
            $19,892
          </div>
          <div className="text-xs text-gray-400 md:px-[20%] ">
            Account Balance
          </div>
          <div className="font-Bitter max-md:hidden text-sm text-black md:px-[20%] pt-4 font-bold">
            $4,000
          </div>
          <div className="text-xs max-md:hidden text-gray-400 md:px-[20%] ">
            Year-to-date Contributuons
          </div>
          <div className="font-Bitter max-md:hidden text-sm text-black md:px-[20%] pt-4 font-extrabold">
            $1,892
          </div>
          <div className="text-xs max-md:hidden text-gray-400 md:px-[20%] pb-4 ">
            Total interest
          </div>
          <div className="flex space-x-16">
            <div className="flex-col">
              <div className="font-Bitter md:hidden text-sm text-black md:px-[20%] pt-4 font-bold">
                $4,000
              </div>
              <div className="text-xs md:hidden text-gray-400 md:px-[20%] ">
                Year-to-date
              </div>
            </div>
            <div className="flex-col">
              <div className="font-Bitter md:hidden text-sm text-black md:px-[20%] pt-4 font-extrabold">
                $1,892
              </div>
              <div className="text-xs md:hidden text-gray-400 md:px-[20%] pb-4 ">
                Total interest
              </div>
            </div>
          </div>
          <div className="h-10 md:w-[35%] w-[70%] md:mx-[20%] mx-[4%] rounded-lg text-white flex justify-center content-center  bg-[#4636F5]">
            <div className="flex text-sm font-semibold hover:cursor-pointer my-auto">
              <div>
                I want to
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="text-black max-md:mx-[10%] md:mx-[20%] pt-8 text-lg font-semibold font-Bitter">
          Recent Transactions
        </div>
        <div className="space-y-1">
          <div className=" md:mx-[20%] max-md:mx-[10%] pt-2 text-xs font-bold text-gray-400  font-Bitter">
            2020-08-07
          </div>
          <div className="text-black font-bold font-bitter pb-3 text-xs md:mx-[20%] max-md:mx-[10%]">
            Withdrawal transfer to bank-XXX11
          </div>
          <hr className="md:w-[60%]  md:mx-[20%] max-md:mx-[10%]" />
        </div>
        <div className="space-y-1">
          <div className=" md:mx-[20%] max-md:mx-[10%] pt-1 text-xs font-bold text-gray-400  font-Bitter">
            2020-08-07
          </div>
          <div className="text-black font-bold font-bitter pb-3 text-xs md:mx-[20%] max-md:mx-[10%]">
            Withdrawal transfer to bank-XXX11
          </div>
          <hr className="md:w-[60%]  md:mx-[20%] max-md:mx-[10%]" />
        </div>
        <div className="space-y-1">
          <div className="md:mx-[20%] max-md:mx-[10%] pt-1 text-xs font-bold text-gray-400  font-Bitter">
            2020-08-07
          </div>
          <div className="text-black font-bold font-bitter pb-3 text-xs md:mx-[20%] max-md:mx-[10%]">
            Withdrawal transfer to bank-XXX11
          </div>
          <hr className="md:w-[60%]  md:mx-[20%] max-md:mx-[10%]" />
        </div>

        {/* <div className="w-[60%] h-[1%] bg-black text-black"> .</div> */}
      </div>
    </div>
  );
}

export default Rightcomponent;
