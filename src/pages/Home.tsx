import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

function Home() {
  const partnerServices = [
    {
      title: 'Market Entry & Expansion Support',
      subtitle: 'Unlock New Markets with Confidence',
      description: 'Navigate international markets with expert guidance on regulatory compliance, cultural nuances, and strategic partnerships.'
    },
    {
      title: 'Procurement & Supply Chain Solutions',
      subtitle: 'Reliable Procurement, Seamless Supply Chains',
      description: 'Optimize your supply chain with our comprehensive procurement services, ensuring quality, efficiency, and cost-effectiveness.'
    },
    {
      title: 'Cross-Cultural Communication & Negotiation',
      subtitle: 'Bridge the Language Gap',
      description: 'Facilitate smooth international transactions with our multilingual team and cultural expertise in over 15 countries.'
    },
    {
      title: 'Customer Connection & Sales Growth',
      subtitle: 'Find the Right Buyers, Boost Your Sales',
      description: 'Connect with verified buyers worldwide and expand your market reach through our extensive global network.'
    },
    {
      title: 'Supplier Relationship Management',
      subtitle: 'Secure Quality, Consistency, and Reliability',
      description: 'Build lasting relationships with vetted suppliers who meet your quality standards and delivery requirements.'
    },
    {
      title: 'Trade Compliance & Documentation Support',
      subtitle: 'Simplify International Trade',
      description: 'Navigate complex trade regulations and documentation requirements with our comprehensive compliance support.'
    }
  ]

  const coreServices = [
    {
      number: '01',
      name: 'Brokering Services',
      subtitle: 'Connect, Trade, and Profit',
      description: 'Facilitating seamless connections between suppliers and buyers across international markets, ensuring mutually beneficial partnerships.'
    },
    {
      number: '02',
      name: 'Sourcing Expertise',
      subtitle: 'Reliable Suppliers, Quality Products',
      description: 'Identifying and vetting high-quality suppliers who meet your specific requirements for product quality, reliability, and competitive pricing.'
    },
    {
      number: '03',
      name: 'International Expansion',
      subtitle: 'Grow Beyond Borders',
      description: 'Strategic market entry support for businesses looking to expand internationally, from market research to operational setup.'
    },
    {
      number: '04',
      name: 'Cross-Cultural Communication',
      subtitle: 'Bridge the Gap',
      description: 'Professional multilingual support and cultural consultation to ensure clear communication and successful international negotiations.'
    },
    {
      number: '05',
      name: 'Agricultural Financing & Investment Advisory',
      subtitle: 'Secure Funding, Grow Your Business',
      description: 'Expert guidance on securing financing and investment for agricultural projects, from small farms to large-scale operations.'
    },
    {
      number: '06',
      name: 'Sustainability & Environmental Consultancy',
      subtitle: 'Build a Sustainable Future',
      description: 'Comprehensive sustainability consulting to help businesses implement eco-friendly practices and meet environmental standards.'
    },
    {
      number: '07',
      name: 'Market Intelligence & Research',
      subtitle: 'Stay Informed, Stay Ahead',
      description: 'In-depth market analysis and competitive intelligence to inform strategic decisions and identify growth opportunities.'
    },
    {
      number: '08',
      name: 'Supply Chain & Logistics Management',
      subtitle: 'Optimise Your Operations',
      description: 'End-to-end supply chain optimization and logistics coordination to ensure efficient, cost-effective product delivery.'
    },
    {
      number: '09',
      name: 'Agricultural Project Management',
      subtitle: 'Turn Ideas into Reality',
      description: 'Professional project management services for agricultural ventures, from planning and financing to execution and monitoring.'
    }
  ]

  const whyChoose = [
    {
      title: 'Tailored Solutions',
      description: 'Every business is unique. We develop customized strategies that align with your specific goals, challenges, and market conditions.'
    },
    {
      title: 'Global Expertise',
      description: 'With over 30 years of international business experience and operations across Europe and beyond, we understand global markets.'
    },
    {
      title: 'Reliable Partnership',
      description: 'We build lasting relationships based on trust, transparency, and mutual success. Your growth is our commitment.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-slate-dark to-slate min-h-[600px] flex items-center overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 relative z-10">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-6">
            Welcome to 1402 Celsius
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            Your Partner in <em className="italic text-gold">International</em><br />
            Procurement and Sales
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed font-light">
            Connecting suppliers with buyers globally. We empower businesses to expand internationally
            through strategic partnerships, expert procurement, and seamless cross-border trade solutions.
          </p>
          <a
            href="#services"
            className="inline-block bg-cream text-navy px-10 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white transition-all"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Partner with US Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              What We Offer
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Partner with <em className="italic text-gold">US</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 p-8 hover:shadow-lg transition-all"
              >
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <h3 className="text-sm tracking-wider uppercase text-navy font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-gold text-sm mb-4 font-medium">{service.subtitle}</p>
                <p className="text-gray-600 text-sm leading-loose font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-gradient-to-br from-slate-dark to-navy py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Our Expertise
            </p>
            <h2 className="font-cormorant text-5xl font-light text-white leading-tight">
              Core <em className="italic text-gold">Services</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all"
              >
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <div className="font-cormorant text-5xl text-white/10 mb-5">{service.number}</div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-cream font-medium mb-3">
                  {service.name}
                </h3>
                <p className="text-gold text-sm mb-4">{service.subtitle}</p>
                <p className="text-white/60 text-sm leading-loose font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              The 1402 Celsius Difference
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Why Choose <em className="italic text-gold">Us</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-cormorant text-3xl font-medium text-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-loose font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-navy text-cream px-12 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-slate transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default Home
