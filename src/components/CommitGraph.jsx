import { getRandomInt } from '../utils/utils'
const CommitGraph = ({ user, classNames }) => {
  const boxArray = Array(30)
    .fill()
    .map((x, i) => i)
  return (
    <div className={`flex justify-center flex-col ${classNames}`}>
      <span className="text-xs font-mono text-green-600">{user}</span>
      <div className={`flex flex-wrap w-[calc((30*(.375rem+1px))/2)]`}>
        {boxArray.map((box, i) => {
          return (
            <div
              key={`commits${i}`}
              style={{
                background: `hsl(
                  ${getRandomInt(75, 175)},
                  ${getRandomInt(10, 40)}%,
                  ${getRandomInt(40, 80)}%
                )`,
              }}
              className="w-1.5 h-1.5 mr-px mb-px"
            />
          )
        })}
      </div>
    </div>
  )
}
export default CommitGraph
