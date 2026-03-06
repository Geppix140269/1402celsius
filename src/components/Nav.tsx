import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const handleAboutClick = (hash: string) => {
    navigate(`/about${hash}`)
    setAboutDropdownOpen(false)
  }

  return (
    <nav className="sticky top-0 bg-cream h-[100px] flex items-center px-8 lg:px-16 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="font-cormorant text-4xl font-semibold text-navy">1402</span>
            <span className="font-jost text-base tracking-[0.2em] text-navy font-medium">CELSIUS</span>
          </div>
          <span className="font-jost text-[0.5rem] tracking-[0.3em] text-navy/60 uppercase">
            Empowering Connections
          </span>
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
            <Link
              to="/about"
              className="font-jost text-xs tracking-[0.15em] uppercase font-medium text-navy hover:text-gold transition-colors"
            >
              About
            </Link>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 py-2 min-w-[180px]">
                <button
                  onClick={() => handleAboutClick('#overview')}
                  className="w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  Overview
                </button>
                <button
                  onClick={() => handleAboutClick('#capabilities')}
                  className="w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  Capabilities
                </button>
                <button
                  onClick={() => handleAboutClick('#faqs')}
                  className="w-full text-left px-4 py-2 text-xs tracking-wider uppercase font-medium text-navy hover:bg-cream hover:text-gold transition-colors"
                >
                  FAQs
                </button>
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
