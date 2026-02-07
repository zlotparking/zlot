'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  MapPin,
  Star,
  SlidersHorizontal,
  ArrowUpRight,
  Clock,
  X,
  ChevronDown,
  Info,
  Filter as FilterIcon,
} from 'lucide-react'

type ParkingSpace = {
  id: string
  title: string
  address: string
  pricePerHour: number
  rating: number
  distance?: string
  image: string
  available: boolean
}

const MOCK_SPACES: ParkingSpace[] = [
  {
    id: '1',
    title: 'Phoenix Marketcity Mall',
    address: 'Whitefield Main Rd, Bengaluru',
    pricePerHour: 60,
    rating: 4.8,
    distance: '0.8 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Indiranagar 100ft Rd',
    address: 'Near Toit, Indiranagar, Bengaluru',
    pricePerHour: 120,
    rating: 4.9,
    distance: '1.2 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Koramangala 80ft Spot',
    address: '4th Block, Koramangala, Bengaluru',
    pricePerHour: 70,
    rating: 4.7,
    distance: '2.5 km',
    available: false,
    image:
      'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Manyata Tech Park Area',
    address: 'Thanisandra Main Rd, Bengaluru',
    pricePerHour: 40,
    rating: 5.0,
    distance: '0.5 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1594913785162-e6785b493bd2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'MG Road Metro Spot',
    address: 'Brigade Road, Bengaluru',
    pricePerHour: 95,
    rating: 4.2,
    distance: '1.8 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'HSR Layout Sector 2',
    address: '27th Main Rd, HSR, Bengaluru',
    pricePerHour: 50,
    rating: 4.6,
    distance: '3.0 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1545179605-1296651bc9b4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Brigade Gateway',
    address: 'Rajajinagar, Bengaluru',
    pricePerHour: 80,
    rating: 4.5,
    distance: '4.2 km',
    available: false,
    image:
      'https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'UB City Premium',
    address: 'Vittal Mallya Rd, Bengaluru',
    pricePerHour: 150,
    rating: 5.0,
    distance: '1.5 km',
    available: true,
    image:
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=400&auto=format&fit=crop',
  },
]

