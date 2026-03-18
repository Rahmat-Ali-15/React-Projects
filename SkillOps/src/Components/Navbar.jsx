import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const routes = [
    { path: '/', title: 'Home' },
    { path: '/courses', title: 'Courses' },
    { path: '/placement', title: 'Placement' },
    { path: '/contact', title: 'Contact' },
    { path: '/about', title: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-slate-800">
          <span className="text-blue-600">Skill</span>Ops
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          {routes.map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              className={({ isActive }) =>
                `relative pb-1 transition ${
                  isActive ? 'text-blue-600' : 'hover:text-blue-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {route.title}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-slate-700 hover:text-blue-600 transition font-medium"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </header>
  )
}