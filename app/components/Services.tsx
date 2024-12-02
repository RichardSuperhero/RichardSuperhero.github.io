'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Content Strategy",
      description: "Strategic content planning and development for B2B tech companies"
    },
    {
      title: "Technical Writing",
      description: "Complex tech concepts simplified for business audiences"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites with Next.js, React, and TypeScript"
    },
    {
      title: "Digital PR",
      description: "Tech-focused media relations and thought leadership"
    },
    {
      title: "SEO Content",
      description: "Data-driven content optimized for search visibility"
    },
    {
      title: "Brand Journalism",
      description: "Compelling tech industry stories and case studies"
    },
    {
      title: "Research & Analysis",
      description: "Tech market research and data interpretation"
    },
    {
      title: "Content Marketing",
      description: "B2B tech content that drives engagement and leads"
    }
  ]

  return (
    <section id="services" className="py-20 bg-[#212a32]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#a14d7c] to-[#d16b85] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
