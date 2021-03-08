import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVarients = {
  firstAnimation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
      y: {
        duration: 0.25,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
  secondAnimation: {
    x: [0, 0],
    y: [0, -40],
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    'firstAnimation',
    'secondAnimation'
  )

  return (
    <>
      <motion.div
        variants={loaderVarients}
        animate={animation}
        className='loader'
      ></motion.div>
      <p
        onClick={() => cycleAnimation()}
        style={{
          cursor: 'pointer',
          backgroundColor: '#e9e9e9',
          padding: '5px 10px',
          display: 'inline-block',
          color: '#333',
          borderRadius: '30px',
        }}
      >
        Cycle Loader
      </p>
    </>
  )
}

export default Loader
