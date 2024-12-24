import React from "react";
import dp from "../assets/myDp2.jpg";

function Section2() {
  return (
    <div className="second w-full border-[1px] border-x-gray-600 border-y-black">
      <div className="top flex p-3 sticky top-0 bg-black backdrop-blur opacity-80">
        <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
        <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">
          For You sanjay suthar
        </div>
        <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">
          Following
        </div>
        <div className="settings mx-2">
          <span className="material-symbols-outlined"> settings </span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="whatishapp flex gap-4 my-3">
        <div className="img m-2 w-16">
          <img className="rounded-full" src={dp} alt="vercel" />
        </div>
        <div className="w-full">
          <input
            className="w-full h-7 my-2 text-xl bg-black outline-none text-white"
            type="text"
            placeholder="What is happening?!"
          />
          <div className="text-blue-400 flex  gap-1 w-full my-4">
            <span className="material-symbols-outlined"> globe_asia </span>
            <span className="font-bold">Everyone can reply</span>
          </div>
          <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
          <div className="flex justify-around">
            <div className="blueicons flex gap-2 text-blue-400 items-center">
              <span className="material-symbols-outlined cursor-pointer">
                image
              </span>
              <span className="material-symbols-outlined cursor-pointer">
                gif
              </span>
              <span className="material-symbols-outlined cursor-pointer">
                ballot
              </span>
              <span className="material-symbols-outlined cursor-pointer">
                sentiment_satisfied
              </span>
              <span className="material-symbols-outlined cursor-pointer">
                calendar_month
              </span>
              <span className="material-symbols-outlined cursor-pointer">
                pin_drop
              </span>
            </div>
            <div className="postbtn">
              <button className="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="posts">
        <div className="post border-[1px] border-y-gray-600 border-x-0">
          <div className="flex">
            <div className="image m-4">
              <img className="w-16" src="" alt="" />
            </div>
            <div className="content my-3">
              <span className="font-bold hover:underline cursor-pointer text-white">
                Elon Musk
              </span>
              <span className="text-gray-500">@ElonMusk · 6h </span>
              <div className="postimg m-2 ml-0">
                I spent $44 billion for this app and now Lizard boy just decided
                to hit copy and paste. It’s personal now. See you in the cage,
                Zuck.
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> repeat </span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> Favorite </span>{" "}
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> bar_chart </span>
                  1k
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="flex">
            <div className="image m-4">
              <img className="w-16 rounded-full" src={dp} alt="vercel" />
            </div>
            <div className="content my-3">
              <span className="font-bold hover:underline cursor-pointer text-white">
                sanjaysuthar472{" "}
              </span>
              <span className="text-gray-500">@sanjaysuthar472 · 6h </span>
              <div>Living legend</div>
              <div className="postimg m-4 ml-0">
                <img className="" src={dp} alt="vercel" />
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">
                    {" "}
                    chat_bubble{" "}
                  </span>
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> repeat </span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> Favorite </span>{" "}
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> bar_chart </span>
                  1k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="flex">
            <div className="image m-4">
              <img
                className="w-8"
                src="https://pbs.twimg.com/profile_images/1724504100136439808/J8k8HnSD_bigger.png"
                alt=""
              />
            </div>
            <div className="content my-3">
              <span className="font-bold hover:underline cursor-pointer text-white">
                non aesthetic things
              </span>
              <span className="text-gray-500">@sanjay · 6h </span>
              <div>This is amazing coding meme</div>
              <div className="postimg m-4 ml-0">
                <img
                  className="rounded-xl w-full"
                  src="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/works-doesnt-work.jpg"
                  alt=""
                />
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">
                    {" "}
                    chat_bubble{" "}
                  </span>
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> repeat </span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> Favorite </span>{" "}
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> bar_chart </span>
                  1k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="flex">
            <div className="image m-4">
              <img className="w-16 rounded-full" src={dp} alt="vercel" />
            </div>
            <div className="content my-3">
              <span className="font-bold hover:underline cursor-pointer text-white">
                non aesthetic things
              </span>
              <span className="text-gray-500">@PicturesFoIder · 6h </span>
              <div>legend</div>
              <div className="postimg m-4 ml-0">
                <img
                  className="rounded-xl"
                  src="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900"
                  alt=""
                />
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">
                    {" "}
                    chat_bubble{" "}
                  </span>
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> repeat </span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> Favorite </span>{" "}
                  1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined"> bar_chart </span>
                  1k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
