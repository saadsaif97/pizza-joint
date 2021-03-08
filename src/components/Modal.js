import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const backdropVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const modalVarients = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '30vh',
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: 'spring',
    },
  },
}

const Modal = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={backdropVarients}
        initial='hidden'
        animate='visible'
        className='backdrop'
      >
        <motion.div className='modal' variants={modalVarients}>
          <p>Want to make another pizza?</p>
          <Link to='/'>
            <button>Start Again</button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
