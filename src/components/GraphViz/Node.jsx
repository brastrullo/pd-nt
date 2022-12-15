import React from 'react'
import { getRandomInt } from '../../utils/utils'
import { motion } from 'framer-motion'

const Node = ({
  i,
  inView,
  barWidth,
  maxH,
  minH,
  node,
  fillColor,
  fillColorAlt,
}) => {
  const nodeH = getRandomInt(maxH * 0.8, minH)
  const placementX = i * barWidth + node

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <motion.g
      key={`g${i}`}
      variants={item}
    >
      <motion.rect
        variants={item}
        transition={{ spring, duration: 2 }}
        initial={{ height: 0 }}
        animate={inView ? { height: nodeH } : { height: 0 }}
        className={`${fillColor}`}
        x={placementX}
        width={barWidth}
      />
      <motion.rect
        variants={item}
        transition={{spring, duration: .5, delay: .5}}
        initial={{ height: '2px' }}
        animate={
          inView ? { height: getRandomInt(nodeH, nodeH * 0.2) } : { height: 0 }
        }
        className={`${fillColorAlt}`}
        x={placementX}
        width={barWidth}
      />
    </motion.g>
  )
}

export default Node
