import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-cream h-[100px] flex items-center px-8 lg:px-16 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          {/* Logo Image (if available) */}
          <img
            src="/images/logo.png"
            alt="1402 Celsius"
            className="h-16 w-auto object-contain"
            onError={(e) => {
              // Hide image if not found
              e.currentTarget.style.display = 'none'
            }}
          />
          {/* Text Logo */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-cormorant text-4xl font-semibold text-navy">1402</span>
              <span className="font-jost text-base tracking-[0.2em] text-navy font-medium">CELSIUS</span>
            </div>
            <span className="font-jost text-[0.5rem] tracking-[0.3em] text-navy/60 uppercase">
              Empowering Connections
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-jost text-xs tracking-[0.15em] uppercase font-medium text-navy hover:text-gold transition-colors"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="font-jost text-xs tracking-[0.15em] uppercase font-medium text-navy hover:text-gold transition-colors flex items-center gap-1"
            >
              About
              <span className="text-[10px]">▼</span>
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-200 py-2 min-w-[200px] z-50 rounded">
                <Link
                  to="/about#overview"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="block w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  Overview
                </Link>
                <Link
                  to="/about#capabilities"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="block w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  Capabilities
                </Link>
                <Link
                  to="/about#faqs"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="block w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  FAQs
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/posts"
            className="font-jost text-xs tracking-[0.15em] uppercase font-medium text-navy hover:text-gold transition-colors"
          >
            Posts
          </Link>

          <Link
            to="/contact"
            className="bg-navy text-cream px-10 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-slate transition-all"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
