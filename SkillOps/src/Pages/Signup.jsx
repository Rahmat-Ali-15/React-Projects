import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../Components/AuthLayout'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <AuthLayout
      title="Start Your Cloud & DevOps Journey"
      subtitle="Join SkillOps and build industry-ready IT skills."
    >
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: 6,
              })}
              className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>
        
        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-1">
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}