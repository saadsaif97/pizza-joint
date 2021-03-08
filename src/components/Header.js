import React from 'react'
import { motion } from 'framer-motion'

const titleVarients = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
}

const svgVarients = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
}

const pathVarients = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
}

const Header = () => {
  return (
    <header>
      <motion.div
        className='logo'
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={1}
      >
        <motion.svg
          className='pizza-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          variants={svgVarients}
          initial='hidden'
          animate='visible'
        >
          <motion.path
            fill='none'
            d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
            variants={pathVarients}
          />
          <motion.path
            fill='none'
            d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
            variants={pathVarients}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className='title'
        variants={titleVarients}
        initial='hidden'
        animate='visible'
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header
