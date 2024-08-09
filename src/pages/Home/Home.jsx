import React from "react";
import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div class="relative w-full my-7 mx-auto h-full">
      <img
        src={assets.img6}
        alt="Image"
        class="w-full min-w-80 h-full object-cover"
      />
      <div class="absolute ml-6 p-4 inset-0  min-w-80 w-1/2 mt-12 text-white">
        <p class="text-5xl font-medium opacity-90  ">
          It is our collective and individual responsibility to protect and
          nurture the global family, to support its weaker members, and to
          preserve and tend to the environment in which we all live
        </p>
        <button className=" py-2 font-medium outline-none  px-8  opacity-80 text-xl rounded-2xl mt-8  bg-white text-gray-500 shadow-md hover:bg-green-500 hover:text-white">
          Donate
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
