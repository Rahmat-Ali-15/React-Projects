import data from "../db.json";

import { PiTimer } from "react-icons/pi";
import { IoMdLaptop } from "react-icons/io";

export const Home = () => {
  return (
    <>
      {/* Popular & Trending Courses */}
      <div className="flex items-center gap-8 flex-col py-10 bg-linear-to-b from-[#FEFAFB] via-[#FBCCD6] to-[#FEFAFB]">
        <div className="text-center font-semibold">
          <h1 className="text-4xl">Popular & Trending Courses</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {data &&
            data.Course.map((el, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-10 w-95 cursor-pointer h-112.5 p-4 rounded-4xl bg-white overflow-hidden z-1 before:content-[''] before:absolute before:inset-0 before:bg-red-600 hover:text-white before:scale-0 before:origin-bottom-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-100"
              >
                <div className="h-[50%]">
                  <img
                    src={el.img}
                    alt={el.course_name}
                    className="w-full h-50 rounded-4xl"
                  />
                </div>
                <div className="flex flex-col gap-5 justify-between pb-10 items-center w-full h-[50%]">
                  <div>
                    <p className="text-2xl text-center font-bold">
                      {el.course_name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <PiTimer />
                        <p>{el.course_duration}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoMdLaptop />
                        <p>{el.course_mode}</p>
                      </div>
                    </div>
                    <p>
                      Batch Starts on{" "}
                      <span className="font-bold">{el.batch_start}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Be the part */}
      <div className="flex flex-col gap-10 py-10 bg-linear-to-b from-[#FBCCD6] via-[#FCE1E6] to-[#FEFAFB]">
        <div>
            <h1 className="text-center text-4xl font-bold">Be a part of our thriving community</h1>
        </div>
        <div className="flex gap-10 items-center overflow-x-scroll">
            {
                data.Student_Story.map((el,i) => (
                    <div key={i} className="flex w-100 shrink-0">
                        <img src={el.img} alt="" className="w-full h-50" />
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
};
