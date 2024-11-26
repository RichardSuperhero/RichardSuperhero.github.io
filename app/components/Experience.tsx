'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate: Thought Leadership Specialist",
      company: "PwC South Africa – Internal Firm Services",
      period: "[Start Date] – [End Date]",
      description: "Led development, writing, and editing of flagship reports. Collaborated with cross-functional teams, conducted research, and ensured high-quality publications.",
      responsibilities: [
        "Authored major publications like Africa Cloud Business Survey and African Business Agenda",
        "Edited Monthly Economic Outlook and other notable reports",
        "Collaborated with design teams for visual elements",
        "Optimized publications for online platforms and SEO"
      ]
    },
    {
      title: "Tech Copywriter",
      company: "Clockwork",
      period: "November 2020 - 2022",
      description: "Lead tech writer at an award-winning PR and marketing agency, writing for industry leaders across diverse sectors.",
      responsibilities: [
        "Wrote thought leadership, feature articles, press releases, and social posts",
        "Covered topics including software development, cloud services, cybersecurity, and more",
        "Conducted research and interviews with business leaders",
        "Elected as president of Growth Lab, a career development program"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#3b4957] to-[#54626f]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-[#212a32] rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#c55e73]">{exp.title}</h3>
              <h4 className="text-xl mb-2 text-[#b66091]">{exp.company}</h4>
              <p className="text-[#54626f] mb-4">{exp.period}</p>
              <p className="mb-4 text-white">{exp.description}</p>
              <ul className="list-disc list-inside text-white">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="mb-2">{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

