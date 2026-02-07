'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ParkingSquare,
  User as UserIcon,
  Mail,
  Lock,
  ArrowRight,
  Home,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
      },
    })

    setIsLoading(false)

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    if (data.session?.user) {
      router.push('/dashboard')
      return
    }

    setSuccess('Signup successful. Please check your email to confirm your account.')
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Professional Branding */}
      <div className="hidden md:flex md:w-1/2 bg-[#0F172A] relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop"
            alt="ZLOT Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-12 max-w-lg">
          <Link href="/" className="inline-flex items-center space-x-2 mb-12 group">
            <div className="bg-zlot-yellow p-2 rounded-lg">
              <ParkingSquare className="text-zlot-dark w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">ZLOT</span>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
            One account for all your parking needs.
          </h1>

          <div className="space-y-6">
            {[
              'Find and book verified spots instantly.',
              'List your driveway and start earning.',
              'Secure IoT access across Bengaluru.',
              'Manage everything from one dashboard.',
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-zlot-yellow shrink-0" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Clean Unified Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
        <Link
          href="/"
          className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors flex items-center space-x-2 font-bold text-xs uppercase tracking-widest"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
              Get started with ZLOT
            </h2>
            <p className="text-slate-500 font-medium">
              Create your account to book parking or list your own space.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3 text-red-600 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start space-x-3 text-emerald-700 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-bold">{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-slate-300 group-focus-within:text-zlot-dark transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Arjun Sharma"
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 focus:border-slate-300 outline-none transition-all font-medium"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-300 group-focus-within:text-zlot-dark transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 focus:border-slate-300 outline-none transition-all font-medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-zlot-dark transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="Create a strong password"
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 focus:border-slate-300 outline-none transition-all font-medium"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed text-center">
                By creating an account, you agree to our{' '}
                <a href="#" className="font-bold text-slate-900 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-bold text-slate-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center transition-all shadow-lg ${
                isLoading
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-zlot-dark text-white hover:bg-black active:scale-[0.98]'
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
              ) : (
                <>
                  Create Free Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Already have an account?{' '}
              <Link href="/login" className="text-slate-900 font-bold hover:underline ml-1">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
