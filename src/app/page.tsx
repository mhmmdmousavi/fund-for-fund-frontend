import Image from "next/image";

export default function Home() {
  return (
    <div className="min-md:px-20 items-center flex flex-col ">
      <div className="flex flex-col gap-6 px-6 md:max-w-[50%]">
        <h2 className="text-purple-900 text-4xl font-semibold mt-30 opacity-80">
          create your profile and take the first step towards new opprotunerties
        </h2>
        <p className="font-semibold text-gray-500 text-xl opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque odit eius quis quidem est! Adipisci magni eligendi sunt, consequatur quia repellendus dolores, sequi illo dolor enim praesentium alias atque.
        </p>
      </div>
      <div className="flex flex-col border-2 rounded-xl mx-6 mt-30 p-4 items-center gap-6 border-purple-800 md:max-w-[50%]">
        <Image src="/Bag.svg" alt="logo" width={80} height={80} />
        <div className="flex flex-col items-center gap-4 ">
          <h3 className="text-3xl font-semibold text-purple-900">Brand or Organization</h3>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima labore rem eum vero similique, culpa corporis itaque modi assumenda voluptatem, vel neque iure ex quae iste quo enim reiciendis.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <button className="bg-purple-900 text-white w-full h-10 rounded-lg"> start </button>
          <button className="text-purple-900"> learn more </button>
        </div>
      </div>
    </div>
  );
}
