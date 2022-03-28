import React from 'react'
import AboutContainer from './AboutContainer'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <AboutContainer />
      </div>
    </motion.div>
  )
}

export default About