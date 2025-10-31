import Image from "next/image";
import Link from "next/link";

export default function SignupSentPage() {
    return(
        <div className=" flex flex-col gap-20">
            <div className="flex flex-col items-center gap-20 w-full">
                <Image src="/element1.svg" alt="logo" width={400} height={400} />
                <p className="text-4xl font-medium text-purple-900 text-center">Your link is being sent. <br className="md:hidden" />Hang tight!</p>
            </div>
            <div className="flex flex-col items-center w-full gap-10">
                <p className="text-gray-500">we`ve sent the link to <span className="text-black">shahbazi.design@gmail.com</span> </p>
                <Link className="text-purple-900 text-2xl font-medium " href="#">Go to your Gmail</Link>
            </div>
            <div>
                <p className="text-center text-gray-500 mb-10">
                    You will redirected to from the link in the email, you can safetly close the tab. 
                </p>
            </div>
        </div>
    )
}