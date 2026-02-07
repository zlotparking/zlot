'use client'

import Link from 'next/link'
import {
  ParkingSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zlot-dark text-white pt-10 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-zlot-yellow p-1.5 rounded-lg">
                <ParkingSquare className="text-zlot-dark w-7 h-7" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                ZLOT
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              ZLOT is a Bengaluru-based smart parking platform. We help drivers
              find verified parking spots and enable property owners to monetize
              unused spaces using IoT-enabled access control.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-slate-800 rounded-full hover:bg-zlot-yellow hover:text-zlot-dark transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">
              Explore
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-zlot-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zlot-yellow transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/find-parking" className="hover:text-zlot-yellow transition-colors">
                  Find Parking
                </Link>
              </li>
              <li>
                <Link href="/list-space" className="hover:text-zlot-yellow transition-colors">
                  List Your Space
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">
              Support
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-zlot-yellow transition-colors">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zlot-yellow transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zlot-yellow transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">
              Bengaluru 
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-zlot-yellow shrink-0" />
                <span>Yelahanka, Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-zlot-yellow shrink-0" />
                <span>+91 80 0000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-zlot-yellow shrink-0" />
                <span>zlotparking@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ZLOT · Built in Bengaluru</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
