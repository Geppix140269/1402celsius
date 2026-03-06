import { useState } from 'react'

function About() {
  const [openFaqGroup, setOpenFaqGroup] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const credentials = [
    {
      title: 'International Trade Council',
      subtitle: 'Accredited Member',
      details: 'Verification: 66035033242968\nExpiry: 22.08.2025'
    },
    {
      title: 'Capitalimprese®',
      subtitle: 'Member Organization',
      details: 'Associazione Italiana Industriali\nPiccole e Medie Imprese'
    },
    {
      title: 'Business Council for Artificial Intelligence',
      subtitle: 'Member',
      details: 'Advancing AI adoption in\ninternational business'
    }
  ]

  const approach = [
    {
      title: 'Vision It',
      description: 'We begin by understanding your goals, challenges, and market landscape. Strategic planning forms the foundation of every successful international venture.'
    },
    {
      title: 'Build It',
      description: 'Implementation with precision and agility. We execute strategies, forge partnerships, and establish the infrastructure needed for sustainable growth.'
    },
    {
      title: 'Sustain It',
      description: 'Long-term success through continuous optimization, relationship management, and adaptive strategies that respond to evolving market conditions.'
    }
  ]

  const projects = [
    {
      number: 1,
      title: 'Expansion of 1402 Celsius',
      description: 'Established dual operations in UK and Bulgaria, specializing in agricultural commodities with focus on EU market entry for Ukrainian products. Built strategic partnerships across Eastern European supply chains.'
    },
    {
      number: 2,
      title: 'Market Entry — Bluemar Ferries SL',
      role: 'Chief Operating Officer',
      description: 'Led market entry strategy and operational framework for ferry operations, establishing routes and partnerships across Mediterranean markets.'
    },
    {
      number: 3,
      title: 'Business Model Reshaping — Sitges Media Factory SL',
      description: 'Restructured business model and go-to-market strategy, achieving 30% revenue increase within 9 months through operational optimization and strategic partnerships.'
    },
    {
      number: 4,
      title: 'Telecommunications Leadership — CCC Alpha',
      description: 'Scaled operations from €70M to €120M in annual revenue while improving EBITDA from breakeven to €5M through strategic market expansion and operational excellence.'
    },
    {
      number: 5,
      title: 'Strategic Partnerships — Dynegy Europe Communication',
      description: 'Developed and executed fibre optics expansion strategy across Italy and Germany, establishing key partnerships with infrastructure providers and municipal authorities.'
    }
  ]

  const faqGroups = [
    {
      id: 'company',
      title: 'Company Overview',
      faqs: [
        {
          id: 'what-is',
          question: 'What is 1402 Celsius?',
          answer: '1402 Celsius is an international procurement and sales company connecting global markets with high-quality products and services. We specialize in facilitating international trade across telecommunications, agriculture, and sustainable industries.'
        },
        {
          id: 'where',
          question: 'Where are you located?',
          answer: 'We operate from two strategic locations: our UK headquarters in London and our European operations center in Plovdiv, Bulgaria. This dual-location presence enables us to serve clients across European and international markets effectively.'
        },
        {
          id: 'industries',
          question: 'What industries do you serve?',
          answer: 'We serve diverse industries including telecommunications, agriculture, sustainable energy, and general international trade. Our expertise spans from agricultural commodities and financing to telecommunications infrastructure and environmental consultancy.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services and Offerings',
      faqs: [
        {
          id: 'main-services',
          question: 'What are your main services?',
          answer: 'Our core services include: Brokering Services, International Sourcing, Market Entry Support, Cross-Cultural Communication, Agricultural Financing & Investment Advisory, Sustainability Consultancy, Market Intelligence & Research, Supply Chain Management, and Agricultural Project Management.'
        },
        {
          id: 'help-expand',
          question: 'How can you help my business expand internationally?',
          answer: 'We provide end-to-end international expansion support including market research, regulatory compliance guidance, supplier/buyer network access, cultural and linguistic support, logistics coordination, and ongoing market intelligence. Our 30+ years of experience ensures smooth market entry and sustainable growth.'
        },
        {
          id: 'procurement',
          question: 'Do you provide procurement services?',
          answer: 'Yes, we offer comprehensive procurement services including supplier identification and vetting, quality assurance, price negotiation, order management, and supply chain coordination. We work with verified suppliers across multiple continents to ensure quality, reliability, and competitive pricing.'
        }
      ]
    },
    {
      id: 'process',
      title: 'Trading and Procurement Process',
      faqs: [
        {
          id: 'get-started',
          question: 'How do I get started?',
          answer: 'Simply contact us through our website or email info@1402celsius.com. We\'ll schedule a consultation to understand your needs, challenges, and goals. From there, we\'ll develop a customized strategy and action plan tailored to your specific situation.'
        },
        {
          id: 'timeline',
          question: 'What is the typical timeline for a project?',
          answer: 'Project timelines vary depending on scope and complexity. Simple procurement projects may take 2-4 weeks, while comprehensive market entry strategies can span 3-6 months. We provide detailed timelines during the planning phase and maintain transparent communication throughout.'
        },
        {
          id: 'fees',
          question: 'How do your fees work?',
          answer: 'We offer flexible engagement models including project-based fees, commission structures for brokering services, and retainer arrangements for ongoing support. Pricing is always discussed transparently during initial consultations and customized to your needs and budget.'
        }
      ]
    },
    {
      id: 'international',
      title: 'International Operations',
      faqs: [
        {
          id: 'countries',
          question: 'Which countries do you work with?',
          answer: 'We have active operations and partnerships across Europe, with particular strength in UK, Bulgaria, Italy, Spain, Germany, and Eastern European markets. We also facilitate trade with Ukraine, Middle East, and other international markets. Our network continues to expand based on client needs.'
        },
        {
          id: 'languages',
          question: 'What languages does your team speak?',
          answer: 'Our multilingual team speaks English, Italian, Spanish, Bulgarian, Russian, and Ukrainian. This linguistic diversity enables clear communication and cultural understanding essential for successful international business relationships.'
        },
        {
          id: 'compliance',
          question: 'How do you handle international compliance and regulations?',
          answer: 'We maintain up-to-date knowledge of international trade regulations, customs requirements, and industry-specific compliance standards. We work with legal and regulatory experts in each market to ensure all transactions meet local and international requirements.'
        }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability and Compliance',
      faqs: [
        {
          id: 'sustainability-commitment',
          question: 'What is your commitment to sustainability?',
          answer: 'Sustainability is integral to our business model. We offer dedicated sustainability and environmental consultancy services, prioritize partnerships with environmentally responsible suppliers, and promote sustainable practices across all our operations. We actively support clients in meeting ESG goals and environmental standards.'
        },
        {
          id: 'quality',
          question: 'How do you ensure supplier quality?',
          answer: 'We implement rigorous supplier vetting processes including background checks, quality audits, reference verification, and ongoing performance monitoring. We only partner with suppliers who meet our quality standards and demonstrate consistent reliability. Regular audits and feedback loops ensure continued excellence.'
        }
      ]
    }
  ]

  const toggleFaqGroup = (groupId: string) => {
    setOpenFaqGroup(openFaqGroup === groupId ? null : groupId)
  }

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  return (
    <div>
      {/* Bio Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="h-[500px] overflow-hidden">
              <img
                src="/images/giuseppe-funaro.jpg"
                alt="Giuseppe Funaro - Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio Text */}
            <div>
              <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
                Meet Our Founder
              </p>
              <h2 className="font-cormorant text-5xl font-light text-navy leading-tight mb-6">
                Giuseppe <em className="italic text-gold">Funaro</em>
              </h2>
              <p className="text-sm text-gray-600 leading-loose font-light mb-4">
                With over 30 years of experience in international business, trading, and procurement,
                Giuseppe Funaro brings unparalleled expertise to the global marketplace.
              </p>
              <p className="text-sm text-gray-600 leading-loose font-light mb-4">
                His distinguished career spans telecommunications, media, and agriculture sectors,
                where he has consistently delivered transformative results for organizations ranging
                from startups to multi-million euro enterprises.
              </p>
              <p className="text-sm text-gray-600 leading-loose font-light">
                Giuseppe's vision for 1402 Celsius is rooted in his belief that successful international
                trade requires more than transactions—it demands trusted partnerships, cultural understanding,
                and unwavering commitment to mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Who We Are
          </p>
          <h2 className="font-cormorant text-5xl font-light text-navy leading-tight mb-8">
            A Dynamic <em className="italic text-gold">International</em> Partner
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
            1402 Celsius is a dynamic international procurement and sales company dedicated to
            connecting global markets with high-quality products and services.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Operating from strategic locations in the UK and Bulgaria, we serve as the bridge
            between suppliers and buyers worldwide, facilitating seamless cross-border trade
            and fostering lasting business relationships.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section id="capabilities" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Accreditations
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Our <em className="italic text-gold">Credentials</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="bg-cream-dark p-10 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-cormorant text-2xl font-medium text-navy mb-2">
                  {credential.title}
                </h3>
                <p className="text-gold text-sm font-medium mb-4">{credential.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-light whitespace-pre-line">
                  {credential.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gradient-to-br from-slate to-slate-dark py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Methodology
            </p>
            <h2 className="font-cormorant text-5xl font-light text-white leading-tight">
              Our <em className="italic text-gold">Approach</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-10 text-center hover:bg-white/10 transition-all"
              >
                <h3 className="font-cormorant text-3xl font-medium text-cream mb-4">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-loose font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Track Record
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Key <em className="italic text-gold">Projects</em>
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.number}
                className="border-l-4 border-gold pl-8 py-6 hover:bg-cream/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="font-cormorant text-4xl text-gold font-medium">
                    {String(project.number).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-navy mb-2">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="text-gold text-sm mb-3">{project.role}</p>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Questions & Answers
            </p>
            <h2 className="font-cormorant text-5xl font-light text-navy leading-tight">
              Frequently Asked <em className="italic text-gold">Questions</em>
            </h2>
          </div>

          <div className="space-y-6">
            {faqGroups.map((group) => (
              <div key={group.id} className="bg-white border border-gray-200">
                {/* Group Header */}
                <button
                  onClick={() => toggleFaqGroup(group.id)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-cream/30 transition-colors"
                >
                  <h3 className="font-cormorant text-2xl font-medium text-navy">
                    {group.title}
                  </h3>
                  <span className="text-gold text-2xl">
                    {openFaqGroup === group.id ? '−' : '+'}
                  </span>
                </button>

                {/* FAQs in Group */}
                {openFaqGroup === group.id && (
                  <div className="border-t border-gray-200">
                    {group.faqs.map((faq) => (
                      <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left px-8 py-5 flex items-center justify-between hover:bg-cream/30 transition-colors"
                        >
                          <span className="text-sm font-medium text-navy pr-4">
                            {faq.question}
                          </span>
                          <span className="text-gold flex-shrink-0">
                            {openFaq === faq.id ? '−' : '+'}
                          </span>
                        </button>
                        {openFaq === faq.id && (
                          <div className="px-8 pb-5">
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
