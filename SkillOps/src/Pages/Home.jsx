import data from '../db.json'

import { Hero } from '../Components/Hero'
import { Card } from '../Components/Card'
import { PlacementStats } from '../Components/PlacementStats'
import { SuccessStories } from '../Components/SuccessStories'
import { CTASection } from '../Components/CTASection'

export const Home = () => {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* COURSES */}
      <section className="py-24 flex flex-col items-center gap-12 bg-linear-to-b from-slate-50 via-blue-50 to-slate-50">
        <h2 className="text-4xl font-bold text-slate-800">
          Popular & Trending Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%]">
          {data.Course.map((course, i) => (
            <Card key={i} course={course} />
          ))}
        </div>
      </section>

      {/* PLACEMENT */}
      <PlacementStats />

      {/* STUDENT STORIES */}
      <SuccessStories stories={data.Student_Story} />

      {/* CTA */}
      <CTASection />
    </>
  )
}