export default function FindParkingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [maxPrice, setMaxPrice] = useState(150)
  const [minRating, setMinRating] = useState(0)
  const [maxDistance, setMaxDistance] = useState(5)
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [sortBy, setSortBy] = useState('nearest')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const parseDistanceValue = (distStr?: string): number => {
    if (!distStr) return 0
    return parseFloat(distStr.split(' ')[0])
  }

  const filteredSpaces = useMemo(() => {
    return MOCK_SPACES.filter((space) => {
      const matchesSearch =
        space.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        space.address.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPrice = space.pricePerHour <= maxPrice
      const matchesRating = space.rating >= minRating
      const matchesDistance = parseDistanceValue(space.distance) <= maxDistance
      const matchesAvailability = onlyAvailable ? space.available : true

      return (
        matchesSearch &&
        matchesPrice &&
        matchesRating &&
        matchesDistance &&
        matchesAvailability
      )
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerHour - b.pricePerHour
      if (sortBy === 'price-high') return b.pricePerHour - a.pricePerHour
      if (sortBy === 'rating') return b.rating - a.rating
      return parseDistanceValue(a.distance) - parseDistanceValue(b.distance)
    })
  }, [searchTerm, maxPrice, minRating, maxDistance, onlyAvailable, sortBy])

  const resetFilters = () => {
    setSearchTerm('')
    setMaxPrice(150)
    setMinRating(0)
    setMaxDistance(5)
    setOnlyAvailable(false)
    setSortBy('nearest')
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search Header */}
      <section className="bg-zlot-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zlot-yellow/5 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Namma Parking. <span className="text-zlot-yellow">Simplified.</span>
              </h1>
              <p className="text-slate-400 text-lg font-medium">
                Find premium parking nodes across Bengaluru Central and beyond.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-zlot-yellow transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Indiranagar, MG Road, Whitefield..."
                className="block w-full pl-16 pr-4 py-7 bg-white rounded-[2.5rem] text-xl font-medium focus:outline-none focus:ring-4 focus:ring-zlot-yellow/20 shadow-2xl transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-3 bottom-3 flex space-x-2">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="p-3 text-slate-400 hover:text-zlot-dark transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button className="bg-zlot-yellow text-zlot-dark px-10 rounded-[1.8rem] font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {['Koramangala', 'Whitefield', 'Indiranagar', 'HSR Layout'].map(
                (area, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(area)}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-black uppercase tracking-wider hover:bg-zlot-yellow hover:text-zlot-dark hover:border-zlot-yellow transition-all"
                  >
                    {area}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-80 space-y-8 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zlot-dark">
                  Advanced Filter
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Availability Toggle */}
              <div className="mb-10 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-zlot-dark uppercase tracking-widest">
                      Available Now
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">
                      IoT Hub Status
                    </p>
                  </div>
                  <button
                    onClick={() => setOnlyAvailable(!onlyAvailable)}
                    className={`w-12 h-6 rounded-full transition-all relative ${
                      onlyAvailable ? 'bg-zlot-dark' : 'bg-slate-200'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                        onlyAvailable ? 'left-7 bg-zlot-yellow' : 'left-1'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    Max Price (₹/hr)
                  </label>
                  <span className="text-sm font-black text-zlot-dark">
                    ₹{maxPrice}
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="200"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-zlot-dark"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[9px] font-bold text-slate-300">₹40</span>
                  <span className="text-[9px] font-bold text-slate-300">₹200</span>
                </div>
              </div>

              {/* Distance Filter */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    Max Distance
                  </label>
                  <span className="text-sm font-black text-zlot-dark">
                    {maxDistance} km
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-zlot-dark"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[9px] font-bold text-slate-300">
                    0.5 km
                  </span>
                  <span className="text-[9px] font-bold text-slate-300">
                    10 km
                  </span>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4">
                  Minimum Rating
                </label>
                <div className="flex justify-between">
                  {[3, 3.5, 4, 4.5, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                        minRating === r
                          ? 'bg-zlot-dark text-zlot-yellow'
                          : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-zlot-dark rounded-4xl p-8 text-white">
              <div className="bg-zlot-yellow/10 p-4 rounded-2xl inline-block mb-6">
                <Info className="w-5 h-5 text-zlot-yellow" />
              </div>
              <h4 className="text-lg font-black mb-2 tracking-tight">
                Need help finding a spot?
              </h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                Contact our Bengaluru Hub for corporate block bookings and long-term
                stays.
              </p>
              <button className="text-zlot-yellow text-[10px] font-black uppercase tracking-widest hover:underline transition-all">
                Connect with Hub
              </button>
            </div>
          </aside>

          {/* Main Results Content */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-slate-100 p-3 rounded-2xl">
                  <MapPin className="w-5 h-5 text-zlot-dark" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Found in Network
                  </p>
                  <p className="text-sm font-black text-zlot-dark">
                    {filteredSpaces.length} nodes available
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all"
                >
                  <FilterIcon className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                <div className="relative group">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-slate-50 px-8 py-3 pr-12 rounded-xl text-[11px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-zlot-dark transition-all cursor-pointer"
                  >
                    <option value="nearest">Nearest First</option>
                    <option value="price-low">Lowest Price</option>
                    <option value="price-high">Highest Price</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filteredSpaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSpaces.map((space) => (
                  <div key={space.id} className="card-premium overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <div className="bg-zlot-dark/90 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-zlot-yellow text-xs shadow-lg">
                          ₹{space.pricePerHour}/hr
                        </div>
                        {space.available && (
                          <div className="bg-green-500 px-4 py-2 rounded-2xl font-black text-white text-[10px] uppercase tracking-widest shadow-lg flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse mr-2"></div>
                            Live Now
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-zlot-dark text-[10px] font-black uppercase tracking-widest">
                        <Clock className="w-3 h-3 mr-1.5" />
                        <span>Namma Node</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-zlot-dark tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                            {space.title}
                          </h3>
                          <p className="text-slate-400 text-xs font-bold flex items-center uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-300" />
                            {space.address}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 bg-zlot-yellow/10 px-3 py-1.5 rounded-xl">
                          <Star className="w-3.5 h-3.5 text-zlot-yellow fill-zlot-yellow" />
                          <span className="font-black text-xs text-zlot-dark">
                            {space.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">
                          {space.distance} from you
                        </span>
                        <Link
                          href="/login"
                          className="inline-flex items-center bg-zlot-dark text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-zlot-yellow hover:text-zlot-dark transition-all"
                        >
                          Book Now <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] p-24 text-center border border-slate-100 shadow-sm animate-in fade-in zoom-in duration-500">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <SlidersHorizontal className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-2xl font-black text-zlot-dark mb-4">
                  No nodes match your filters.
                </h3>
                <p className="text-slate-400 text-sm font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                  Try adjusting your price range or distance to find more parking
                  spots in your area.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-zlot-dark text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-zlot-yellow hover:text-zlot-dark transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
