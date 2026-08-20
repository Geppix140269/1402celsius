import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Logo + Description */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <div className="flex items-baseline gap-1">
                <span className="font-cormorant text-4xl font-semibold text-cream">1402</span>
                <span className="font-jost text-base tracking-[0.2em] text-cream font-medium">CELSIUS</span>
              </div>
              <span className="font-jost text-[0.5rem] tracking-[0.3em] text-gold uppercase">
                Empowering Connections
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              A dynamic international procurement and sales company connecting global markets with high-quality
              products and services across telecommunications, agriculture, and sustainable industries.
            </p>
          </div>

          {/* Middle: UK Office */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">UK Office</h3>
            <p className="text-sm text-white/80 leading-loose font-light">
              1402 Celsius Ltd<br />
              20-22 Wenlock Road<br />
              London, N1 7GU<br />
              United Kingdom
            </p>
            <p className="text-sm text-white/60 mt-4 leading-loose font-light">
              Reg. No: 12475013<br />
              VAT: GB 343 1702 32<br />
              Phone: +44 208 123 1402
            </p>
          </div>

          {/* Right: Bulgaria Office + Email */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">Bulgaria Office</h3>
            <p className="text-sm text-white/80 leading-loose font-light">
              1402 Celsius Ltd<br />
              1A Aton Street, Building 6<br />
              Plovdiv, 4002<br />
              Bulgaria
            </p>
            <p className="text-sm text-white/60 mt-4 leading-loose font-light">
              Reg. No: 207314767<br />
              VAT: BG 207314767<br />
              Phone: +44 208 123 1402
            </p>
            <p className="text-sm text-gold mt-4">
              <a href="mailto:info@1402celsius.com" className="hover:text-white transition-colors">
                info@1402celsius.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/60">
              © 2025 1402 Celsius Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/60">ITC Accredited Member</span>
              <span className="text-xs text-white/60">Capitalimprese®</span>
              <span className="text-xs text-white/60">BCAI Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
