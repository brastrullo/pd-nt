import React, { createRef } from 'react'
import Node from './Node'
import { motion } from 'framer-motion'


const GraphViz = ({
  inView,
  fillColor,
  fillColorAlt,
  textColor,
  textColorAlt,
  classNames,
  children,
}) => {

  const width = 200
  const barWidth = 4
  const maxH = 60
  const minH = 0
  const nodes = width / barWidth - 10

  console.log({nodes})

  const nodeArray = Array(nodes)
    .fill()
    .map((x, i) => i)

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.01,
          delayChildren: 0,
          staggerDirection: -1,
        },
      },
    }

  return (
    <div
      className={`flex flex-col p-4 bg-transparent border border-gray-500 rounded ${classNames}`}
    >
      <div className="flex justify-between">
        <p className="flex items-center">
          {children}
          <span className={`ml-2 ${textColor}`}>Issues</span>
        </p>
        <div className="flex flex-col">
          <span
            className={`text-xs before:content-['⏺'] before:m-1 ${textColorAlt}`}
          >
            Opened
          </span>
          <span
            className={`text-xs before:content-['⏺'] before:m-1 ${textColor}`}
          >
            Closed
          </span>
        </div>
      </div>
      <div className="mt-1">
        <div>
          <motion.svg
            variants={container}
            initial="hidden"
            animate="show"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            className="rotate-180 m-0"
            viewBox={`0 0 200 ${maxH}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {nodeArray.map((node, i) => <Node key={`node${i}`} i={i} inView={inView} width={width} barWidth={barWidth} maxH={maxH} minH={minH} node={node} fillColor={fillColor} fillColorAlt={fillColorAlt} />
            )}
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
export default GraphViz
