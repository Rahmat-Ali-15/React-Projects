export const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-slate-800 text-white p-16 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-slate-300 max-w-md">{subtitle}</p>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  )
}