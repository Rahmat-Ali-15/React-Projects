import { PiTimer } from 'react-icons/pi'
import { IoMdLaptop } from 'react-icons/io'

export const Card = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Glow hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 via-transparent to-cyan-100/40"></div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.img}
          alt={course.course_name}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Trending
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-slate-800 text-center">
          {course.course_name}
        </h3>

        <div className="flex justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <PiTimer />
            {course.course_duration}
          </div>

          <div className="flex items-center gap-2">
            <IoMdLaptop />
            {course.course_mode}
          </div>
        </div>

        <p className="text-sm text-center text-slate-500">
          Batch Starts
          <span className="ml-1 font-semibold text-blue-600">
            {course.batch_start}
          </span>
        </p>

        {/* Button */}
        <button className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg font-medium hover:scale-[1.02] transition">
          View Details
        </button>
      </div>
    </div>
  )
}