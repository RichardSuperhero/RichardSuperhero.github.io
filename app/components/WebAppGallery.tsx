'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WebAppGallery() {
  const webApps = [
    {
      title: "Interactive Data Visualization",
      description: "A dynamic chart showcasing complex data relationships",
      image: "/placeholder.svg?height=300&width=500",
      link: "/web-app/data-viz"
    },
    {
      title: "AI-Powered Chatbot",
      description: "An intelligent
conversational interface for customer support",
      image: "/placeholder.svg?height=300&width=500",
      link: "/web-app/chatbot"
    },
    {
      title: "3D Product Configurator",
      description: "Customizable 3D product viewer with real-time updates",
      image: "/placeholder.svg?height=300&width=500",
      link: "/web-app/3d-configurator"
    },
    {
      title: "Augmented Reality Showcase",
      description: "AR-enabled product demonstrations for immersive experiences",
      image: "/placeholder.svg?height=300&width=500",
      link: "/web-app/ar-showcase"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web App Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webApps.map((app, index) => (
            <motion.div
              key={index}
              className="bg-[#212a32] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={app.image} alt={app.title} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c55e73]">{app.title}</h3>
                <p className="text-white mb-4">{app.description}</p>
                <Link href={app.link} className="text-[#b66091] hover:text-[#c55e73] transition duration-300">
                  View Web App
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

