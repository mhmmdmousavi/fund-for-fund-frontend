"use client";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function NavMain() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-4 mx-4 items-center min-md:px-20 relative pb-10">
        <div className="content-">
          <Image src="/Logo.png" alt="logo" width={80} height={80} />
        </div>
        <div className="flex flex-row gap-6 items-center md:hidden">
          <IoSearchOutline className="text-4xl text-purple-800" />
          <IoMdMenu
            onClick={() => setShow(!show)}
            className={show?`hidden`:`text-5xl text-main` }
          />
          <IoMdClose onClick={() => setShow(!show)} className={show? `text-5xl text-purple-900`:`hidden` }/>

        </div>
        <ul className="flex flex-row gap-6 text-2xl max-md:hidden">
          <li>Home</li>
          <li>Explore</li>
          <li>About Us</li>
          <li>Help & Support</li>
        </ul>
        <div className="flex flex-row items-center max-md:hidden">
          <div className="flex flex-row items-center shadow-xl shadow-gray-200 rounded-xl px-6 py-2 text-lg">
            <button className="pr-4">
              <IoSearchOutline className="text-xl text-purple-800" />
            </button>
            <input
              className=""
              type="text"
              placeholder="search brand, tag, or ..."
            />
          </div>
          <div className="mx-4">
            <button className="rounded-full bg-purple-200 p-3 text-xl border-2 border-purple-300">
              <FiLogIn />
            </button>
          </div>
        </div>
      </div>
      <hr className={show ? `text-gray-400` : `hidden`}/>
      {show&&
      <div className="fixed inset-0 z-50 bg-white  h-8/12 w-full mt-20 pt-10 rounded-b-3xl">
        <ul className="flex flex-col gap-10 text-2xl px-10 pb-10 font-medium text-purple-900">
          <li>Home</li>
          <li>Explore</li>
          <li>About Us</li>
          <li>Help & Support</li>
        </ul>
        <hr className="w-full text-gray-400"/>
        <div className="w-full gap-6 flex flex-col mt-10">
          <button className="bg-purple-200 mx-10 border border-purple-600 py-2 text-lg text-purple-600 rounded-lg">Login/Signup</button>
          <button className="bg-purple-900 mx-10  py-2 text-lg text-purple-100 rounded-lg">Start</button>
        </div>
      </div>}
    </div>
      
  );
}
