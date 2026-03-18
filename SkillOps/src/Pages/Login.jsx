import { useForm } from 'react-hook-form'
import { AuthLayout } from '../Components/AuthLayout'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <AuthLayout
      title="Welcome Back to SkillOps"
      subtitle="Log in to continue your learning journey."
    >
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}