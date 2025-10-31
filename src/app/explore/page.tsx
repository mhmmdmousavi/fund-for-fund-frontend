"use client";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import DropDown from "@/components/DropDown1";
import DropDown2 from "@/components/DropDown2";


export default function ExplorePage() {

  return (
    <div>
      <div className=" px-8 py-20 rounded-2xl mx-4 bg-linear-to-r from-purple-900 to-blue-900 ">
        <div className="flex flex-row justify-between bg-white items-center  rounded-xl px-6 py-2 text-lg">
          <button className="pr-4">
            <IoSearchOutline className="text-2xl text-purple-800" />
          </button>
          <input
            className="text-2xl"
            type="text"
            placeholder="search brand, tag, or ..."
          />
          <button className="text-2xl">
            <RxCross2 />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-10">
        <p className="text-2xl font-medium text-purple-900  ">
          Categories and Subcategories
        </p>
        <DropDown topic="Technology and Innovation"/>
        <DropDown topic="Creative art and Media"/>
        <DropDown topic="Bussiness and Intrepreunership"/>
        <DropDown topic="games and entertainments"/>
        <DropDown topic="Social causes and Comunity"/>
      </div>
        <DropDown2/>
    </div>
  );
}
