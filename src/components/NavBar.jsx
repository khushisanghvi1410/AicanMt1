import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/all";
import DropDown from "./DropDown";
import Button from "./Button";

function NavBar() {
  const items = [
    { Platform: ["Khushi", "2", "3"] },
    { Industries: ["1", "2", "3"] },
    { Applications: ["1", "2", "3"] },
    { Resources: ["1"] },
  ];
  //for DropDownItems
  const [isOpen, setOpen] = useState(false);
  // State for controlling the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-40   flex items-center">
      <div className="flex justify-between p-5 w-full  items-center">
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <div className=" xsm:hidden">
              <AiOutlineMenu></AiOutlineMenu>
            </div>
          </button>
          <img className="md:ml-10 lg:mr-16 hidden xxsm:flex " src="./src/assets/aicanlogo.svg" />
          <div className="hidden xsm:flex ">
            {items.map((item, i) => {
              return <DropDown key={i} items={item} />;
            })}
          </div>
        </div>
        <div className="flex justify-around items-center">
          <span className=" " style={{ fontSize: "24px" }}>
            <AiOutlineSearch className="stroke-[15px] " />
          </span>
          <Button
            success
            rounded
            className="h-10 md:mr-10 xsm:p-2 sm:p-3 lg:p-7 md:text-lg sm:text-xs "
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;