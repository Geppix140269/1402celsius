function Posts() {
  const posts = [
    {
      title: 'Italy Surpasses Japan in Global Export Rankings',
      date: 'March 2025',
      category: 'Market Insights',
      excerpt: 'Italy has achieved a historic milestone by overtaking Japan in global export rankings, demonstrating the resilience and competitiveness of Italian manufacturing and trade networks.',
      readTime: '4 min read'
    },
    {
      title: '1402 Celsius Ltd: Expanding Global Partnerships with All Medical S.p.A.',
      date: 'February 2025',
      category: 'Company News',
      excerpt: 'We are proud to announce our strategic partnership with All Medical S.p.A., a leading Italian medical device manufacturer, to facilitate their expansion into Eastern European markets.',
      readTime: '5 min read'
    },
    {
      title: 'Revolutionising Outdoor Energy: SRW\'s Photovoltaic Fabric Technology',
      date: 'January 2025',
      category: 'Innovation',
      excerpt: 'Discover how SRW\'s innovative photovoltaic fabric technology is transforming outdoor energy solutions, offering sustainable power generation for camping, emergency response, and remote operations.',
      readTime: '6 min read'
    },
    {
      title: 'Optimising Global Supply Chains: Strategies for Efficiency and Resilience',
      date: 'December 2024',
      category: 'Supply Chain',
      excerpt: 'In an increasingly complex global landscape, businesses must optimize their supply chains for both efficiency and resilience. Learn key strategies for building robust international supply networks.',
      readTime: '7 min read'
    },
    {
      title: 'Harnessing Strategic Partnerships for International Business Growth',
      date: 'November 2024',
      category: 'Business Strategy',
      excerpt: 'Strategic partnerships are the cornerstone of successful international expansion. Explore how to identify, establish, and nurture partnerships that drive sustainable growth across borders.',
      readTime: '5 min read'
    },
    {
      title: 'Agricultural Market Trends: Opportunities in Eastern European Markets',
      date: 'October 2024',
      category: 'Agriculture',
      excerpt: 'Eastern European agricultural markets are experiencing unprecedented growth. Discover emerging opportunities in grain exports, sustainable farming, and agricultural technology adoption.',
      readTime: '8 min read'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-slate-dark to-slate py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Insights & Updates
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white leading-tight mb-6">
            Latest <em className="italic text-gold">Posts</em>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Stay informed with our latest insights on international trade, market trends,
            procurement strategies, and industry developments.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-block bg-gold/10 text-gold px-4 py-1 text-xs tracking-wider uppercase font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-cormorant text-2xl font-medium text-navy mb-4 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-light mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <button className="text-xs tracking-widest uppercase font-medium text-gold hover:text-navy transition-colors flex items-center gap-2">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="border border-navy text-navy px-12 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Posts
