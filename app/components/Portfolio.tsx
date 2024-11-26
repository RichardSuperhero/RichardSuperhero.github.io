'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)

  const portfolioItems = [
    // PwC Articles
    {
      title: "Africa Cloud Business Survey",
      description: "Comprehensive analysis of cloud adoption trends across Africa",
      image: "https://i.imghippo.com/files/fbs5066plc.jpg",
      link: "https://www.pwc.co.za/en/publications/africa-cloud-business-survey.html",
      company: "PwC"
    },
    {
      title: "Tech-Enabled Digital Transformation",
      description: "Insights on digital transformation strategies and implementation",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/publications/africa-business-agenda/tech-enabled-digital-transformation.html",
      company: "PwC"
    },
    {
      title: "Economic Outlook 2024",
      description: "Analysis of economic trends and forecasts for 2024",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.com/mt/en/publications/other/economic-outlook-2024.html",
      company: "PwC"
    },
    {
      title: "Building Public Trust Through Tax Reporting 2024",
      description: "Insights on transparent tax practices and reporting",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/press-room/building-public-trust-through-tax-reporting-2024.html",
      company: "PwC"
    },
    {
      title: "SA Major Banks Analysis",
      description: "Comprehensive analysis of South African banking sector",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/press-room/sa-major-banks-analysis-jan-june-2024.html",
      company: "PwC"
    },
    {
      title: "Africa NextGen Survey 2024",
      description: "Insights into next generation perspectives across Africa",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/press-room/africa-nextgen-survey-2024.html",
      company: "PwC"
    },
    {
      title: "Impact Assessment Guide",
      description: "Comprehensive guide to conducting impact assessments in business",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/blog/impact-assessments.html",
      company: "PwC"
    },
    {
      title: "Family Business Barometer 2023",
      description: "Insights into family-owned businesses and their dynamics",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/press-room/family-barometer-2023.html",
      company: "PwC"
    },
    {
      title: "Global Tax Policy Study",
      description: "Analysis of global tax policies and their implications",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pwc.co.za/en/press-room/pwc-global-tax-study.html",
      company: "PwC"
    },
    // CM.com Articles
    {
      title: "Customer Success: Jacaranda Health",
      description: "Case study on healthcare customer success implementation",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.cm.com/en-za/about-cm/our-customers/jacaranda-healthcare/",
      company: "CM.com"
    },
    {
      title: "Customer Convenience in Travel",
      description: "How the travel and leisure sector can leverage customer convenience",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/747/234238.html",
      company: "CM.com"
    },
    {
      title: "Customer Experience in Financial Services",
      description: "Today's challenges and opportunities in financial services CX",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/513/228273.html",
      company: "CM.com"
    },
    {
      title: "Customer Loyalty in Retail",
      description: "4 things customer service and retail brands get wrong about loyalty",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.smetechguru.co.za/4-things-customer-service-and-retail-brands-get-wrong-about-customer-loyalty/",
      company: "CM.com"
    },
    // SEACOM Articles
    {
      title: "The End of Third-Party Cookies",
      description: "What businesses need to know about the future of tracking",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://mediaupdate.co.za/marketing/151495/the-end-of-third-party-cookies-what-businesses-need-to-know",
      company: "SEACOM"
    },
    {
      title: "Technology in Uganda's Economy",
      description: "Technology is key to transforming Uganda's informal economy",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.busiweek.com/technology-key-to-transforming-ugandas-informal-economy/",
      company: "SEACOM"
    },
    {
      title: "Organizations Future Fit",
      description: "How organisations can stay future fit in a changing landscape",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/11/215171.html",
      company: "SEACOM"
    },
    {
      title: "Economic Impact of Connectivity",
      description: "The Economic Impact Of Connectivity In South Africa",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://techfinancials.co.za/2022/02/16/the-economic-impact-of-connectivity-in-south-africa/",
      company: "SEACOM"
    },
    {
      title: "5G And Fibre in South Africa",
      description: "Why we need both technologies to drive connectivity",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://techfinancials.co.za/2021/03/30/5g-and-fibre-why-we-need-both-to-drive-connectivity-in-south-africa/",
      company: "SEACOM"
    },
    {
      title: "Networks and the Metaverse",
      description: "Are local networks ready for the metaverse?",
      image: "https://i.imghippo.com/files/UBul1186IPI.jpg",
      link: "https://www.bizcommunity.com/Article/196/663/226033.html",
      company: "SEACOM"
    },
    {
      title: "The Quantum Internet",
      description: "A glimpse at the future of connectivity",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.smetechguru.co.za/the-quantum-internet-a-glimpse-at-the-future-of-connectivity/",
      company: "SEACOM"
    },
    // Meta Articles
    {
      title: "Social Media for Good",
      description: "Using social media as a source for good",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.pressreader.com/zimbabwe/newsday-zimbabwe/20211224/281685438168909",
      company: "Meta"
    },
    // Tarsus Distribution Articles
    {
      title: "Hyperconvergence Infrastructure",
      description: "What It Is and How To Use it to unlock business value",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://tarsusdistribution.co.za/hyperconvergence-infrastructure-what-it-is-and-how-to-use-it-to-unlock-business-value/",
      company: "Tarsus Distribution"
    },
    {
      title: "HPE SimpliVity Data Centre",
      description: "Get More Out Of Your Data Centre For Less",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://tarsusdistribution.co.za/get-more-out-of-your-data-centre-for-less-with-hpe-simplivity/",
      company: "Tarsus Distribution"
    },
    {
      title: "HP Neverstop Laser",
      description: "The Printer That Pays For Itself",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://tarsusdistribution.co.za/hp-neverstop-laser-the-printer-that-pays-for-itself/",
      company: "Tarsus Distribution"
    },
    // LG Electronics Articles
    {
      title: "Award-Winning Sound Series",
      description: "5 binge-worthy series to watch for their award-winning sound",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/482/234057.html",
      company: "LG Electronics"
    },
    {
      title: "LG UltraGear Gaming Monitors",
      description: "Why LG UltraGear monitors are geared for the Gaming Age",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://reframed.co/why-lg-ultragear-monitors-are-geared-for-the-gaming-age/",
      company: "LG Electronics"
    },
    {
      title: "Wildlife Documentaries 2022",
      description: "Nature in all its splendour: The best wildlife documentaries",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://mypr.co.za/nature-in-all-its-splendour-the-best-wildlife-documentaries-to-watch-in-2022/",
      company: "LG Electronics"
    },
    {
      title: "HVAC Energy Efficiency",
      description: "The role of HVAC in energy efficiency and workplace productivity",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/704/232994.html",
      company: "LG Electronics"
    },
    {
      title: "Energy-Efficient Cooling",
      description: "How to stay cool the energy-efficient way",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.engineeringnews.co.za/article/how-to-stay-cool-the-energy-efficient-way-2022-10-27/rep_id:4136",
      company: "LG Electronics"
    },
    // Axis Communications Articles
    {
      title: "Sustainable Mining Technologies",
      description: "How technology can transform South Africa's mining sector",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.crown.co.za/capital-equipment-news/insights/23199-sustainable-mining-needs-sustainable-practices",
      company: "Axis Communications"
    },
    {
      title: "School Safety Solutions",
      description: "How a Single Point of Entry Supports Safe School Environments",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://securityreviewmag.com/?p=24924",
      company: "Axis Communications"
    },
    {
      title: "Estate Security Upgrade",
      description: "Estate d'Afrique security upgrade case study",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.securitysa.com/15843r",
      company: "Axis Communications"
    },
    {
      title: "Video Surveillance Trust",
      description: "Maintaining trust through signed video technology",
      image: "/placeholder.svg?height=200&width=300",
      link: "http://www.techsmart.co.za/news/Open-access--Maintaining-trust-in-video-surveillance-through-signed-video",
      company: "Axis Communications"
    },
    // Exxaro Articles
    {
      title: "Clean Energy Transition",
      description: "A CEO's perspective on the clean energy transition",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://miningdigital.com/sustainability/exxaro-ceos-perspective-clean-energy-transition",
      company: "Exxaro"
    },
    {
      title: "Mining Sector Sustainability",
      description: "Climate change and the mining sector financial sustainability",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/608/215529.html",
      company: "Exxaro"
    }
  ]

  // Group items by company
  const itemsByCompany = portfolioItems.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = [];
    }
    acc[item.company].push(item);
    return acc;
  }, {} as Record<string, typeof portfolioItems>);

  const companies = Object.keys(itemsByCompany);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#54626f] to-[#3b4957]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>
        
        {companies.map((company, companyIndex) => (
          <div key={company} className="mb-16">
            <motion.h3
              className="text-2xl font-semibold mb-8 text-[#c55e73] border-b border-[#c55e73] pb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {company}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itemsByCompany[company].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#212a32] rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#c55e73]">{item.title}</h3>
                    <p className="text-white mb-4">{item.description}</p>
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#b66091] hover:text-[#c55e73] transition duration-300">
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
