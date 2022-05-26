import tw, { css } from 'twin.macro'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import dayjs from 'dayjs'

const SchedulerTopbar = ({ currentMonth, setCurrentMonth }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
        padding: 15px 30px 8px 24px;
      `}
    >
      <div
        tw="flex flex-row items-center gap-6"
        css={css`
          svg {
            cursor: pointer;
            color: #de8e0e;
          }
        `}
      >
        Today
        <span
          onClick={() => {
            setCurrentMonth(currentMonth - 1)
          }}
        >
          <BiChevronLeft size={18} />
        </span>
        <span
          onClick={() => {
            setCurrentMonth(currentMonth + 1)
          }}
        >
          <BiChevronRight size={18} />
        </span>
      </div>
      <p>{months[currentMonth]} 2021</p>
      <p>Week</p>
    </div>
  )
}

export default SchedulerTopbar
