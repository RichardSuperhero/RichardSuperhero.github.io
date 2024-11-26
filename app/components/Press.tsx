'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Press() {
  const articles = [
    {
      title: "The Future of Cloud Computing in Africa",
      publication: "Tech Africa",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Navigating Economic Challenges: Insights for African Businesses",
      publication: "Business Daily",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Sustainable Practices: A New Era for Corporate Responsibility",
      publication: "Green Business Journal",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    }
  ]

  return (
    <section id="press" className="py-20 bg-[#3b4957]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-[#212a32] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={article.image} alt={article.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c55e73]">{article.title}</h3>
                <p className="text-[#b66091] mb-4">{article.publication}</p>
                <Link href={article.link} className="text-white hover:text-[#c55e73] transition duration-300">
                  Read Article
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

