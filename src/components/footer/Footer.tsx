import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdTranslate } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex flex-col mt-30 bg-gray-200 rounded-t-3xl p-10 min-md:px-50 ">
      <div className=" flex flex-row justify-between md:gap-50 md:justify-start text-xl text-gray-600">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">ABOUT</p>
          <Link href="#">About US</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">RESOURCES</p>
          <Link href="#">Blog</Link>
          <Link href="#">How 3F works?</Link>
          <Link href="#">Help & Support</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">CONTRIBUTING</p>

          <Link href="#">Brand & Organizations</Link>
          <Link href="#">Pricing</Link>
        </div>
      </div>
      <hr className="max-md:hidden mt-20 text-purple-900"/>
      <div className="md:flex md:flex-row items-center md:mt-10 md:justify-between">
        <div className="flex flex-row justify-between mt-30 md:mt-0 items-center">
          <div className="bg-gray-50 items-center flex flex-row px-4 rounded-lg gap-2 text-xl py-2 text-purple-950">
            <MdTranslate />
            <span>English (100%)</span>
          </div>
          <div className="flex flex-row gap-4 text-xl md:hidden">
            <FaTwitter />
            <FaDiscord />
            <FaGithub />
            <FaLinkedin />
            <IoMdMail />
          </div>
        </div>
        <hr className="text-purple-900 my-10 w-full md:hidden" />
        <div className="flex flex-row justify-between md:gap-10 text-gray-600">
          <Link className="text-lg" href="#">
            Trust and Safety
          </Link>
          <Link className="text-lg" href="#">
            Terms of Use
          </Link>
          <Link className="text-lg" href="#">
            Privacy and Policy
          </Link>
        </div>
        <div className="flex flex-row gap-4 text-xl max-md:hidden">
            <FaTwitter />
            <FaDiscord />
            <FaGithub />
            <FaLinkedin />
            <IoMdMail />
          </div>
      </div>
    </div>
  );
}
