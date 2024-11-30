'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Portfolio() {
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({ 'PwC': true })
  const [showMoreCompany, setShowMoreCompany] = useState<Record<string, boolean>>({})

  const portfolioItems = [
    // PwC Articles
    {
      title: "Africa Cloud Business Survey",
      description: "Comprehensive analysis of cloud adoption trends across Africa",
      image: "/images/pwc cloud business survey.PNG",
      link: "https://www.pwc.co.za/en/publications/africa-cloud-business-survey.html",
      company: "PwC"
    },
    {
      title: "Tech-Enabled Digital Transformation",
      description: "Insights on digital transformation strategies and implementation",
      image: "/images/tech transformation pwc.PNG",
      link: "https://www.pwc.co.za/en/publications/africa-business-agenda/tech-enabled-digital-transformation.html",
      company: "PwC"
    },
    {
      title: "Economic Outlook 2024",
      description: "Analysis of economic trends and forecasts for 2024",
      image: "/images/economic outlook.PNG",
      link: "https://www.strategyand.pwc.com/a1/en/insights/south-africa-economic-outlook.html",
      company: "PwC"
    },
    {
      title: "Building Public Trust Through Tax Reporting 2024",
      description: "Insights on transparent tax practices and reporting",
      image: "/images/tax transparency pwc.PNG",
      link: "https://www.pwc.co.za/en/press-room/building-public-trust-through-tax-reporting-2024.html",
      company: "PwC"
    },
    {
      title: "SA Major Banks Analysis",
      description: "Comprehensive analysis of South African banking sector",
      image: "/images/family bar pwc.PNG",
      link: "https://www.pwc.co.za/en/press-room/sa-major-banks-analysis-jan-june-2024.html",
      company: "PwC"
    },
    {
      title: "Africa NextGen Survey 2024",
      description: "Insights into next generation perspectives across Africa",
      image: "/images/pwc next gen.PNG",
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
      image: "/images/family bar pwc.PNG",
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
      image: "/images/jacaranda cmcom.PNG",
      link: "https://www.cm.com/en-za/about-cm/our-customers/jacaranda-healthcare/",
      company: "CM.com"
    },
    {
      title: "Customer Convenience in Travel",
      description: "How the travel and leisure sector can leverage customer convenience",
      image: "/images/travel cmcom.PNG",
      link: "https://www.bizcommunity.com/Article/196/747/234238.html",
      company: "CM.com"
    },
    {
      title: "Customer Experience in Financial Services",
      description: "Today's challenges and opportunities in financial services CX",
      image: "/images/cx in finance cmcom.PNG",
      link: "https://www.bizcommunity.com/Article/196/513/228273.html",
      company: "CM.com"
    },
    {
      title: "Customer Loyalty in Retail",
      description: "4 things customer service and retail brands get wrong about loyalty",
      image: "/images/customer loyalty.PNG",
      link: "https://www.smetechguru.co.za/4-things-customer-service-and-retail-brands-get-wrong-about-customer-loyalty/",
      company: "CM.com"
    },
    // SEACOM Articles
    {
      title: "The End of Third-Party Cookies",
      description: "What businesses need to know about the future of tracking",
      image: "/images/3rd party cookies.PNG",
      link: "https://mediaupdate.co.za/marketing/151495/the-end-of-third-party-cookies-what-businesses-need-to-know",
      company: "SEACOM"
    },
    {
      title: "Technology in Uganda's Economy",
      description: "Technology is key to transforming Uganda's informal economy",
      image: "/images/uganda seacom.PNG",
      link: "https://www.busiweek.com/technology-key-to-transforming-ugandas-informal-economy/",
      company: "SEACOM"
    },
    {
      title: "Organizations Future Fit",
      description: "How organisations can stay future fit in a changing landscape",
      image: "/images/future fit.PNG",
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
      image: "/images/steve briggs 5g seacom.PNG",
      link: "https://techfinancials.co.za/2021/03/30/5g-and-fibre-why-we-need-both-to-drive-connectivity-in-south-africa/",
      company: "SEACOM"
    },
    {
      title: "Networks and the Metaverse",
      description: "Are local networks ready for the metaverse?",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://www.bizcommunity.com/Article/196/663/226033.html",
      company: "SEACOM"
    },
    {
      title: "The Quantum Internet",
      description: "A glimpse at the future of connectivity",
      image: "/images/quantum internet.PNG",
      link: "https://www.smetechguru.co.za/the-quantum-internet-a-glimpse-at-the-future-of-connectivity/",
      company: "SEACOM"
    },
    // Meta Articles
    {
      title: "Social Media for Good",
      description: "Using social media as a source for good",
      image: "/images/fb social media.PNG",
      link: "https://www.pressreader.com/zimbabwe/newsday-zimbabwe/20211224/281685438168909",
      company: "Meta"
    },
    // Tarsus Distribution Articles
    {
      title: "Hyperconvergence Infrastructure",
      description: "What It Is and How To Use it to unlock business value",
      image: "/images/hpe simplivity.jpg",
      link: "https://tarsusdistribution.co.za/hyperconvergence-infrastructure-what-it-is-and-how-to-use-it-to-unlock-business-value/",
      company: "Tarsus Distribution"
    },
    {
      title: "HPE SimpliVity Data Centre",
      description: "Get More Out Of Your Data Centre For Less",
      image: "/images/hpe simplivity.PNG",
      link: "https://tarsusdistribution.co.za/get-more-out-of-your-data-centre-for-less-with-hpe-simplivity/",
      company: "Tarsus Distribution"
    },
    {
      title: "HP Neverstop Laser",
      description: "The Printer That Pays For Itself",
      image: "/images/hp neverstop.PNG",
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
      image: "/images/lg ultragear monitors.PNG",
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
      image: "/images/role of hvac lg.PNG",
      link: "https://www.bizcommunity.com/Article/196/704/232994.html",
      company: "LG Electronics"
    },
    {
      title: "Energy-Efficient Cooling",
      description: "How to stay cool the energy-efficient way",
      image: "/images/stay cool lg.PNG",
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
      image: "/images/single point of entry.PNG",
      link: "https://securityreviewmag.com/?p=24924",
      company: "Axis Communications"
    },
    {
      title: "Estate Security Upgrade",
      description: "Estate d'Afrique security upgrade case study",
      image: "/images/axis case.PNG",
      link: "https://www.securitysa.com/15843r",
      company: "Axis Communications"
    },
    {
      title: "Video Surveillance Trust",
      description: "Maintaining trust through signed video technology",
      image: "/images/trust axis.PNG",
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
      image: "/images/climate change mining.jpg",
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

  const toggleCompany = (company: string) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  const toggleShowMore = (company: string) => {
    setShowMoreCompany(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

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
          <div key={company} className="mb-8">
            <motion.button
              onClick={() => toggleCompany(company)}
              className="w-full text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-[#c55e73] border-b border-[#c55e73] pb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{expandedCompanies[company] ? '▼' : '▶'}</span>
                  <span>{company}</span>
                  <span className="ml-2 px-3 py-1 text-sm bg-gray-800 rounded-full text-white">
                    Show {portfolioItems.filter(item => item.company === company).length} articles
                  </span>
                </div>
              </h3>
            </motion.button>
            
            {expandedCompanies[company] && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {itemsByCompany[company]
                    .slice(0, showMoreCompany[company] ? undefined : 3)
                    .map((item, index) => (
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
                          Read Article
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {itemsByCompany[company].length > 3 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => toggleShowMore(company)}
                      className="bg-[#c55e73] hover:bg-[#b66091] text-white px-6 py-2 rounded-full transition-colors"
                    >
                      {showMoreCompany[company] ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
