import React from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: 'yellow',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          initial={{ x: '-100vw' }}
          animate={{ x: '0px' }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to='/toppings'>
            <motion.button
              variants={buttonVarients}
              whileHover='hover'
              whileTap='tap'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
