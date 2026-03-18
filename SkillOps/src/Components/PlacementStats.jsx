export const PlacementStats = () => {
  const stats = [
    { label: 'Students Trained', value: '500+' },
    { label: 'Hiring Partners', value: '120+' },
    { label: 'Average Package', value: '6 LPA' },
    { label: 'Placement Support', value: '100%' },
  ]

  return (
    <section className="py-20 bg-slate-900 text-white flex flex-col items-center gap-12">
      <h2 className="text-4xl font-bold text-center">
        Placement-Focused Training
      </h2>

      <p className="text-slate-300 text-center max-w-xl">
        Our programs are designed with industry needs in mind, ensuring that
        students graduate with real-world skills that companies hire for.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-[80%] text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-blue-400">{stat.value}</h3>
            <p className="text-slate-300 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Company logos placeholder */}
      <div className="flex gap-10 flex-wrap justify-center pt-6 opacity-70">
        <span>AWS</span>
        <span>Infosys</span>
        <span>TCS</span>
        <span>Accenture</span>
        <span>Capgemini</span>
      </div>
    </section>
  )
}