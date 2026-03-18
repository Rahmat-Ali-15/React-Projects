import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 flex justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-cyan-50 to-slate-100"></div>

      <div className="absolute -top-32 -left-32 w-125 h-125 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute top-40 -right-32 w-100 h-100 bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-1/2 w-75 h-75 bg-purple-200 opacity-20 blur-3xl rounded-full"></div>

      {/* Glow Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>npm 

      {/* Content */}
      <div className="relative z-10 w-[85%] grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">
            Launch Your Career in
            <span className="text-blue-600"> Cloud & DevOps</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            SkillOps provides industry-focused training designed to prepare
            students for real-world IT roles with hands-on projects and
            placement assistance.
          </p>

          <div className="flex gap-5">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="border border-slate-400 px-8 py-3 rounded-md hover:bg-slate-100 transition"
            >
              Talk to Counselor
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-6 text-slate-700">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-sm">Students Trained</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">120+</h3>
              <p className="text-sm">Hiring Partners</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">6 LPA</h3>
              <p className="text-sm">Average Package</p>
            </div>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/web-development.svg"
            alt="cloud devops training"
            className="w-112.5"
          />
        </div>
      </div>
    </section>
  )
}