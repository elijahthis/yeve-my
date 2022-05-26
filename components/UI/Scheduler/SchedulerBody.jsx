import tw, { css } from 'twin.macro'
import { useEffect } from 'react'
import { getMonthMatrix } from './helpers'
import DayBox from './pieces/DayBox'

const SchedulerBody = ({ currentMonth }) => {
  const monthMatrix = getMonthMatrix(currentMonth)
  useEffect(() => {
    console.log(monthMatrix)
  }, [])

  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        height: 600px;
        > * {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border-bottom: 1.5px solid #e5e5e5;
          border-left: 1.5px solid #e5e5e5;
        }
      `}
    >
      {monthMatrix.map(week => (
        <div>
          {week.map((day, ind) => (
            <DayBox day={day} key={ind} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default SchedulerBody
