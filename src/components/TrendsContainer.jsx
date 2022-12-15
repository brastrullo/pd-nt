import React, { useState, useEffect, useRef } from 'react'
import Odometer from 'react-odometerjs'
import '../odometer.css'

const TrendsContainer = ({ inView, classNames, title, diff, percent, color }) => {
  const isPositive = diff === '+'
  const pastMonth = isPositive ? '↑' : '↓'
  const pastMonthColor = isPositive ? 'data-[animate=start]:text-green-600' : 'data-[animate=start]:text-red-600'

  const animateClasses = 'transition opacity-0 data-[animate=start]:opacity-100 absolute translate-y-2 data-[animate=start]:translate-y-0'

  const span1 = useRef(null)
  const span2 = useRef(null)
  const span3 = useRef(null)
  const spanColour = useRef(null)
  const placeholderIcon = useRef(null)
  const arrow = useRef(null)

  const splitPercent = percent.split(' ')
  const [odometerValue1, setOdometerValue1] = useState('0.00')
  const [odometerValue2, setOdometerValue2] = useState('0.00')
  
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
      setOdometerValue1(splitPercent[0])
      setOdometerValue2(splitPercent[1])
      span1.current.dataset.animate = 'start'
      span2.current.dataset.animate = 'start'
      span3.current.dataset.animate = 'start'
      spanColour.current.dataset.animate = 'start'
      arrow.current.dataset.animate = 'start'
      placeholderIcon.current.dataset.animate = 'start'
      }, 100)
    } else {
      setOdometerValue1('0.00')
      setOdometerValue2('0.00')
      span1.current.dataset.animate = ''
      span2.current.dataset.animate = ''
      span3.current.dataset.animate = ''
      spanColour.current.dataset.animate = ''
      arrow.current.dataset.animate = ''
      placeholderIcon.current.dataset.animate = ''
    }
  }, [inView, splitPercent])
  return (
    <div
      className={`flex flex-col border rounded bg-transparent p-4 border-gray-500 ${classNames}`}
    >
      <p className={`text-left ${color}`}>{title}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono text-gray-400">
          <span ref={span1} className={`${animateClasses}`}>{diff}</span>
          <span className='ml-3'>
            <Odometer format="(ddd).dd" duration={350} value={odometerValue1} />
          </span>
          <span className="text-md ml-2">{`(`}</span>
          <span ref={span2} className={`${animateClasses}`}>{`${diff}`}</span>
          <span className="ml-3">
            <Odometer format="(ddd).dd" duration={350} value={odometerValue2} />
          </span>
          <span ref={span3} className={`${animateClasses}`}>{`%`}</span>
          <span className="ml-2.5">{`)`}</span>
        </span>
        <span ref={spanColour} className={`text-sm transition text-white ${pastMonthColor}`}>
          <i ref={arrow} className={`mr-1 ${animateClasses}`}>{pastMonth}</i><i ref={placeholderIcon} className='opacity-100 relative -right-0.5 data-[animate=start]:opacity-0'>_</i><span className='ml-2'>past month</span>
        </span>
      </div>
    </div>
  )
}

export default TrendsContainer
