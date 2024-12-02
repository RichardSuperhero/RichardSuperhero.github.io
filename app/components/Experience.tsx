'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      title: "Senior Associate: Thought Leadership Specialist",
      company: "PwC South Africa – Internal Firm Services",
      period: "[Start Date] – [End Date]",
      description: `As a Senior Associate: Thought Leadership Specialist for Internal Firm Services at PwC South Africa, 
        I worked closely with cross-functional teams across PwC's lines of service to lead in the development, 
        writing, and editing of all the firm's flagship reports and other content such as the African Business 
        Agenda, Economic Outlook, Building Public Trust, and more. 
        
        My role allowed me to combine strategic thinking with creative execution, delivering impactful, 
        high-quality publications that supported PwC's brand and thought leadership goals.`,
      responsibilities: [
        "Authored major publications like Africa Cloud Business Survey and African Business Agenda",
        "Edited Monthly Economic Outlook and other notable reports",
        "Collaborated with design teams for visual elements",
        "Optimized publications for online platforms and SEO"
      ],
      image: "/images/placeholder.jpg"
    },
    {
      title: "Freelance Writer",
      company: "Self-Employed",
      period: "April 2023 – December 2023",
      description: `During this time as a freelance writer, I completed various internal financial 
        advice playbooks for Liberty (helping their financial advisors understand their investor market), thought 
        leadership articles for private equity firms, and a range of other content for financial institutions 
        and investment platforms in South Africa, such as Stanlib and Inn8. 
        
        I was also the lead press release writer for Inn8's Investment Summit.`,
      responsibilities: [
        "Created financial advice playbooks for Liberty",
        "Wrote thought leadership articles for private equity firms",
        "Produced content for Stanlib and Inn8",
        "Led press release writing for Inn8's Investment Summit"
      ],
      image: "/images/placeholder.jpg"
    },
    {
      title: "Content Producer",
      company: "ClickGUARD",
      period: "February 2023 – April 2023",
      description: `As the Content Producer at <a href="https://www.clickguard.com/blog" target="_blank" rel="noopener noreferrer" className="text-[#c55e73] hover:text-[#d47288]">ClickGUARD</a>, I was responsible for blog posts, 
        social media copy, mailers, and the content strategy for the company as a whole. My blog posts consistently 
        achieved top 3 Google search rankings in their respective categories. Some examples include:

        • <a href="https://www.clickguard.com/what-is-click-fraud" target="_blank" rel="noopener noreferrer" className="text-[#c55e73] hover:text-[#d47288]">What is Click Fraud?</a> (Lead magnet landing page rework)
        • <a href="https://www.clickguard.com/blog/marketers-handbook-to-google-search-ads/" target="_blank" rel="noopener noreferrer" className="text-[#c55e73] hover:text-[#d47288]">The Marketer's Handbook to Google Search Ads</a>
        • <a href="https://www.clickguard.com/blog/facebook-ads-for-your-business/" target="_blank" rel="noopener noreferrer" className="text-[#c55e73] hover:text-[#d47288]">Top 5 Benefits of Facebook Ads for your business</a>
        • <a href="https://www.clickguard.com/blog/how-to-setup-google-shopping-ads/" target="_blank" rel="noopener noreferrer" className="text-[#c55e73] hover:text-[#d47288]">Mastering Shopping Ads: A Complete Guide for Marketers</a>`,
      image: "/images/placeholder.jpg"
    },
    {
      title: "Tech Copywriter",
      company: "Clockwork",
      period: "November 2020 - 2022",
      description: `I was the lead tech writer at an award-winning PR and marketing agency in South Africa for 3 years. 
        I was responsible for thought leadership, feature articles, press releases, and social posts for the African 
        and EMEA regions of Red Hat, SEACOM, LG, Exxaro, Acer, Tarsus, CM.com, Cisco, Meta, and Axis Communications. 
        For long-form articles, I conducted my own research or hosted interviews with the relevant business leaders.

        In addition to my writing responsibilities, I was elected as the president of Growth Lab, a career development 
        program initiated by our CEO. During these 3 months, I worked closely with our CEO to develop a workplace 
        survey for a 1 hour talk session. Nic and I also held a talk about Women in Leadership featuring Karen Nadasen, 
        the CEO of PayU South Africa, to provide our younger staff with valuable insights on the common challenges 
        faced by women in their professional careers.
        
        I continued writing for Clockwork as a freelancer after leaving the company in 2022.`,
      responsibilities: [
        "Led tech writing for major technology companies in Africa and EMEA",
        "Created thought leadership content and feature articles",
        "Conducted research and interviews with business leaders",
        "Served as Growth Lab president, organizing leadership initiatives"
      ],
      image: "/images/placeholder.jpg"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#3b4957] to-[#54626f]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-[#2a3640] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between">
                <div className="flex-grow pr-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 px-6 py-2 bg-[#c55e73] text-white rounded-full hover:bg-[#d47288] transition-colors duration-300 text-sm"
                  >
                    {expandedItems[index] ? 'Show Less' : 'Show More'}
                  </button>
                </div>
                <div className="w-32 h-32 flex-shrink-0">
                  <img src={exp.image} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
              
              {expandedItems[index] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <p className="text-md text-gray-400 mb-2">{exp.period}</p>
                  <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n\s*•/g, '<br>•') }} />
                  {exp.responsibilities && (
                    <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
