'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#212a32] to-[#3b4957]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          <motion.div 
            className="bg-[#54626f] rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#c55e73]">Bachelor of Arts: English and Psychology</h3>
            <p className="text-[#b66091] mb-2">University of Witwatersrand, 2016</p>
            <p className="text-white">NRF Honours bursary awarded</p>
          </motion.div>
          <motion.div 
            className="bg-[#54626f] rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#c55e73]">IEB Matric Certificate</h3>
            <p className="text-[#b66091] mb-2">Helpmekaar College, Braamfontein, Johannesburg, 2010</p>
            <p className="text-white">Five distinctions</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

