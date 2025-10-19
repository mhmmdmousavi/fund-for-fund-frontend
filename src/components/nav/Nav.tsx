import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between mt-4 mx-4 items-center min-md:px-20">
      <div className="content-">
        <Image src="/Logo.png" alt="logo" width={80} height={80} />
      </div>
      <div className="flex flex-row gap-6 items-center md:hidden">
        <IoSearchOutline className="text-4xl text-purple-800" />
        <IoMdMenu className="text-5xl text-purple-800 " />
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
            <button className="rounded-full bg-purple-200 p-3 text-xl border-2 border-purple-300"><FiLogIn /></button>
        </div>
      </div>
    </div>
  );
}
