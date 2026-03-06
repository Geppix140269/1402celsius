import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="bg-slate py-16">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
          Newsletter
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
          Stay in the <em className="italic text-gold">Loop</em>
        </h2>
        <p className="text-white/60 text-sm mb-8 leading-relaxed font-light max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest insights on international trade, procurement strategies, and market trends.
        </p>

        {submitted ? (
          <div className="text-gold text-sm font-medium animate-fade-in">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-cream text-navy px-10 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
