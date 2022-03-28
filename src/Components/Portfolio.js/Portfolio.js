import React, { Suspense, lazy } from 'react'
// import PortfolioImageContainer from './PortfolioImageContainer'
import Footer from '../HomeComponents/Footer'
import { motion } from 'framer-motion'
import DotLoader from "react-spinners/DotLoader";
const PortfolioImageContainer = lazy(() => import('./PortfolioImageContainer')) 
function Portfolio() {
    
  return (
    <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <Suspense fallback={<DotLoader />}>
          <PortfolioImageContainer />
        </Suspense>
          <Footer />
      </div>
    </motion.div>
  )
}

export default Portfolio