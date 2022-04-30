import tw, { css } from 'twin.macro'
import { useState } from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.css'
import { FiCalendar } from 'react-icons/fi'

const DateFilter = () => {
  const filters = ['1D', '30D', '1Y', 'All']
  const [active, setActive] = useState(0)
  return (
    <div
      tw="flex flex-row items-center gap-3"
      css={css`
        background: #ffffff;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 8px;
        max-width: 213px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          span {
            padding: 6px 12px;
            border-radius: 5px;
            cursor: pointer;
            color: #767676;
            :hover {
              color: #de8e0e;
            }
          }
        `}
      >
        {filters.map((filter, ind) => (
          <span
            css={
              active === ind
                ? css`
                    background: #fdf9f3;
                    color: #de8e0e;
                  `
                : null
            }
            onClick={() => setActive(ind)}
            key={ind}
          >
            {filter}
          </span>
        ))}
      </div>
      <FiCalendar size={16} />
    </div>
  )
}

export default DateFilter
