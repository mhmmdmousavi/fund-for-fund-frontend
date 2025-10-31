import Image from "next/image";
import Link from "next/link";

export default function Pass() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <Image src="/password.svg" alt="logo" width={80} height={80} />
        <p className="text-3xl text-purple-900">Trouble with loggin in?</p>
        <p className="text-xl px-10">
          Enter your email or phone number and we will send you a link to get
          backinto your account.
        </p>
      </div>
      <form action="" className="flex flex-col items-center mx-10 my-20">
        <span className="self-start px-1">Mobile number or email address</span>
        <input
          type="text"
          placeholder=" yourname@yahoo.com"
          className="border rounded-md border-purple-900 w-full py-2 mb-6"
        />
        <button
          className="w-full bg-purple-900 text-gray-100 py-2 rounded-md mt-4 text-lg"
          type="submit"
        >
          Continue
        </button>
      </form>
      <div className="flex flex-row items-center mx-10">
        <div className="w-full h-0.5 bg-gray-300"></div>
        <p className="px-4 text-gray-400"> or </p>
        <div className="w-full h-0.5 bg-gray-300"></div>
      </div>
      <div className="flex flex-col items-center gap-4 my-15">
        <Link className="text-xl text-purple-900" href="#">Create an account</Link>
        <Link className="" href="#">Back to login</Link>
      </div>
    </div>
  );
}
