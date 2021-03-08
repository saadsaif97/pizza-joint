import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const childVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 3000)
  }, [])

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarients}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.p variants={childVarients}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.p>
    </motion.div>
  )
}

export default Order
