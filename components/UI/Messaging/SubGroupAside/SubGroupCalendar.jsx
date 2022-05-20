import tw, { css } from 'twin.macro'
import MyCalendar from '../../MyCalendar'

const SubGroupCalendar = () => {
  return (
    <div>
      <MyCalendar />
      <div
        css={css`
          margin-top: 1.5rem;
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          color: #767676;
          .head {
            color: #1a1a1a;
            margin-bottom: 0.5rem;
          }
        `}
      >
        <p className="head">Wedding day</p>
        <p>Saturday 18/12/2021</p>
        <p>9:00 am - 5:00 pm</p>
      </div>
    </div>
  )
}

export default SubGroupCalendar
