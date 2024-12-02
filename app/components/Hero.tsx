'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-white relative select-none pointer-events-none">
        <div className="container mx-auto px-6 text-center flex-grow flex flex-col justify-center">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <style jsx global>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              .animated-gradient {
                background: linear-gradient(
                  45deg,
                  #C65BCF 0%, // Bright purple
                  #F27BBD 10%, // Pink
                  #EEF1FF 20%, // Very light blue
                  #9BA4B5 30%, // Light blue-gray
                  #C65BCF 40%, // Bright purple
                  #F27BBD 50%, // Pink
                  #EEF1FF 60%, // Very light blue
                  #9BA4B5 70%, // Light blue-gray
                  #C65BCF 80%, // Bright purple
                  #F27BBD 90%, // Pink
                  #C65BCF 100%, // Bright purple
                  #F27BBD 110%, // Pink
                  #EEF1FF 120%, // Very light blue
                  #9BA4B5 130%, // Light blue-gray
                  #C65BCF 140%, // Bright purple
                  #F27BBD 150%, // Pink
                  #EEF1FF 160%, // Very light blue
                  #9BA4B5 170%, // Light blue-gray
                  #C65BCF 180%, // Bright purple
                  #F27BBD 190%, // Pink
                  #C65BCF 200%, // Bright purple
                  #F27BBD 210%, // Pink
                  #EEF1FF 220%, // Very light blue
                  #9BA4B5 230%, // Light blue-gray
                  #C65BCF 240%, // Bright purple
                  #F27BBD 250%, // Pink
                  #EEF1FF 260%, // Very light blue
                  #9BA4B5 270%, // Light blue-gray
                  #C65BCF 280%, // Bright purple
                  #F27BBD 290%, // Pink
                  #C65BCF 300% // Bright purple
                );
                background-size: 300% 300%;
                animation: gradient 36s linear infinite;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
              }
              .gradient-bg {
                position: relative;
              }
              .gradient-bg::before {
                content: '';
                position: absolute;
                top: -10px;
                left: -10px;
                right: -10px;
                bottom: -10px;
                background: linear-gradient(
                  180deg,
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #EEF1FF, // Very light blue
                  #9BA4B5, // Light blue-gray
                  #C65BCF, // Bright purple
                  #F27BBD, // Pink
                  #C65BCF  // Bright purple
                );
                background-size: 100% 3000%;
                animation: gradient 36s linear infinite;
                filter: blur(10px);
                opacity: 0;
                z-index: -1;
                visibility: hidden;
                -webkit-background-clip: text;
                background-clip: text;
              }
              .merwe {
                letter-spacing: 0.10em;
                font-size: 118%;
                margin-left: 0.32em;
              }
              .richard {
                font-size: 115%;
                margin-left: 0.25em;
              }
              .van-der {
                font-size: 115%;
                margin-left: 0.25em;
              }
            `}</style>
            <h1 className="text-7xl sm:text-8xl font-bold tracking-tight">
              <br />
              <div className="gradient-bg" style={{ visibility: 'hidden' }}>
                <div className="animated-gradient">
                  <motion.span 
                    className="block richard"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0 }}
                  >
                    RICHARD
                  </motion.span>
                  <motion.span 
                    className="block van-der"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  >
                    VAN DER
                  </motion.span>
                  <motion.span 
                    className="block merwe"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    onAnimationComplete={() => {
                      const gradientBg = document.querySelector('.gradient-bg');
                      if (gradientBg) {
                        gradientBg.setAttribute('style', 'visibility: visible');
                      }
                    }}
                  >
                    MERWE
                  </motion.span>
                </div>
              </div>
            </h1>
            <motion.p 
              className="mt-3 text-2xl mb-24 text-gray-300 font-roboto italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              style={{ marginLeft: '1em' }}
            >
              Content Specialist<br /><br /><br />
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#212a32] via-[#3b4957] to-[#54626f] -mt-24">
        <div className="container mx-auto px-6 pt-20">
          <motion.div
            className="max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <p className="mt-6 text-2xl text-gray-300 max-w-3xl mx-auto text-center leading-tight font-roboto">
              <span className="block">
                What we write is about more than <strong>content</strong>.
              </span>
              <span className="block">
                It's about turning data into <strong>strategy</strong>,
              </span>
              <span className="block">
                delivering accurate <strong>reporting</strong>,
              </span>
              <span className="block">
                improving industry <strong>credibility</strong>,
              </span>
              <span className="block">
                and transforming <strong>content</strong> 
                <br></br>into a competitive <strong>advantage</strong>.
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
            className="flex justify-center"
          >
            <a
              href="/Richard_CV.pdf"
              download
              className="px-6 py-3 bg-[#c55e73] text-white rounded-full hover:bg-[#d47288] transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>
          <div className="h-16"></div>
        </div>
      </section>
    </>
  )
}
