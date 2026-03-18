import { useEffect, useState } from 'react'

export const SuccessStories = ({ stories }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [stories.length])

  const story = stories[index]

  return (
    <section className="py-24 bg-slate-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-16">
        Student Success Stories
      </h2>

      <div className="relative w-[70%] bg-white rounded-3xl border border-red-200 p-12 shadow-lg transition-all duration-500">
        {/* Quote icon */}
        <div className="text-6xl text-slate-200 mb-4">“</div>

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          SkillOps helped me transition into cloud engineering with hands-on
          projects and mentorship. The structured learning and industry exposure
          prepared me for real-world roles.
        </p>

        <div className="flex items-center gap-4">
          <img
            src={story.img}
            alt="student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold text-red-500">
              {story.name || 'Student Name'}
            </p>
            <p className="text-sm text-slate-500">
              {story.role || 'Cloud Engineer'}
            </p>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="flex gap-3 mt-8">
        {stories.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-red-500' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}