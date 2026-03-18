import { Link } from 'react-router-dom'

export const CTASection = () => {
  return (
    <section className="py-24 flex justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-12 flex flex-col items-center gap-6 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-800">
          Ready to Start Your IT Career?
        </h2>

        <p className="text-slate-600">
          Join SkillOps and build industry-ready skills in Cloud, Networking,
          and DevOps.
        </p>

        <Link
          to="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}