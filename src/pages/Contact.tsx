import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    areaOfInterest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        areaOfInterest: '',
        message: ''
      })
      setSubmitted(false)
    }, 5000)
  }

  const services = [
    'Brokering Services',
    'Sourcing Expertise',
    'International Expansion',
    'Cross-Cultural Communication',
    'Agricultural Financing & Investment Advisory',
    'Sustainability & Environmental Consultancy',
    'Market Intelligence & Research',
    'Supply Chain & Logistics Management',
    'Agricultural Project Management'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-slate-dark to-slate py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Get In Touch
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white leading-tight mb-6">
            Book an Appointment with One of<br />Our <em className="italic text-gold">Consultants</em>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how we can help your business expand internationally and achieve your procurement goals.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          {submitted ? (
            <div className="bg-cream border-l-4 border-gold p-12 text-center">
              <h2 className="font-cormorant text-4xl font-light text-navy mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your message has been received. One of our consultants will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm"
                />
              </div>

              {/* Area of Interest Dropdown */}
              <div>
                <label htmlFor="areaOfInterest" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                  Area of Interest *
                </label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm bg-white"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-wider uppercase font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm resize-none"
                  placeholder="Tell us about your business needs..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-navy text-cream px-12 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-slate transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Office Addresses */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Visit Us
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Our <em className="italic text-gold">Offices</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* UK Office */}
            <div className="bg-white p-10 shadow-sm">
              <h3 className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-6">
                United Kingdom
              </h3>
              <p className="text-lg text-navy font-medium mb-2">
                1402 Celsius Ltd
              </p>
              <p className="text-sm text-gray-600 leading-loose mb-6">
                20-22 Wenlock Road<br />
                London, N1 7GU<br />
                United Kingdom
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Reg. No:</span> 12475013</p>
                <p><span className="font-medium">VAT:</span> GB 343 1702 32</p>
                <p><span className="font-medium">Phone:</span> +44 208 123 1402</p>
              </div>
            </div>

            {/* Bulgaria Office */}
            <div className="bg-white p-10 shadow-sm">
              <h3 className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-6">
                Bulgaria
              </h3>
              <p className="text-lg text-navy font-medium mb-2">
                1402 Celsius Ltd
              </p>
              <p className="text-sm text-gray-600 leading-loose mb-6">
                1A Aton Street, Building 6<br />
                Plovdiv, 4002<br />
                Bulgaria
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Reg. No:</span> 207314767</p>
                <p><span className="font-medium">VAT:</span> BG 207314767</p>
                <p><span className="font-medium">Phone:</span> +44 208 123 1402</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-2">
              Or email us directly at
            </p>
            <a
              href="mailto:info@1402celsius.com"
              className="text-2xl font-cormorant text-gold hover:text-navy transition-colors"
            >
              info@1402celsius.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
