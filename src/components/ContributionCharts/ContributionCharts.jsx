import React, { useState } from 'react'
import CommitGraph from '../CommitGraph'
import ContributionsSymbol from '../icons/ContributionsSymbol'
import GraphViz from '../GraphViz/GraphViz'
import HeartSymbol from '../icons/HeartSymbol'
import IssuesSymbol from '../icons/IssuesSymbol'
import PullRequestSymbol from '../icons/PullRequestSymbol'
import PushCommitSymbol from '../icons/PushCommitSymbol'
import TrendsContainer from '../TrendsContainer'
import { getRandomInt } from '../../utils/utils'
import { InView } from 'react-intersection-observer'

const ContributionCharts = () => {
  const componentWidthClass = 'w-[calc(20rem*3+1rem)]'
  const [isInView, setIsInView] = useState(false)
  return (
    <InView as="div" onChange={(inview, entry) => setIsInView(inview)}>
      <div className={`flex justify-between items-center ${componentWidthClass} mx-auto border border-gray-500 rounded p-4 mb-2`}>
        <p className="flex items-center">
          <ContributionsSymbol />
          <span className="ml-2 text-pink-500">
            827 Contributions in the Last 30 Days
          </span>
        </p>
        <div className={`flex flex-wrap w-[calc((30*(.5rem+.125rem)))]`}>
          {Array(30)
            .fill()
            .map((x, i) => i)
            .map((box, i) => {
              return (
                <div
                  key={`contributions${i}`}
                  style={{
                    background: `hsl(
                        ${getRandomInt(315, 330)},
                        ${getRandomInt(40, 80)}%,
                        ${getRandomInt(40, 80)}%
                      )`,
                  }}
                  className="w-2 h-2 mr-0.5 rounded-sm"
                />
              )
            })}
        </div>
      </div>
      <div className={`mx-auto ${componentWidthClass}`}>
        <div className="flex mb-2">
          <TrendsContainer
            inView={isInView}
            classNames="w-80 mr-2"
            color="text-blue-500"
            title="1.07 Opened/Closed Issue Ratio"
            diff="+"
            percent="1.12 14.18"
          />
          <TrendsContainer
            inView={isInView}
            classNames="w-80 mr-2"
            color="text-purple-500"
            title="253 Pull Requests Opened"
            diff="-"
            percent="76.0 23.1"
          />
          <TrendsContainer
            inView={isInView}
            classNames="w-80"
            color="text-red-500"
            title="825 Commits"
            diff="-"
            percent="888.0 51.84"
          />
        </div>
        <div className="flex mb-2">
          <GraphViz
            inView={isInView}
            classNames="w-80 mr-2"
            title="Issues"
            label1="Opened"
            label2="Closed"
            textColor="text-blue-500"
            textColorAlt="text-blue-300"
            fillColor="fill-blue-500"
            fillColorAlt="fill-blue-300"
          >
            <IssuesSymbol />
          </GraphViz>
          <GraphViz
            inView={isInView}
            classNames="w-80 mr-2"
            title="Pull Requests"
            label1="Opened"
            label2="Closed"
            textColor="text-purple-500"
            textColorAlt="text-purple-300"
            fillColor="fill-purple-500"
            fillColorAlt="fill-purple-300"
          >
            <PullRequestSymbol />
          </GraphViz>
          <GraphViz
            inView={isInView}
            classNames="w-80"
            title="Issues"
            label1="Opened"
            label2="Closed"
            textColor="text-red-500"
            textColorAlt="text-red-400"
            fillColor="fill-red-600"
            fillColorAlt="fill-red-400"
          >
            <PushCommitSymbol />
          </GraphViz>
        </div>
      </div>
      <div></div>
      <div className={`flex justify-between ${componentWidthClass} p-4 mx-auto border border-gray-500 rounded`}>
        <p className="flex justify-center items-center text-green-500">
          <HeartSymbol />
          <span className="ml-2">Top Contributors</span>
        </p>
        <div className="flex">
          <CommitGraph classNames="mr-8 w-fit" user="DhiyaneshGeek" />
          <CommitGraph classNames="mr-8 w-fit" user="ritikchaddha3232" />
          <CommitGraph classNames="mr-8 w-fit" user="princechaddha" />
          <CommitGraph classNames="mr-8 w-fit" user="ehsandeep" />
          <CommitGraph classNames="w-fit" user="pdelteil" />
        </div>
      </div>
    </InView>
  )
}
export default ContributionCharts
