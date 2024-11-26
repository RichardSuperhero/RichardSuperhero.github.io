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
            className="w-full md:w-1/3"
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
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-white">
              As a Senior Associate: Thought Leadership Specialist for Internal Firm Services at PwC South Africa, 
              I worked closely with cross-functional teams across PwC's lines of service to lead in the development, 
              writing, and editing of all the firm's flagship reports and other content such as the African Business Agenda, 
              Economic Outlook, Building Public Trust, and more.
            </p>
            <p className="text-lg mb-6 text-white">
              My role allowed me to combine strategic thinking with creative execution, delivering impactful, 
              high-quality publications that supported PwC's brand and thought leadership goals. With a strong 
              background in tech copywriting and content production, I specialize in creating compelling narratives 
              that bridge complex technological concepts with business strategies.
            </p>
            <p className="text-lg text-white">
              Based in Cape Town, South Africa, I bring a unique perspective to thought leadership, 
              blending local insights with global trends to create content that resonates with diverse audiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
