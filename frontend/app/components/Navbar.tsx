'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ParkingSquare, User as UserIcon } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)

    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      listener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Find Parking', path: '/find-parking' },
    { name: 'List Space', path: '/list-space' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-\[100] transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-zlot-dark p-2 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
            <ParkingSquare className="text-zlot-yellow w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tight text-zlot-dark">ZLOT</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:text-zlot-dark ${
                  pathname === link.path ? 'text-zlot-dark' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 pl-4 border-l border-slate-100">
            {user ? (
              <div className="flex items-center space-x-6">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 text-[13px] font-bold text-zlot-dark hover:opacity-70 transition-opacity"
                >
                  <UserIcon className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-[13px] font-bold text-red-500 hover:text-red-600 uppercase tracking-wider"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/signup"
                className="btn-primary px-8 py-2.5 rounded-full text-[13px] uppercase tracking-wider"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zlot-dark p-2"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-\[64px] bg-white z-\[90] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-2xl font-black ${
                  pathname === link.path ? 'text-zlot-yellow' : 'text-zlot-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-100" />
            {user ? (
              <>
                <Link href="/dashboard" className="text-2xl font-black text-zlot-dark">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-2xl font-black text-red-500 text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/signup"
                className="btn-primary text-center py-4 rounded-2xl text-lg"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
