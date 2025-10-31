import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DropDown2() {
  const [showSort, setShowSort] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  return (
    <div>
      <div className="flex flex-row gap-4 px-6 w-full mt-10">
        <div
          onClick={() => setShowSort(!showSort)}
          className=" w-full flex flex-row items-center justify-between border text-xl font-medium text-purple-900 border-purple-900 rounded-lg px-4 py-2"
        >
          <p>Sort by</p>
          <IoIosArrowDown />
        </div>
        <div
          onClick={() => setShowCountry(!showCountry)}
          className="w-full flex flex-row items-center justify-between border text-xl font-medium text-purple-900 border-purple-900 rounded-lg px-4 py-2"
        >
          <p>Country</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
