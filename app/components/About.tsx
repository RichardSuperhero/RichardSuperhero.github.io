'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#1a2329] to-[#4d5a68]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div 
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image 
              src="https://i.imghippo.com/files/gxI9567SYo.jpg"
              alt="Richard van der Merwe"
              width={300}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              unoptimized
              priority
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-3/4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <br></br><br></br>
            <p className="text-lg mb-6 text-white">
              Great content doesn't just inform—it influences.  With a strong background in tech copywriting and content 
              production, I specialise in creating compelling narratives that bridge complex technological 
              concepts with business strategies — and resonate with both experts and everyday readers.
            </p>
            <p className="text-lg mb-6 text-white">
              With a background in thought leadership and content development, I've contributed to publications that explore pressing 
              industry trends, from economic insights to advancements in technology. My process is grounded in research, collaboration, 
              and an ability to translate intricate subjects into meaningful, actionable material.
            </p>
            <p className="text-lg mb-6 text-white">
              Whether shaping long-form reports or quick-turn editorial pieces, I focus on producing work that is precise, engaging, 
              and aligned with strategic goals. Content, at its best, is a medium for clarity and connection. That is the standard 
              I bring to every project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
