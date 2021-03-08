import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from './Loader'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}
const buttonVarients = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 8px #fff',
    boxShadow: '0 0 8px #fff',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.3,
    },
  },
  tap: {
    scale: 1,
    transiotion: {
      duration: 0.3,
    },
  },
}

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button
          variants={buttonVarients}
          whileHover='hover'
          whileTap='tap'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home
