// Icons
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import RegionButton from "./RegionButton";

// Regions
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Dropdown = (props) => {
  const [toggleDropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown(!toggleDropdown);
  };

  return (
    <div className="relative w-[250px]">
      <button
        onClick={toggleDropdownHandler}
        className="flex items-center justify-between w-full bg-white p-4 drop-shadow rounded cursor-pointer"
      >
        <span>Filter by Region</span>
        <span>{toggleDropdown ? <GoChevronUp /> : <GoChevronDown />}</span>
      </button>
      {toggleDropdown && (
        <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow rounded overflow-hidden">
          {regions.map((region) => {
            return (
              <RegionButton
                region={region}
                getCountryByRegion={props.getCountryByRegion}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
