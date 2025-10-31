import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
    return(
        <div className="max-w-500 place-self-center">
            <div className="w-full flex flex-col items-center px-10 gap-10 my-20">
               
                <p className="text-4xl font-medium text-purple-900">FUND FOR FOUND</p>
                <Image src="/Logo.png" alt="logo" width={120} height={120} />  
                <p className="text-2xl">Create an account or sign in to start creating</p> 
                <button className="bg-gray-200 w-full text-gray-400 rounded-lg border-2 border-gray-300 py-2">continue with google</button>
             </div>
             <div className="flex flex-row items-center mx-10">
                <div className="w-full h-0.5 bg-gray-300"></div>
                <p className="px-4 text-gray-400"> or </p>
                <div className="w-full h-0.5 bg-gray-300"></div>
             </div>
             <form action="" className="flex flex-col items-center mx-10 my-20">
                <span className="self-start px-1">Mobile number or email address</span>
                <input type="text" placeholder="" className="border rounded-md border-purple-900 w-full py-2 mb-6"/>
                <span className="self-start px-1">Password</span>
                <input type="text" placeholder="" className="border rounded-md border-purple-900 w-full py-2"/>
                <span className="self-start text-purple-900">Forgot your password?</span>
                <button className="w-full bg-purple-900 text-gray-100 py-2 rounded-md mt-4 text-lg" type="submit">Continue</button>
             </form>
             <div className="flex flex-col items-center gap-4 mb-15">
                <p className="text-xl text-gray-400">Dont have one?</p>
                <Link className="text-xl font-medium text-purple-900" href="#">Create an acconut</Link>
             </div>
        </div>
    )
}