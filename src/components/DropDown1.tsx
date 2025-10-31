import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

interface DropDownProps {
  topic: string;
}

export default function DropDown({ topic } : DropDownProps) {
      const [show, setShow] = useState(false);
    return(
        <div className="flex flex-col w-full gap-4 px-6">
          <div
            className=" w-full bg-gray-200 text-lg rounded-lg border border-purple-900 flex flex-row items-center justify-between text-purple-900 px-4 py-4"
            onClick={() => setShow(!show)}
          >
            <p>{topic}</p>
            <RiArrowDownWideFill />
          </div>
          <div className={show ? "flex flex-col px-8 text-gray-600 py-4 gap-4 shadow-lg rounded-lg" : "hidden"}>
            <p> Software and apps</p>
            <p> Software and apps</p>
            <p> Software and apps</p>
            <p> Software and apps</p>
          </div>
        </div>
    )
}
