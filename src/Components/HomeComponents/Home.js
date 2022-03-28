import React from 'react'
import HomePhotoContainer from './HomePhotoContainer'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div>
      <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <HomePhotoContainer />
      </motion.div>
    </div>
  )
}

export default Home