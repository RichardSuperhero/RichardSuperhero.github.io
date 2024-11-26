'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "Content Development", "Data Analysis", "Editing", "Research & Data Interpretation",
    "SEO Optimization", "Project Management", "Coding", "Website Development"
  ]

  return (
    <section id="skills" className="py-20 bg-[#212a32]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#a14d7c] to-[#d16b85] rounded-lg p-4 text-white text-center shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="text-shadow-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

