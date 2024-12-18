import React from "react";
import dp from "../assets/myDp2.jpg";

function Section3() {
  return (
    <div className="third w-full  hidden md:block">
      <div className="search m-3 ">
        <input
          type="text"
          className="w-1/2 rounded-full bg-[#16181c] text-white px-4 py-2"
          placeholder="Search"
        />
      </div>

      <div className="whats sticky top-0 m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-3">
        <h1 className="text-xl font-bold px-3">Whats Happening</h1>
        <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
          <p className="text-sm text-gray-200">Trending in India</p>
          <p className="font-bold">#Orry</p>
          <p className="text-sm text-gray-200">40.2k Posts</p>
        </div>

        <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
          <div className="text-sm text-gray-200">Trending in India</div>
          <div className="font-bold">#VIRAT-KOHLI</div>
          <div className="text-sm text-gray-200">30.2k Posts</div>
        </div>

        <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
          <div className="text-sm text-gray-200">Trending in India</div>
          <div className="font-bold">#SGV softtech</div>
          <div className="text-sm text-gray-200">13.9k Posts</div>
        </div>

        <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
          <div className="text-sm text-gray-200">Trending in India</div>
          <div className="font-bold">#sanjaysuthar472</div>
          <div className="text-sm text-gray-200">40.2k Posts</div>
        </div>
      </div>

      <div className="who sticky top-[20vh] m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-1">
        <h1 className="text-xl font-bold px-3">Who To Follow</h1>
        <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
          <div className="flex gap-3">
            <div className="p1">
              <img className="w-12 h-12" src={dp} alt="vercel" />
            </div>
            <div className="p2">
              <div>Vercel</div>
              <div className="text-gray-500">@vercel</div>
            </div>
          </div>
          <div className="p3">
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
        <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
          <div className="flex gap-3">
            <div className="p1">
              <img className="w-12 h-12" src={dp} alt="vercel" />
            </div>
            <div className="p2">
              <div>React</div>
              <div className="text-gray-500">@react</div>
            </div>
          </div>
          <div className="p3">
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
        <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
          <div className="flex gap-3">
            <div className="p1">
              <img className="w-12 h-12" src={dp} alt="vercel" />
            </div>
            <div className="p2">
              <div>Shad.js</div>
              <div className="text-gray-500">@shad</div>
            </div>
          </div>

          <div className="p3">
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
        <div className="text-blue-600 px-3 cursor-pointer hover:underline my-5">
          Show More
        </div>
      </div>

      <div className="terms sticky top-[75vh]  m-3 text-xs text-gray-500 px-3 w-1/2 py-5 space-y-10">
        <span className="hover:underline cursor-pointer mr-2">
          Terms of Service
        </span>
        <span className="hover:underline cursor-pointer mr-2">
          Privacy Policy
        </span>
        <span className="hover:underline cursor-pointer mr-2">
          Cookie Policy
        </span>
        <span className="hover:underline cursor-pointer mr-2">
          Accessibility
        </span>
        <span className="hover:underline cursor-pointer mr-2">Ads info</span>
        <span className="hover:underline cursor-pointer mr-2">More</span>
        <span className="hover:underline cursor-pointer mr-2">
          © 2024 X Corp.
        </span>
      </div>
    </div>
  );
}

export default Section3;
