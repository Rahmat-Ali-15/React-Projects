import data from "../db.json"

import { PiTimer } from "react-icons/pi";
import { IoMdLaptop } from "react-icons/io";

export const Home = () => {
    return (
        <>
            {/* Popular & Trending Courses */}
            <div className="flex items-center gap-8 flex-col py-10">
                <div className="text-center font-semibold">
                    <h1 className="text-4xl">Popular & Trending Courses</h1>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {
                        data && data.Course.map((el,i) => (
                            <div key={i} className="flex flex-col items-center gap-10 w-90 h-112.5 border p-4 rounded-4xl">
                            <div className="h-[50%]">
                                <img src={el.img} alt={el.course_name} className="w-full h-50 rounded-4xl" />
                            </div>
                                <div className="flex flex-col gap-5 justify-between pb-10 items-center w-full h-[50%]">
                                    <div>
                                        <p className="text-2xl text-center font-bold">{el.course_name}</p>
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
                                        <p>Batch Starts on <span className="font-bold">{el.batch_start}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}