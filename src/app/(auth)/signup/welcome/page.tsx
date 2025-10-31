import Image from "next/image";

export default function SentPage() {
    return(
        <div className=" flex flex-col gap-20">
            <div className="flex flex-col items-center gap-10 pt-10 w-full">
                <p className="text-5xl font-medium text-purple-900">Welcome to 3F</p>
                <Image src="/element2.svg" alt="logo" width={400} height={400} />
                <p className="text-4xl font-medium text-gray-500 text-center">Your journey begins here. <br className="md:hidden" />Ready to start?</p>
            </div>
            <div className="flex flex-row justify-center text-xl items-center w-full mb-20 gap-10">
                <button className="bg-purple-900 text-gray-100 px-8 py-4 rounded-lg">Go Home page</button>
                <button className="bg-purple-900 text-gray-100 px-8 py-4 rounded-lg">Go Home page</button>
            </div>

        </div>
    )
}