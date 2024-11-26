'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#212a32]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.div 
          className="max-w-md mx-auto bg-gradient-to-br from-[#a14d7c] to-[#d16b85] rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-center mb-8 text-white">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
          <div className="space-y-4 text-white">
            <p className="flex items-center justify-center">
              <span className="font-semibold mr-2">Email:</span> richardvdmerwe@gmail.com
            </p>
            <p className="flex items-center justify-center">
              <span className="font-semibold mr-2">Phone:</span> 071 208 6373
            </p>
            <p className="flex items-center justify-center">
              <span className="font-semibold mr-2">Location:</span> Cape Town, South Africa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

